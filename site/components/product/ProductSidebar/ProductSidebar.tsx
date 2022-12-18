import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import { Button, Text, Rating, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import ErrorMessage from '@components/ui/ErrorMessage'
import type { ShibaProduct } from '../types'
import { ExternalLink } from '@components/icons'

interface ProductSidebarProps {
  product: ShibaProduct
  className?: string
  selectedOptions: SelectedOptions
  setSelectedOptions: Dispatch<SetStateAction<SelectedOptions>>
}

const ProductSidebar: FC<ProductSidebarProps> = ({
  product,
  selectedOptions,
  setSelectedOptions,
  className,
}) => {
  const addItem = useAddItem()
  const { openSidebar, setSidebarView } = useUI()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product, setSelectedOptions])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    setError(null)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      setSidebarView('CART_VIEW')
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      if (err instanceof Error) {
        console.error(err)
        setError({
          ...err,
          message: 'Could not add item to cart. Please try again.',
        })
      }
    }
  }

  return (
    <div className={className}>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Text
        className="pb-4 break-words w-full max-w-xl"
        html={product.descriptionHtml || product.description}
      />
      <div className="flex flex-row justify-between items-center">
        <Rating value={4} />
        <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
      </div>
      <div>
        {error && <ErrorMessage error={error} className="my-5" />}
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </Button>
        )}
      </div>
      <div className="mt-6">
        {/* <Collapse title="Care">
          This is a limited edition production run. Printing starts when the
          drop ends.
        </Collapse> */}
        {/* <Collapse title="Details">{product.description}</Collapse> */}

        {product.options[0] && (
          <Button className="mt-6">
            <a
              href={
                selectedOptions.link
                  ? selectedOptions.link
                  : product.options[0].values[0].link
              }
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              Buy on Amazon <ExternalLink />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProductSidebar
