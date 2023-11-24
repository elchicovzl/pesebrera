"use client";

import ButtonPayment from '@/components/button-payment';
import { GiveWay, Transaction } from '@/types';
import { ShieldCheck, Ticket } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import { NumericFormat } from "react-number-format";
import { RedirectAfrer } from '@/components/redirect-after-seconds';
import { User } from '@prisma/client';
import { CustomUser } from '@/app/api/auth/[...nextauth]/options';

interface CheckoutProps {
    transaction: Transaction;
    giveway: GiveWay;
    user: CustomUser;
}

const Checkout : React.FC<CheckoutProps> = ({
    transaction,
    giveway,
    user
  }) => {

    const searchParams = useSearchParams();
    const gatewayId = searchParams.get('id');

    if (gatewayId) {
        if (transaction.gatewayId == gatewayId) {
            return (
                
                <div className="h-screen text-center">
                    <RedirectAfrer 
                        icon={<ShieldCheck className="h-5 w-5" />} 
                        variant="default"
                        title="Su Pago fue Exitoso." 
                        seconds={5} 
                        redirect="/boletas" 
                    />
                </div>
            )
        }else {
            return (
                <div className="h-screen text-center">
                    <RedirectAfrer 
                        icon={<ShieldCheck className="h-5 w-5" />}
                        variant="destructive"
                        title="Hubo un error con su transaccion vuelva a intentarlo." 
                        seconds={5} 
                        redirect="/" 
                    />
                </div>
            )
        }
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div className="w-full">
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-11/12 lg:pr-10">
                            <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                <div className="w-full flex flex-col sm:flex-row items-center">
                                    <div className="overflow-hidden mb-3 rounded-lg w-16 bg-gray-50 border border-gray-200">
                                        <Ticket height={50} width={50} className='mx-auto' />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-semibold uppercase text-gray-600">{giveway.name}</h6>
                                        
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600 text-xl">
                                            <span className="text-gray-800 mr-3">x {transaction.tickets.length}</span>
                                            <NumericFormat
                                                displayType="text"
                                                className="ml-auto"
                                                value={transaction.total}
                                                prefix="$"
                                                thousandSeparator
                                            />
                                            <span className="ml-1">cop</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Subtotal</span>
                                    </div>
                                    <div className="pl-3 font-semibold">
                                        <span className="font-semibold text-gray-600 text-xl">
                                            <NumericFormat
                                                displayType="text"
                                                className="ml-auto"
                                                value={transaction.total}
                                                prefix="$"
                                                thousandSeparator
                                            />
                                            <span className="ml-1">cop</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Impuestos</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">$0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-gray-600">Total</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold">
                                            <NumericFormat
                                                displayType="text"
                                                className="ml-auto"
                                                value={transaction.total}
                                                prefix="$"
                                                thousandSeparator
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-5/12">
                            <div className='w-full'>
                                <ButtonPayment 
                                    total={transaction.total} 
                                    reference={transaction.code} 
                                    giveaway={giveway.id}
                                    user={user}    
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;
