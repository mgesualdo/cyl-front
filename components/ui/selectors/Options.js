import React from "react"
import OptionItem from "./OptionItem"

const Options = ({
  items,
  form,
  field,
  width = "16rem",
  fd = "row",
  jc,
  onItemClick,
}) => {
  return (
    <>
      <div className="df aic mb10">
        {items.map((i) => (
          <OptionItem
            key={i.text}
            item={i}
            onClick={onItemClick}
            form={form}
            field={field}
            width={fd === "row" ? `${100 / items.length - 2}%` : "100%"}
            mb={fd === "row" ? "0" : "0.5rem"}
          />
        ))}
      </div>
      <style jsx>{`
        div {
          flex-direction: ${fd};
          justify-content: ${jc};
          width: ${width};
        }
      `}</style>
    </>
  )
}

export default Options
