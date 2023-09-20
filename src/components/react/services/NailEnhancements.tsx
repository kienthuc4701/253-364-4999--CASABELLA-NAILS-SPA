type Props = {
   data: any
}

const NailEnhancements = ({data}:Props) => {
  return (
   <div>
      <h5 className="service-name">Nail Enhancements</h5>
      <div className="wrapper section-style">
      <div className="flex flex-col items-center gap-x-10 md:(flex-row items-start)">
            <div className="md:(flex-shrink-0 w-1/2)">
               <h3 className="uppercase text-secondary font-semibold italic my-5 text-center">Acrylic</h3>
               <div className="w-full border-2 border-black text-sm mb-5">
                  <div className="grid grid-cols-4 gap-x-12 font-semibold bg-primary">
                     <div className="col-start-3 text-white py-1">Full Set</div>
                     <div className="text-white py-1">Fill In</div>
                  </div>
                  <div className="grid grid-cols-4 gap-x-12 font-semibold bg-zinc-200">
                     <div col-start-1 col-end-3 text-white py-1 text-start><span text-gray-900>Acrylic With Gel Color</span></div>
                     <div text-white py-1 text-start><span text-gray-900>$50</span></div>
                     <div text-white py-1 text-start><span text-gray-900>$40</span></div>
                  </div>
            </div>
            {/* <Image src="/sns.jpeg" width={600} height={200} alt="SNS"/> */}
            </div>
            {/* <!-- right --> */}
            <div className="text-sm font-medium">
               {/* <h3 className="uppercase text-secondary font-semibold italic my-5 text-center">SNS Dipping</h3>
               <p className="text-sm">Our high-end Dipping Powder not only produces exceptional beauty but also results in healthy nails. The product is unique in multiple ways:</p>
               <ul>
                  <li>Natural looking </li>
                  <li>No damage to nail bed</li>
                  <li>Lightweight & flexible</li>
                  <li>Non-toxic & odor-free</li>
                  <li>Strong & durable<li>
                  <li>Crack & chip-resistant</li>
                  <li>Calcium & vitamin E fortified</li>
               </ul> */}
               {/* <ul className="my-5 flex flex-col gap-y-2">
                  <li className="flex justify-between items-center gap-x-1 font-semibold text-primary">
                     <span className="w-fit">SNS Dip Color with Tip</span>
                     <div className="flex-1" h-1 border-b-1/>
                     <span className="w-fit">$50/ $60</span>
                  </li>
                  <li flex justify-between items-center gap-x-1 font-semibold text-primary>
                     <span className="w-fit">SNS Dip French With Tip
                     </span>
                     <div className="flex-1" h-1 border-b-1/>
                     <span className="w-fit">$60/ $70</span>
                  </li>
                  <li flex justify-between items-center gap-x-1 font-semibold text-primary>
                     <span className="w-fit">SNS Ombre With Tip</span>
                     <div className="flex-1" h-1 border-b-1/>
                     <span className="w-fit">$65/ $75</span>
                  </li>
                  <li flex justify-between items-center gap-x-1 font-semibold text-primary>
                     <span className="w-fit">Gel X</span>
                     <div className="flex-1" h-1 border-b-1/>
                     <span className="w-fit">$60+</span>
                  </li>
                  <p text-sm>Gel-X nails are flexible, lightweight, and natural-looking, especially when compared to acrylics. NO liquid smell. QUICK to apply. Additionally, they are extremely easy to shape.</p>
                  <li flex justify-between items-center gap-x-1 font-semibold text-primary>
                     <span className="w-fit">T.A.P Gel</span>
                     <div className="flex-1" h-1 border-b-1/>
                     <span className="w-fit">$60+</span>
                  </li>
                  <p text-sm>T.A.P Gel is a complete Nail Enhancement System that builds strength and foundation for anyone looking for more lightweight and natural-looking nails.</p>
               </ul> */}
            </div>
         </div>
      </div>
   </div>
  )
}

export default NailEnhancements