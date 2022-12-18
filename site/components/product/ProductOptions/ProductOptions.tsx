import { memo } from 'react'
import { Swatch } from '@components/product'
import { SelectedOptions } from '../helpers'
import type { ShibaOptions } from '../types'

interface ProductOptionsProps {
  options: ShibaOptions[]
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <div>
      {options.map((opt) => (
        <div className="pb-4" key={opt.displayName}>
          <h2 className="uppercase font-medium text-sm tracking-wide">
            {opt.displayName}
          </h2>
          <div role="listbox" className="flex flex-row py-4">
            {opt.values.map((v, i: number) => {
              const active = selectedOptions[opt.displayName.toLowerCase()]
              return (
                <Swatch
                  key={`${opt.id}-${i}`}
                  active={v.label.toLowerCase() === active}
                  variant={opt.displayName}
                  color={v.hexColors ? v.hexColors[0] : ''}
                  label={v.label}
                  onClick={() => {
                    setSelectedOptions((selectedOptions) => {
                      return {
                        ...selectedOptions,
                        [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                        link: v.link,
                        price: v.price,
                      }
                    })
                  }}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(ProductOptions)
