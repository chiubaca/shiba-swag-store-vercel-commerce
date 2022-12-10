import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { colorInput } from "@sanity/color-input";

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shiba-swag-store',

  projectId: 'exbgx2ot',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput(),],

  schema: {
    types: schemaTypes,
  },
})
