"use client";

import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import { sha256 } from 'js-sha256';
import { useEffect } from "react";

interface ButtonPaymentProps {
    total: string;
    reference: string;
    giveaway: string;
    user: CustomUser;
}

const ButtonPayment : React.FC<ButtonPaymentProps> = ({
    total,
    reference,
    giveaway,
    user
  }) => {
    const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
    const integrity = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
    const redirectUrl2 = process.env.NEXT_PUBLIC_WOMPI_REDIRECT_URL
    const widgerUrl = process.env.NEXT_PUBLIC_WOMPI_WIDGET_URL

    const integrationKey = sha256(`${reference}${total}COP${integrity}`);

    useEffect(() => {         
                
        let element = document.getElementById('scrp')

        if (element !== null) {
            element.remove()
        }

        const buttonPay = document.getElementsByClassName('waybox-button')
        buttonPay?.classList?.add("w-full");

        if (buttonPay.length > 0) {
            buttonPay[0].remove()
        }

        const script = document.createElement("script");

        let cents = parseInt(total) * 100;

        script.src = widgerUrl;
        script.setAttribute('id', "scrp");
        script.setAttribute('data-render', "button");
        script.setAttribute('data-public-key', publicKey);
        script.setAttribute('data-currency', "COP");
        script.setAttribute('data-amount-in-cents', cents.toString());
        script.setAttribute('data-reference', reference);
        script.setAttribute('data-signatureintegrity', integrationKey);
        script.setAttribute('data-redirect-url', `${redirectUrl2}/transaccion/${reference}`)
        script.setAttribute('data-customer-data:email', user.email || "");
        script.setAttribute('data-customer-data:full-name', user.name || "");
        script.setAttribute('data-customer-data:phone-number', user.phone || "");
        script.setAttribute('data-customer-data:phone-number-prefix', "+57");

        document.getElementById("form1").appendChild(script);
        const button = document.getElementById("form1");
        button?.classList.add("float-right");

        return () => {
            let element = document.getElementById('scrp')
            if (element !== null) {
                element.remove()
            }
        }
      }, [total, publicKey, integrationKey, reference, redirectUrl2, widgerUrl, user])


    return ( 
        <form id="form1"></form>
    );
}
 
export default ButtonPayment;
