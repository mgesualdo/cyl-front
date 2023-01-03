import Image from "next/image"
import useForms, { useStore } from "../../../hooks/useForms"

const PreviewImage = ({ form, inputRef, alt = "Imagen" }) => {
  const imageUrl = useStore((state) => state[form].imageUrl)
  const fileContent = useStore((state) => state[form].fileContent)
  const { setFields } = useForms({ form })
  const src = fileContent || imageUrl || "/no-image.png"

  if (!fileContent && !imageUrl) return <></>

  return (
    <>
      <div
        className="image-container cursorp"
        onClick={() => {
          setFields({ data: { file: null, fileContent: null } })
          inputRef.current.value = ""
        }}
      >
        <Image
          src={src}
          style={{ objectFit: "contain" }}
          fill="responsive"
          alt={alt}
        />
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          height: 3rem;
          width: 3rem;
          border-radius: 0.3rem;
          overflow: hidden;
          z-index: 1;
        }
      `}</style>
    </>
  )
}

export default PreviewImage
