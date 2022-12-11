import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { media } from 'sanity-plugin-media'
import { removeBgAssetSourcePlugin } from 'sanity-plugin-asset-source-remove-bg'

import { schemaTypes } from '@cms/schemas'

export default defineConfig({
  name: 'default',
  title: 'shiba-swag-store',
  projectId: 'exbgx2ot',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
    colorInput(),
    media(),
    removeBgAssetSourcePlugin({
      apiKey: process.env.NEXT_PUBLIC_SANITY_BGREMOVE_KEY as string,
      allowedUserRoles: ['administrator', 'editor'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
