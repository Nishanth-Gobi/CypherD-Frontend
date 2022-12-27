import axios from 'axios';
import { useState } from 'react';

export const [coinsArray, setcoinsArray] = useState<any[]>([]);
export const [lastUpdated, setUpdatedAt] = useState();
export var totalBalance = 0;

const walletAddress = "";

export default function ApiData(){

    const baseUrl = 'https://cypherd-production.up.railway.app/covalent/balance/';
    const chains = ['ethereum', 'polygon', 'fantom'];
        
    async function getData() {

        for (let index = 0; index < chains.length; index++) {
            
            try{
                const { data } = await axios.get( baseUrl + chains[index]);
                setcoinsArray(data.balances);
                setUpdatedAt(data.updated_at);

                var [balance, setBalance] = useState();
                setBalance(data.total_balance);

                if(balance){
                    totalBalance += balance;
                }
            }
            catch(error){
                console.log('Error in retreiving data from the ' + chains[index] + 'chain');
            }
        }
    }

    // void getData();
}
