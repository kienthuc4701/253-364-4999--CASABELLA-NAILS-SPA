type Props = {
  src:string
}
const GalleryItem = ({src}:Props) => {
  return (
   <div className="my-20 mr-5">
    <img src={src} alt=""  loading="lazy" width={300} height={240}/>
   </div>
  )
}

export default GalleryItem