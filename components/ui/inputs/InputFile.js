import useForms from '../../../hooks/useForms'
import Swal from 'sweetalert2'
import PreviewImage from '../images/PreviewImage'
import { useRef } from 'react'

const ALLOWED_EXT = {
  images: ['png', 'jpg', 'jpeg', 'svg', 'PNG', 'JPG', 'JPEG', 'SVG'],
}

const InputFile = ({
  filesType,
  form,
  maxSizeInMB = 10,
  accept = '.jpg, .jpeg, .png, .svg',
}) => {
  const { setFields } = useForms({ form })

  const handleChange = async (e) => {
    const file = e.target.files[0]
    !!file && processFile(file)
  }

  const processFile = (file) => {
    const sizeInMB = Number((file?.size / 1024 / 1024).toFixed(4))
    if (!file) return
    const ext = file.name?.split('.').pop()

    if (!!filesType && !ALLOWED_EXT[filesType].includes(ext)) {
      Swal.fire({
        title: '¡UPS!',
        html: `<p>La extensión del archivo solo puede ser alguna de las siguientes: <b>.jpg</b>, <b>.jpeg</b>, <b>.png</b>, <b>.svg</b> </p>     
      `,
        icon: 'warning',
      })
      return
    }

    if (sizeInMB > maxSizeInMB) {
      Swal.fire({
        title: '¡UPS!',
        html: `<p>El tamaño de tu imagen no puede ser mayor a <b>${maxSizeInMB}MB</b>.</p>
      `,
        icon: 'warning',
      })
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFields({ data: { file, fileContent: reader.result } })
      }
    }

    reader.readAsDataURL(file)
  }

  const inputRef = useRef()

  return (
    <>
      <div className='df aic jcsb mb10'>
        <div
          className='df aic br3 p5 cursorp'
          style={{
            border: '1px dashed var(--greyDark)',
            width: '80%',
            height: '3rem',
          }}
          onClick={() => inputRef.current.click()}
        >
          <span style={{ verticalAlign: 'center' }}>Seleccionar archivo</span>
        </div>
        <PreviewImage form={form} inputRef={inputRef} />
      </div>
      <input
        ref={inputRef}
        type='file'
        id='image'
        accept={accept}
        onChange={handleChange}
        className='w0 h0'
      />

      <style jsx>{``}</style>
    </>
  )
}

export default InputFile
