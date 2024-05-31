/*import para import mas metadao*/
import type { Metadata } from "next";
//mr = generar el codigo veloz

export const metadata : Metadata = {
 title: 'Listo',
 description: 'mirame',
 keywords:['zapa', 'mirame']

};

export default function ContactPage(){
    return(
      <span className="text-7xl">Contact Page</span>
    )
}