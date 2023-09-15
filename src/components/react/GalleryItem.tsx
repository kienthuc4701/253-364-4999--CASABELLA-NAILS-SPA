type Props = {
  src:string
}
const GalleryItem = ({src}:Props) => {
  return (
   <div className="my-20 md:mr-5">
    <img className="mx-auto" src={src} alt=""  loading="lazy" width={400} height={240}/>
   </div>
  )
}
export default GalleryItem