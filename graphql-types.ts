export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type File = Node & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

/** Node Interface */
export type Node = {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Internal = {
  content?: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType?: Maybe<Scalars["Boolean"]>
  mediaType?: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
}

export type Directory = Node & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars["Date"]>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars["Int"]>
  host?: Maybe<Scalars["String"]>
  polyfill?: Maybe<Scalars["Boolean"]>
  pathPrefix?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  siteUrl?: Maybe<Scalars["String"]>
}

export type SiteFunction = Node & {
  functionRoute: Scalars["String"]
  pluginName: Scalars["String"]
  originalAbsoluteFilePath: Scalars["String"]
  originalRelativeFilePath: Scalars["String"]
  relativeCompiledFilePath: Scalars["String"]
  absoluteCompiledFilePath: Scalars["String"]
  matchPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePage = Node & {
  path: Scalars["String"]
  component: Scalars["String"]
  internalComponentName: Scalars["String"]
  componentChunkName: Scalars["String"]
  matchPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars["String"]>
}

export type ImageFormat = "NO_CHANGE" | "AUTO" | "JPG" | "PNG" | "WEBP" | "AVIF"

export type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE"

export type ImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED"

export type ImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION"

export type DuotoneGradient = {
  highlight: Scalars["String"]
  shadow: Scalars["String"]
  opacity?: Maybe<Scalars["Int"]>
}

export type PotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY"

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars["Float"]>
  alphaMax?: Maybe<Scalars["Float"]>
  optCurve?: Maybe<Scalars["Boolean"]>
  optTolerance?: Maybe<Scalars["Float"]>
  threshold?: Maybe<Scalars["Int"]>
  blackOnWhite?: Maybe<Scalars["Boolean"]>
  color?: Maybe<Scalars["String"]>
  background?: Maybe<Scalars["String"]>
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars["JSON"]
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
  sizes?: Maybe<Scalars["String"]>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
  breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sizes?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars["String"]>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionLevel?: Maybe<Scalars["Int"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars["Boolean"]>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

export type ImageSharpFixed = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  width: Scalars["Float"]
  height: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
}

export type ImageSharpFluid = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  sizes: Scalars["String"]
  originalImg?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
  presentationWidth: Scalars["Int"]
  presentationHeight: Scalars["Int"]
}

export type ImagePlaceholder =
  | "DOMINANT_COLOR"
  | "TRACED_SVG"
  | "BLURRED"
  | "NONE"

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars["Int"]>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>
}

export type JpgOptions = {
  quality?: Maybe<Scalars["Int"]>
  progressive?: Maybe<Scalars["Boolean"]>
}

export type PngOptions = {
  quality?: Maybe<Scalars["Int"]>
  compressionSpeed?: Maybe<Scalars["Int"]>
}

export type WebPOptions = {
  quality?: Maybe<Scalars["Int"]>
}

export type AvifOptions = {
  quality?: Maybe<Scalars["Int"]>
  lossless?: Maybe<Scalars["Boolean"]>
  speed?: Maybe<Scalars["Int"]>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type ImageSharpOriginal = {
  width?: Maybe<Scalars["Float"]>
  height?: Maybe<Scalars["Float"]>
  src?: Maybe<Scalars["String"]>
}

export type ImageSharpResize = {
  src?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  originalName?: Maybe<Scalars["String"]>
}

export type ContentfulEntry = {
  contentful_id: Scalars["String"]
  id: Scalars["ID"]
  node_locale: Scalars["String"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ContentfulReference = {
  contentful_id: Scalars["String"]
  id: Scalars["ID"]
}

export type ContentfulAsset = ContentfulReference &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    file?: Maybe<ContentfulAssetFile>
    title?: Maybe<Scalars["String"]>
    description?: Maybe<Scalars["String"]>
    node_locale?: Maybe<Scalars["String"]>
    sys?: Maybe<ContentfulAssetSys>
    fixed?: Maybe<ContentfulFixed>
    fluid?: Maybe<ContentfulFluid>
    gatsbyImageData?: Maybe<Scalars["JSON"]>
    resize?: Maybe<ContentfulResize>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  cornerRadius?: Maybe<Scalars["Int"]>
  background?: Maybe<Scalars["String"]>
}

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  cornerRadius?: Maybe<Scalars["Int"]>
  background?: Maybe<Scalars["String"]>
  sizes?: Maybe<Scalars["String"]>
}

export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  placeholder?: Maybe<ContentfulImagePlaceholder>
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
  breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sizes?: Maybe<Scalars["String"]>
  backgroundColor?: Maybe<Scalars["String"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  cornerRadius?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
}

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  toFormat?: Maybe<ContentfulImageFormat>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars["String"]>
  cornerRadius?: Maybe<Scalars["Int"]>
}

export type ContentfulAssetFile = {
  url?: Maybe<Scalars["String"]>
  details?: Maybe<ContentfulAssetFileDetails>
  fileName?: Maybe<Scalars["String"]>
  contentType?: Maybe<Scalars["String"]>
}

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars["Int"]>
  image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
}

export type ContentfulAssetSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
}

export type ContentfulFixed = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  width: Scalars["Float"]
  height: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
}

export type ContentfulImageFormat =
  | "NO_CHANGE"
  | "AUTO"
  | "JPG"
  | "PNG"
  | "WEBP"

export type ImageResizingBehavior =
  | "NO_CHANGE"
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | "PAD"
  /** Crop a part of the original image to match the specified size. */
  | "CROP"
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | "FILL"
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | "THUMB"
  /** Scale the image regardless of the original aspect ratio. */
  | "SCALE"

export type ContentfulImageCropFocus =
  | "TOP"
  | "TOP_LEFT"
  | "TOP_RIGHT"
  | "BOTTOM"
  | "BOTTOM_RIGHT"
  | "BOTTOM_LEFT"
  | "RIGHT"
  | "LEFT"
  | "FACE"
  | "FACES"
  | "CENTER"

export type ContentfulFluid = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  sizes: Scalars["String"]
}

export type ContentfulImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED"

export type ContentfulImagePlaceholder =
  | "DOMINANT_COLOR"
  | "TRACED_SVG"
  | "BLURRED"
  | "NONE"

export type ContentfulResize = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  src?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
}

export type ContentfulBanner = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    heading?: Maybe<Scalars["String"]>
    subHeader?: Maybe<Scalars["String"]>
    backgroundImage?: Maybe<ContentfulAsset>
    community_page?: Maybe<Array<Maybe<ContentfulCommunityPage>>>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulBannerSys>
    services_page?: Maybe<Array<Maybe<ContentfulServicesPage>>>
    home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>
    contact_page?: Maybe<Array<Maybe<ContentfulContactPage>>>
    about_us_page?: Maybe<Array<Maybe<ContentfulAboutUsPage>>>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulBannerCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulBannerUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulBannerSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulBannerSysContentType>
}

export type ContentfulBannerSysContentType = {
  sys?: Maybe<ContentfulBannerSysContentTypeSys>
}

export type ContentfulBannerSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulTextAndImage = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    image?: Maybe<ContentfulAsset>
    about_us_page?: Maybe<Array<Maybe<ContentfulAboutUsPage>>>
    text?: Maybe<ContentfulTextAndImageTextTextNode>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulTextAndImageSys>
    home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>
    /** Returns all children nodes filtered by type contentfulTextAndImageTextTextNode */
    childrenContentfulTextAndImageTextTextNode?: Maybe<
      Array<Maybe<ContentfulTextAndImageTextTextNode>>
    >
    /** Returns the first child node of type contentfulTextAndImageTextTextNode or null if there are no children of given type on this node */
    childContentfulTextAndImageTextTextNode?: Maybe<ContentfulTextAndImageTextTextNode>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
    title: string
  }

export type ContentfulTextAndImageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulTextAndImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulTextAndImageSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulTextAndImageSysContentType>
}

export type ContentfulTextAndImageSysContentType = {
  sys?: Maybe<ContentfulTextAndImageSysContentTypeSys>
}

export type ContentfulTextAndImageSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulGeneralCard = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    title?: Maybe<Scalars["String"]>
    internalLink?: Maybe<Scalars["String"]>
    icon?: Maybe<ContentfulAsset>
    stack?: Maybe<Array<Maybe<ContentfulStack>>>
    description?: Maybe<ContentfulGeneralCardDescriptionTextNode>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulGeneralCardSys>
    services_page?: Maybe<Array<Maybe<ContentfulServicesPage>>>
    /** Returns all children nodes filtered by type contentfulGeneralCardDescriptionTextNode */
    childrenContentfulGeneralCardDescriptionTextNode?: Maybe<
      Array<Maybe<ContentfulGeneralCardDescriptionTextNode>>
    >
    /** Returns the first child node of type contentfulGeneralCardDescriptionTextNode or null if there are no children of given type on this node */
    childContentfulGeneralCardDescriptionTextNode?: Maybe<ContentfulGeneralCardDescriptionTextNode>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulGeneralCardCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulGeneralCardUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulGeneralCardSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulGeneralCardSysContentType>
}

export type ContentfulGeneralCardSysContentType = {
  sys?: Maybe<ContentfulGeneralCardSysContentTypeSys>
}

export type ContentfulGeneralCardSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulTestimonialSlide = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    name?: Maybe<Scalars["String"]>
    jobTitle?: Maybe<Scalars["String"]>
    companyName?: Maybe<Scalars["String"]>
    image?: Maybe<ContentfulAsset>
    home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>
    testimony?: Maybe<ContentfulTestimonialSlideTestimonyTextNode>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulTestimonialSlideSys>
    /** Returns all children nodes filtered by type contentfulTestimonialSlideTestimonyTextNode */
    childrenContentfulTestimonialSlideTestimonyTextNode?: Maybe<
      Array<Maybe<ContentfulTestimonialSlideTestimonyTextNode>>
    >
    /** Returns the first child node of type contentfulTestimonialSlideTestimonyTextNode or null if there are no children of given type on this node */
    childContentfulTestimonialSlideTestimonyTextNode?: Maybe<ContentfulTestimonialSlideTestimonyTextNode>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulTestimonialSlideCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulTestimonialSlideUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulTestimonialSlideSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulTestimonialSlideSysContentType>
}

export type ContentfulTestimonialSlideSysContentType = {
  sys?: Maybe<ContentfulTestimonialSlideSysContentTypeSys>
}

export type ContentfulTestimonialSlideSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulCarouselImages = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    images?: Maybe<Array<Maybe<ContentfulAsset>>>
    home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>
    about_us_page?: Maybe<Array<Maybe<ContentfulAboutUsPage>>>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulCarouselImagesSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulCarouselImagesCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulCarouselImagesUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulCarouselImagesSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulCarouselImagesSysContentType>
}

export type ContentfulCarouselImagesSysContentType = {
  sys?: Maybe<ContentfulCarouselImagesSysContentTypeSys>
}

export type ContentfulCarouselImagesSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulEmployeeCard = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    name?: Maybe<Scalars["String"]>
    jobTitle?: Maybe<Scalars["String"]>
    cardSize?: Maybe<Scalars["String"]>
    employeeImage?: Maybe<ContentfulAsset>
    about_us_page?: Maybe<Array<Maybe<ContentfulAboutUsPage>>>
    description?: Maybe<ContentfulEmployeeCardDescriptionTextNode>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulEmployeeCardSys>
    /** Returns all children nodes filtered by type contentfulEmployeeCardDescriptionTextNode */
    childrenContentfulEmployeeCardDescriptionTextNode?: Maybe<
      Array<Maybe<ContentfulEmployeeCardDescriptionTextNode>>
    >
    /** Returns the first child node of type contentfulEmployeeCardDescriptionTextNode or null if there are no children of given type on this node */
    childContentfulEmployeeCardDescriptionTextNode?: Maybe<ContentfulEmployeeCardDescriptionTextNode>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulEmployeeCardCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulEmployeeCardUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulEmployeeCardSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulEmployeeCardSysContentType>
}

export type ContentfulEmployeeCardSysContentType = {
  sys?: Maybe<ContentfulEmployeeCardSysContentTypeSys>
}

export type ContentfulEmployeeCardSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulHomePage = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    slug?: Maybe<Scalars["String"]>
    homeBanner?: Maybe<ContentfulBanner>
    belowHero?: Maybe<ContentfulTextAndImage>
    ctaStack?: Maybe<ContentfulStack>
    howWeHelpStack?: Maybe<ContentfulStack>
    testimonialSlides?: Maybe<Array<Maybe<ContentfulTestimonialSlide>>>
    carouselImages?: Maybe<ContentfulCarouselImages>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulHomePageSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulHomePageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulHomePageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulHomePageSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulHomePageSysContentType>
}

export type ContentfulHomePageSysContentType = {
  sys?: Maybe<ContentfulHomePageSysContentTypeSys>
}

export type ContentfulHomePageSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulStack = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    cards?: Maybe<Array<Maybe<ContentfulGeneralCard>>>
    home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>
    text?: Maybe<ContentfulStackTextTextNode>
    text2?: Maybe<ContentfulStackText2TextNode>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulStackSys>
    /** Returns all children nodes filtered by type contentfulStackTextTextNode */
    childrenContentfulStackTextTextNode?: Maybe<
      Array<Maybe<ContentfulStackTextTextNode>>
    >
    /** Returns the first child node of type contentfulStackTextTextNode or null if there are no children of given type on this node */
    childContentfulStackTextTextNode?: Maybe<ContentfulStackTextTextNode>
    /** Returns all children nodes filtered by type contentfulStackText2TextNode */
    childrenContentfulStackText2TextNode?: Maybe<
      Array<Maybe<ContentfulStackText2TextNode>>
    >
    /** Returns the first child node of type contentfulStackText2TextNode or null if there are no children of given type on this node */
    childContentfulStackText2TextNode?: Maybe<ContentfulStackText2TextNode>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulStackCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulStackUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulStackSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulStackSysContentType>
}

export type ContentfulStackSysContentType = {
  sys?: Maybe<ContentfulStackSysContentTypeSys>
}

export type ContentfulStackSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulAboutUsPage = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    slug?: Maybe<Scalars["String"]>
    aboutUsBanner?: Maybe<ContentfulBanner>
    whatWeDo?: Maybe<ContentfulTextAndImage>
    carouselImages?: Maybe<ContentfulCarouselImages>
    ourTeam?: Maybe<Array<Maybe<ContentfulEmployeeCard>>>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulAboutUsPageSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulAboutUsPageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulAboutUsPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulAboutUsPageSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulAboutUsPageSysContentType>
}

export type ContentfulAboutUsPageSysContentType = {
  sys?: Maybe<ContentfulAboutUsPageSysContentTypeSys>
}

export type ContentfulAboutUsPageSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulContactPage = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    slug?: Maybe<Scalars["String"]>
    contactBanner?: Maybe<ContentfulBanner>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulContactPageSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulContactPageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulContactPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulContactPageSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulContactPageSysContentType>
}

export type ContentfulContactPageSysContentType = {
  sys?: Maybe<ContentfulContactPageSysContentTypeSys>
}

export type ContentfulContactPageSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulCommunityPage = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    slug?: Maybe<Scalars["String"]>
    communityBanner?: Maybe<ContentfulBanner>
    newsCards?: Maybe<Array<Maybe<ContentfulImageCards>>>
    blogCards?: Maybe<Array<Maybe<ContentfulImageCards>>>
    communityCards?: Maybe<Array<Maybe<ContentfulImageCards>>>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulCommunityPageSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulCommunityPageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulCommunityPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulCommunityPageSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulCommunityPageSysContentType>
}

export type ContentfulCommunityPageSysContentType = {
  sys?: Maybe<ContentfulCommunityPageSysContentTypeSys>
}

export type ContentfulCommunityPageSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulServicesPage = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    slug?: Maybe<Scalars["String"]>
    servicesBanner?: Maybe<ContentfulBanner>
    serviceCards?: Maybe<Array<Maybe<ContentfulGeneralCard>>>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulServicesPageSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulServicesPageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulServicesPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulServicesPageSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulServicesPageSysContentType>
}

export type ContentfulServicesPageSysContentType = {
  sys?: Maybe<ContentfulServicesPageSysContentTypeSys>
}

export type ContentfulServicesPageSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulImageCards = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    title?: Maybe<Scalars["String"]>
    image?: Maybe<ContentfulAsset>
    button?: Maybe<ContentfulButton>
    community_page?: Maybe<Array<Maybe<ContentfulCommunityPage>>>
    text?: Maybe<ContentfulImageCardsTextTextNode>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulImageCardsSys>
    /** Returns all children nodes filtered by type contentfulImageCardsTextTextNode */
    childrenContentfulImageCardsTextTextNode?: Maybe<
      Array<Maybe<ContentfulImageCardsTextTextNode>>
    >
    /** Returns the first child node of type contentfulImageCardsTextTextNode or null if there are no children of given type on this node */
    childContentfulImageCardsTextTextNode?: Maybe<ContentfulImageCardsTextTextNode>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulImageCardsCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulImageCardsUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulImageCardsSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulImageCardsSysContentType>
}

export type ContentfulImageCardsSysContentType = {
  sys?: Maybe<ContentfulImageCardsSysContentTypeSys>
}

export type ContentfulImageCardsSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulButton = ContentfulReference &
  ContentfulEntry &
  Node & {
    contentful_id: Scalars["String"]
    id: Scalars["ID"]
    node_locale: Scalars["String"]
    buttonText?: Maybe<Scalars["String"]>
    buttonLink?: Maybe<Scalars["String"]>
    image_cards?: Maybe<Array<Maybe<ContentfulImageCards>>>
    spaceId?: Maybe<Scalars["String"]>
    createdAt?: Maybe<Scalars["Date"]>
    updatedAt?: Maybe<Scalars["Date"]>
    sys?: Maybe<ContentfulButtonSys>
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type ContentfulButtonCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulButtonUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulButtonSys = {
  type?: Maybe<Scalars["String"]>
  revision?: Maybe<Scalars["Int"]>
  contentType?: Maybe<ContentfulButtonSysContentType>
}

export type ContentfulButtonSysContentType = {
  sys?: Maybe<ContentfulButtonSysContentTypeSys>
}

export type ContentfulButtonSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>
  linkType?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type ContentfulTextAndImageTextTextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  text?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulTextAndImageTextTextNodeSys>
}

export type ContentfulTextAndImageTextTextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type ContentfulTestimonialSlideTestimonyTextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  testimony?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeSys>
}

export type ContentfulTestimonialSlideTestimonyTextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type ContentfulStackTextTextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  text?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulStackTextTextNodeSys>
}

export type ContentfulStackTextTextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type ContentfulStackText2TextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  text2?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulStackText2TextNodeSys>
}

export type ContentfulStackText2TextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type ContentfulImageCardsTextTextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  text?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulImageCardsTextTextNodeSys>
}

export type ContentfulImageCardsTextTextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type ContentfulGeneralCardDescriptionTextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  description?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulGeneralCardDescriptionTextNodeSys>
}

export type ContentfulGeneralCardDescriptionTextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type ContentfulEmployeeCardDescriptionTextNode = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  description?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulEmployeeCardDescriptionTextNodeSys>
}

export type ContentfulEmployeeCardDescriptionTextNodeSys = {
  type?: Maybe<Scalars["String"]>
}

export type SitePlugin = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  pluginFilepath?: Maybe<Scalars["String"]>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginPluginOptions = {
  isTSX?: Maybe<Scalars["Boolean"]>
  jsxPragma?: Maybe<Scalars["String"]>
  allExtensions?: Maybe<Scalars["Boolean"]>
  resetCSS?: Maybe<Scalars["Boolean"]>
  isUsingColorMode?: Maybe<Scalars["Boolean"]>
  spaceId?: Maybe<Scalars["String"]>
  accessToken?: Maybe<Scalars["String"]>
  host?: Maybe<Scalars["String"]>
  environment?: Maybe<Scalars["String"]>
  downloadLocal?: Maybe<Scalars["Boolean"]>
  forceFullSync?: Maybe<Scalars["Boolean"]>
  pageLimit?: Maybe<Scalars["Int"]>
  assetDownloadWorkers?: Maybe<Scalars["Int"]>
  useNameForId?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  base64Width?: Maybe<Scalars["Int"]>
  stripMetadata?: Maybe<Scalars["Boolean"]>
  defaultQuality?: Maybe<Scalars["Int"]>
  failOnError?: Maybe<Scalars["Boolean"]>
  short_name?: Maybe<Scalars["String"]>
  start_url?: Maybe<Scalars["String"]>
  background_color?: Maybe<Scalars["String"]>
  theme_color?: Maybe<Scalars["String"]>
  display?: Maybe<Scalars["String"]>
  icon?: Maybe<Scalars["String"]>
  legacy?: Maybe<Scalars["Boolean"]>
  theme_color_in_head?: Maybe<Scalars["Boolean"]>
  cache_busting_mode?: Maybe<Scalars["String"]>
  crossOrigin?: Maybe<Scalars["String"]>
  include_favicon?: Maybe<Scalars["Boolean"]>
  cacheDigest?: Maybe<Scalars["String"]>
  pathCheck?: Maybe<Scalars["Boolean"]>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  main?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  license?: Maybe<Scalars["String"]>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadata = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars["Date"]>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type ContentfulContentType = Node & {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars["String"]>
  displayField?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  sys?: Maybe<ContentfulContentTypeSys>
}

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars["String"]>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  contentfulEntry?: Maybe<ContentfulEntry>
  allContentfulEntry: ContentfulEntryConnection
  contentfulAsset?: Maybe<ContentfulAsset>
  allContentfulAsset: ContentfulAssetConnection
  contentfulBanner?: Maybe<ContentfulBanner>
  allContentfulBanner: ContentfulBannerConnection
  contentfulTextAndImage?: Maybe<ContentfulTextAndImage>
  allContentfulTextAndImage: ContentfulTextAndImageConnection
  contentfulGeneralCard?: Maybe<ContentfulGeneralCard>
  allContentfulGeneralCard: ContentfulGeneralCardConnection
  contentfulTestimonialSlide?: Maybe<ContentfulTestimonialSlide>
  allContentfulTestimonialSlide: ContentfulTestimonialSlideConnection
  contentfulCarouselImages?: Maybe<ContentfulCarouselImages>
  allContentfulCarouselImages: ContentfulCarouselImagesConnection
  contentfulEmployeeCard?: Maybe<ContentfulEmployeeCard>
  allContentfulEmployeeCard: ContentfulEmployeeCardConnection
  contentfulHomePage?: Maybe<ContentfulHomePage>
  allContentfulHomePage: ContentfulHomePageConnection
  contentfulStack?: Maybe<ContentfulStack>
  allContentfulStack: ContentfulStackConnection
  contentfulAboutUsPage?: Maybe<ContentfulAboutUsPage>
  allContentfulAboutUsPage: ContentfulAboutUsPageConnection
  contentfulContactPage?: Maybe<ContentfulContactPage>
  allContentfulContactPage: ContentfulContactPageConnection
  contentfulCommunityPage?: Maybe<ContentfulCommunityPage>
  allContentfulCommunityPage: ContentfulCommunityPageConnection
  contentfulServicesPage?: Maybe<ContentfulServicesPage>
  allContentfulServicesPage: ContentfulServicesPageConnection
  contentfulImageCards?: Maybe<ContentfulImageCards>
  allContentfulImageCards: ContentfulImageCardsConnection
  contentfulButton?: Maybe<ContentfulButton>
  allContentfulButton: ContentfulButtonConnection
  contentfulTextAndImageTextTextNode?: Maybe<ContentfulTextAndImageTextTextNode>
  allContentfulTextAndImageTextTextNode: ContentfulTextAndImageTextTextNodeConnection
  contentfulTestimonialSlideTestimonyTextNode?: Maybe<ContentfulTestimonialSlideTestimonyTextNode>
  allContentfulTestimonialSlideTestimonyTextNode: ContentfulTestimonialSlideTestimonyTextNodeConnection
  contentfulStackTextTextNode?: Maybe<ContentfulStackTextTextNode>
  allContentfulStackTextTextNode: ContentfulStackTextTextNodeConnection
  contentfulStackText2TextNode?: Maybe<ContentfulStackText2TextNode>
  allContentfulStackText2TextNode: ContentfulStackText2TextNodeConnection
  contentfulImageCardsTextTextNode?: Maybe<ContentfulImageCardsTextTextNode>
  allContentfulImageCardsTextTextNode: ContentfulImageCardsTextTextNodeConnection
  contentfulGeneralCardDescriptionTextNode?: Maybe<ContentfulGeneralCardDescriptionTextNode>
  allContentfulGeneralCardDescriptionTextNode: ContentfulGeneralCardDescriptionTextNodeConnection
  contentfulEmployeeCardDescriptionTextNode?: Maybe<ContentfulEmployeeCardDescriptionTextNode>
  allContentfulEmployeeCardDescriptionTextNode: ContentfulEmployeeCardDescriptionTextNodeConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  contentfulContentType?: Maybe<ContentfulContentType>
  allContentfulContentType: ContentfulContentTypeConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  sort?: Maybe<SiteFunctionSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>
  sort?: Maybe<ContentfulEntrySortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  resize?: Maybe<ContentfulResizeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>
  sort?: Maybe<ContentfulAssetSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulBannerArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  heading?: Maybe<StringQueryOperatorInput>
  subHeader?: Maybe<StringQueryOperatorInput>
  backgroundImage?: Maybe<ContentfulAssetFilterInput>
  community_page?: Maybe<ContentfulCommunityPageFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulBannerSysFilterInput>
  services_page?: Maybe<ContentfulServicesPageFilterListInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  contact_page?: Maybe<ContentfulContactPageFilterListInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulBannerArgs = {
  filter?: Maybe<ContentfulBannerFilterInput>
  sort?: Maybe<ContentfulBannerSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulTextAndImageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  text?: Maybe<ContentfulTextAndImageTextTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTextAndImageSysFilterInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  childrenContentfulTextAndImageTextTextNode?: Maybe<ContentfulTextAndImageTextTextNodeFilterListInput>
  childContentfulTextAndImageTextTextNode?: Maybe<ContentfulTextAndImageTextTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulTextAndImageArgs = {
  filter?: Maybe<ContentfulTextAndImageFilterInput>
  sort?: Maybe<ContentfulTextAndImageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulGeneralCardArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  internalLink?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<ContentfulAssetFilterInput>
  stack?: Maybe<ContentfulStackFilterListInput>
  description?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulGeneralCardSysFilterInput>
  services_page?: Maybe<ContentfulServicesPageFilterListInput>
  childrenContentfulGeneralCardDescriptionTextNode?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterListInput>
  childContentfulGeneralCardDescriptionTextNode?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulGeneralCardArgs = {
  filter?: Maybe<ContentfulGeneralCardFilterInput>
  sort?: Maybe<ContentfulGeneralCardSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulTestimonialSlideArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  companyName?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  testimony?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTestimonialSlideSysFilterInput>
  childrenContentfulTestimonialSlideTestimonyTextNode?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterListInput>
  childContentfulTestimonialSlideTestimonyTextNode?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulTestimonialSlideArgs = {
  filter?: Maybe<ContentfulTestimonialSlideFilterInput>
  sort?: Maybe<ContentfulTestimonialSlideSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulCarouselImagesArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  images?: Maybe<ContentfulAssetFilterListInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulCarouselImagesSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulCarouselImagesArgs = {
  filter?: Maybe<ContentfulCarouselImagesFilterInput>
  sort?: Maybe<ContentfulCarouselImagesSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulEmployeeCardArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  cardSize?: Maybe<StringQueryOperatorInput>
  employeeImage?: Maybe<ContentfulAssetFilterInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  description?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulEmployeeCardSysFilterInput>
  childrenContentfulEmployeeCardDescriptionTextNode?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterListInput>
  childContentfulEmployeeCardDescriptionTextNode?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulEmployeeCardArgs = {
  filter?: Maybe<ContentfulEmployeeCardFilterInput>
  sort?: Maybe<ContentfulEmployeeCardSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulHomePageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  homeBanner?: Maybe<ContentfulBannerFilterInput>
  belowHero?: Maybe<ContentfulTextAndImageFilterInput>
  ctaStack?: Maybe<ContentfulStackFilterInput>
  howWeHelpStack?: Maybe<ContentfulStackFilterInput>
  testimonialSlides?: Maybe<ContentfulTestimonialSlideFilterListInput>
  carouselImages?: Maybe<ContentfulCarouselImagesFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomePageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulHomePageArgs = {
  filter?: Maybe<ContentfulHomePageFilterInput>
  sort?: Maybe<ContentfulHomePageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulStackArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  cards?: Maybe<ContentfulGeneralCardFilterListInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  text?: Maybe<ContentfulStackTextTextNodeFilterInput>
  text2?: Maybe<ContentfulStackText2TextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulStackSysFilterInput>
  childrenContentfulStackTextTextNode?: Maybe<ContentfulStackTextTextNodeFilterListInput>
  childContentfulStackTextTextNode?: Maybe<ContentfulStackTextTextNodeFilterInput>
  childrenContentfulStackText2TextNode?: Maybe<ContentfulStackText2TextNodeFilterListInput>
  childContentfulStackText2TextNode?: Maybe<ContentfulStackText2TextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulStackArgs = {
  filter?: Maybe<ContentfulStackFilterInput>
  sort?: Maybe<ContentfulStackSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulAboutUsPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  aboutUsBanner?: Maybe<ContentfulBannerFilterInput>
  whatWeDo?: Maybe<ContentfulTextAndImageFilterInput>
  carouselImages?: Maybe<ContentfulCarouselImagesFilterInput>
  ourTeam?: Maybe<ContentfulEmployeeCardFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulAboutUsPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulAboutUsPageArgs = {
  filter?: Maybe<ContentfulAboutUsPageFilterInput>
  sort?: Maybe<ContentfulAboutUsPageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulContactPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  contactBanner?: Maybe<ContentfulBannerFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulContactPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulContactPageArgs = {
  filter?: Maybe<ContentfulContactPageFilterInput>
  sort?: Maybe<ContentfulContactPageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulCommunityPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  communityBanner?: Maybe<ContentfulBannerFilterInput>
  newsCards?: Maybe<ContentfulImageCardsFilterListInput>
  blogCards?: Maybe<ContentfulImageCardsFilterListInput>
  communityCards?: Maybe<ContentfulImageCardsFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulCommunityPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulCommunityPageArgs = {
  filter?: Maybe<ContentfulCommunityPageFilterInput>
  sort?: Maybe<ContentfulCommunityPageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulServicesPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  servicesBanner?: Maybe<ContentfulBannerFilterInput>
  serviceCards?: Maybe<ContentfulGeneralCardFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulServicesPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulServicesPageArgs = {
  filter?: Maybe<ContentfulServicesPageFilterInput>
  sort?: Maybe<ContentfulServicesPageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulImageCardsArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  button?: Maybe<ContentfulButtonFilterInput>
  community_page?: Maybe<ContentfulCommunityPageFilterListInput>
  text?: Maybe<ContentfulImageCardsTextTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulImageCardsSysFilterInput>
  childrenContentfulImageCardsTextTextNode?: Maybe<ContentfulImageCardsTextTextNodeFilterListInput>
  childContentfulImageCardsTextTextNode?: Maybe<ContentfulImageCardsTextTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulImageCardsArgs = {
  filter?: Maybe<ContentfulImageCardsFilterInput>
  sort?: Maybe<ContentfulImageCardsSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulButtonArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  buttonText?: Maybe<StringQueryOperatorInput>
  buttonLink?: Maybe<StringQueryOperatorInput>
  image_cards?: Maybe<ContentfulImageCardsFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulButtonSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllContentfulButtonArgs = {
  filter?: Maybe<ContentfulButtonFilterInput>
  sort?: Maybe<ContentfulButtonSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulTextAndImageTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulTextAndImageTextTextNodeSysFilterInput>
}

export type QueryAllContentfulTextAndImageTextTextNodeArgs = {
  filter?: Maybe<ContentfulTextAndImageTextTextNodeFilterInput>
  sort?: Maybe<ContentfulTextAndImageTextTextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulTestimonialSlideTestimonyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  testimony?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeSysFilterInput>
}

export type QueryAllContentfulTestimonialSlideTestimonyTextNodeArgs = {
  filter?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterInput>
  sort?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulStackTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulStackTextTextNodeSysFilterInput>
}

export type QueryAllContentfulStackTextTextNodeArgs = {
  filter?: Maybe<ContentfulStackTextTextNodeFilterInput>
  sort?: Maybe<ContentfulStackTextTextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulStackText2TextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text2?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulStackText2TextNodeSysFilterInput>
}

export type QueryAllContentfulStackText2TextNodeArgs = {
  filter?: Maybe<ContentfulStackText2TextNodeFilterInput>
  sort?: Maybe<ContentfulStackText2TextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulImageCardsTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulImageCardsTextTextNodeSysFilterInput>
}

export type QueryAllContentfulImageCardsTextTextNodeArgs = {
  filter?: Maybe<ContentfulImageCardsTextTextNodeFilterInput>
  sort?: Maybe<ContentfulImageCardsTextTextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulGeneralCardDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulGeneralCardDescriptionTextNodeSysFilterInput>
}

export type QueryAllContentfulGeneralCardDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterInput>
  sort?: Maybe<ContentfulGeneralCardDescriptionTextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulEmployeeCardDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulEmployeeCardDescriptionTextNodeSysFilterInput>
}

export type QueryAllContentfulEmployeeCardDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterInput>
  sort?: Maybe<ContentfulEmployeeCardDescriptionTextNodeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>
  sort?: Maybe<ContentfulContentTypeSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>
  ne?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  regex?: Maybe<Scalars["String"]>
  glob?: Maybe<Scalars["String"]>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>
  ne?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>
  ne?: Maybe<Scalars["Date"]>
  gt?: Maybe<Scalars["Date"]>
  gte?: Maybe<Scalars["Date"]>
  lt?: Maybe<Scalars["Date"]>
  lte?: Maybe<Scalars["Date"]>
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>
  ne?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>
  ne?: Maybe<Scalars["JSON"]>
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>
  regex?: Maybe<Scalars["JSON"]>
  glob?: Maybe<Scalars["JSON"]>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>
  ne?: Maybe<Scalars["Boolean"]>
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

export type FileConnection = {
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type PageInfo = {
  currentPage: Scalars["Int"]
  hasPreviousPage: Scalars["Boolean"]
  hasNextPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage?: Maybe<Scalars["Int"]>
  totalCount: Scalars["Int"]
}

export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "childrenImageSharp"
  | "childrenImageSharp___fixed___base64"
  | "childrenImageSharp___fixed___tracedSVG"
  | "childrenImageSharp___fixed___aspectRatio"
  | "childrenImageSharp___fixed___width"
  | "childrenImageSharp___fixed___height"
  | "childrenImageSharp___fixed___src"
  | "childrenImageSharp___fixed___srcSet"
  | "childrenImageSharp___fixed___srcWebp"
  | "childrenImageSharp___fixed___srcSetWebp"
  | "childrenImageSharp___fixed___originalName"
  | "childrenImageSharp___fluid___base64"
  | "childrenImageSharp___fluid___tracedSVG"
  | "childrenImageSharp___fluid___aspectRatio"
  | "childrenImageSharp___fluid___src"
  | "childrenImageSharp___fluid___srcSet"
  | "childrenImageSharp___fluid___srcWebp"
  | "childrenImageSharp___fluid___srcSetWebp"
  | "childrenImageSharp___fluid___sizes"
  | "childrenImageSharp___fluid___originalImg"
  | "childrenImageSharp___fluid___originalName"
  | "childrenImageSharp___fluid___presentationWidth"
  | "childrenImageSharp___fluid___presentationHeight"
  | "childrenImageSharp___gatsbyImageData"
  | "childrenImageSharp___original___width"
  | "childrenImageSharp___original___height"
  | "childrenImageSharp___original___src"
  | "childrenImageSharp___resize___src"
  | "childrenImageSharp___resize___tracedSVG"
  | "childrenImageSharp___resize___width"
  | "childrenImageSharp___resize___height"
  | "childrenImageSharp___resize___aspectRatio"
  | "childrenImageSharp___resize___originalName"
  | "childrenImageSharp___id"
  | "childrenImageSharp___parent___id"
  | "childrenImageSharp___parent___parent___id"
  | "childrenImageSharp___parent___parent___children"
  | "childrenImageSharp___parent___children"
  | "childrenImageSharp___parent___children___id"
  | "childrenImageSharp___parent___children___children"
  | "childrenImageSharp___parent___internal___content"
  | "childrenImageSharp___parent___internal___contentDigest"
  | "childrenImageSharp___parent___internal___description"
  | "childrenImageSharp___parent___internal___fieldOwners"
  | "childrenImageSharp___parent___internal___ignoreType"
  | "childrenImageSharp___parent___internal___mediaType"
  | "childrenImageSharp___parent___internal___owner"
  | "childrenImageSharp___parent___internal___type"
  | "childrenImageSharp___children"
  | "childrenImageSharp___children___id"
  | "childrenImageSharp___children___parent___id"
  | "childrenImageSharp___children___parent___children"
  | "childrenImageSharp___children___children"
  | "childrenImageSharp___children___children___id"
  | "childrenImageSharp___children___children___children"
  | "childrenImageSharp___children___internal___content"
  | "childrenImageSharp___children___internal___contentDigest"
  | "childrenImageSharp___children___internal___description"
  | "childrenImageSharp___children___internal___fieldOwners"
  | "childrenImageSharp___children___internal___ignoreType"
  | "childrenImageSharp___children___internal___mediaType"
  | "childrenImageSharp___children___internal___owner"
  | "childrenImageSharp___children___internal___type"
  | "childrenImageSharp___internal___content"
  | "childrenImageSharp___internal___contentDigest"
  | "childrenImageSharp___internal___description"
  | "childrenImageSharp___internal___fieldOwners"
  | "childrenImageSharp___internal___ignoreType"
  | "childrenImageSharp___internal___mediaType"
  | "childrenImageSharp___internal___owner"
  | "childrenImageSharp___internal___type"
  | "childImageSharp___fixed___base64"
  | "childImageSharp___fixed___tracedSVG"
  | "childImageSharp___fixed___aspectRatio"
  | "childImageSharp___fixed___width"
  | "childImageSharp___fixed___height"
  | "childImageSharp___fixed___src"
  | "childImageSharp___fixed___srcSet"
  | "childImageSharp___fixed___srcWebp"
  | "childImageSharp___fixed___srcSetWebp"
  | "childImageSharp___fixed___originalName"
  | "childImageSharp___fluid___base64"
  | "childImageSharp___fluid___tracedSVG"
  | "childImageSharp___fluid___aspectRatio"
  | "childImageSharp___fluid___src"
  | "childImageSharp___fluid___srcSet"
  | "childImageSharp___fluid___srcWebp"
  | "childImageSharp___fluid___srcSetWebp"
  | "childImageSharp___fluid___sizes"
  | "childImageSharp___fluid___originalImg"
  | "childImageSharp___fluid___originalName"
  | "childImageSharp___fluid___presentationWidth"
  | "childImageSharp___fluid___presentationHeight"
  | "childImageSharp___gatsbyImageData"
  | "childImageSharp___original___width"
  | "childImageSharp___original___height"
  | "childImageSharp___original___src"
  | "childImageSharp___resize___src"
  | "childImageSharp___resize___tracedSVG"
  | "childImageSharp___resize___width"
  | "childImageSharp___resize___height"
  | "childImageSharp___resize___aspectRatio"
  | "childImageSharp___resize___originalName"
  | "childImageSharp___id"
  | "childImageSharp___parent___id"
  | "childImageSharp___parent___parent___id"
  | "childImageSharp___parent___parent___children"
  | "childImageSharp___parent___children"
  | "childImageSharp___parent___children___id"
  | "childImageSharp___parent___children___children"
  | "childImageSharp___parent___internal___content"
  | "childImageSharp___parent___internal___contentDigest"
  | "childImageSharp___parent___internal___description"
  | "childImageSharp___parent___internal___fieldOwners"
  | "childImageSharp___parent___internal___ignoreType"
  | "childImageSharp___parent___internal___mediaType"
  | "childImageSharp___parent___internal___owner"
  | "childImageSharp___parent___internal___type"
  | "childImageSharp___children"
  | "childImageSharp___children___id"
  | "childImageSharp___children___parent___id"
  | "childImageSharp___children___parent___children"
  | "childImageSharp___children___children"
  | "childImageSharp___children___children___id"
  | "childImageSharp___children___children___children"
  | "childImageSharp___children___internal___content"
  | "childImageSharp___children___internal___contentDigest"
  | "childImageSharp___children___internal___description"
  | "childImageSharp___children___internal___fieldOwners"
  | "childImageSharp___children___internal___ignoreType"
  | "childImageSharp___children___internal___mediaType"
  | "childImageSharp___children___internal___owner"
  | "childImageSharp___children___internal___type"
  | "childImageSharp___internal___content"
  | "childImageSharp___internal___contentDigest"
  | "childImageSharp___internal___description"
  | "childImageSharp___internal___fieldOwners"
  | "childImageSharp___internal___ignoreType"
  | "childImageSharp___internal___mediaType"
  | "childImageSharp___internal___owner"
  | "childImageSharp___internal___type"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type FileGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = "ASC" | "DESC"

export type DirectoryConnection = {
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
}

export type SiteConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___author"
  | "siteMetadata___siteUrl"
  | "port"
  | "host"
  | "polyfill"
  | "pathPrefix"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type SiteGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteFunctionConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export type SiteFunctionFieldsEnum =
  | "functionRoute"
  | "pluginName"
  | "originalAbsoluteFilePath"
  | "originalRelativeFilePath"
  | "relativeCompiledFilePath"
  | "absoluteCompiledFilePath"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type SiteFunctionGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  resetCSS?: Maybe<BooleanQueryOperatorInput>
  isUsingColorMode?: Maybe<BooleanQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  environment?: Maybe<StringQueryOperatorInput>
  downloadLocal?: Maybe<BooleanQueryOperatorInput>
  forceFullSync?: Maybe<BooleanQueryOperatorInput>
  pageLimit?: Maybe<IntQueryOperatorInput>
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>
  useNameForId?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___isTSX"
  | "pluginCreator___pluginOptions___jsxPragma"
  | "pluginCreator___pluginOptions___allExtensions"
  | "pluginCreator___pluginOptions___resetCSS"
  | "pluginCreator___pluginOptions___isUsingColorMode"
  | "pluginCreator___pluginOptions___spaceId"
  | "pluginCreator___pluginOptions___accessToken"
  | "pluginCreator___pluginOptions___host"
  | "pluginCreator___pluginOptions___environment"
  | "pluginCreator___pluginOptions___downloadLocal"
  | "pluginCreator___pluginOptions___forceFullSync"
  | "pluginCreator___pluginOptions___pageLimit"
  | "pluginCreator___pluginOptions___assetDownloadWorkers"
  | "pluginCreator___pluginOptions___useNameForId"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___base64Width"
  | "pluginCreator___pluginOptions___stripMetadata"
  | "pluginCreator___pluginOptions___defaultQuality"
  | "pluginCreator___pluginOptions___failOnError"
  | "pluginCreator___pluginOptions___short_name"
  | "pluginCreator___pluginOptions___start_url"
  | "pluginCreator___pluginOptions___background_color"
  | "pluginCreator___pluginOptions___theme_color"
  | "pluginCreator___pluginOptions___display"
  | "pluginCreator___pluginOptions___icon"
  | "pluginCreator___pluginOptions___legacy"
  | "pluginCreator___pluginOptions___theme_color_in_head"
  | "pluginCreator___pluginOptions___cache_busting_mode"
  | "pluginCreator___pluginOptions___crossOrigin"
  | "pluginCreator___pluginOptions___include_favicon"
  | "pluginCreator___pluginOptions___cacheDigest"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___author"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ImageSharpConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fixed___originalName"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "fluid___originalImg"
  | "fluid___originalName"
  | "fluid___presentationWidth"
  | "fluid___presentationHeight"
  | "gatsbyImageData"
  | "original___width"
  | "original___height"
  | "original___src"
  | "resize___src"
  | "resize___tracedSVG"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "resize___originalName"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ImageSharpGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulEntryConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulEntryEdge>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulEntryGroupConnection>
}

export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>
  node: ContentfulEntry
  previous?: Maybe<ContentfulEntry>
}

export type ContentfulEntryFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulEntryEdge>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
}

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulAssetConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulAssetGroupConnection>
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous?: Maybe<ContentfulAsset>
}

export type ContentfulAssetFieldsEnum =
  | "contentful_id"
  | "id"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "file___url"
  | "file___details___size"
  | "file___details___image___width"
  | "file___details___image___height"
  | "file___fileName"
  | "file___contentType"
  | "title"
  | "description"
  | "node_locale"
  | "sys___type"
  | "sys___revision"
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "gatsbyImageData"
  | "resize___base64"
  | "resize___tracedSVG"
  | "resize___src"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  resize?: Maybe<ContentfulResizeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulCommunityPageFilterListInput = {
  elemMatch?: Maybe<ContentfulCommunityPageFilterInput>
}

export type ContentfulCommunityPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  communityBanner?: Maybe<ContentfulBannerFilterInput>
  newsCards?: Maybe<ContentfulImageCardsFilterListInput>
  blogCards?: Maybe<ContentfulImageCardsFilterListInput>
  communityCards?: Maybe<ContentfulImageCardsFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulCommunityPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulBannerFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  heading?: Maybe<StringQueryOperatorInput>
  subHeader?: Maybe<StringQueryOperatorInput>
  backgroundImage?: Maybe<ContentfulAssetFilterInput>
  community_page?: Maybe<ContentfulCommunityPageFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulBannerSysFilterInput>
  services_page?: Maybe<ContentfulServicesPageFilterListInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  contact_page?: Maybe<ContentfulContactPageFilterListInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulBannerSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulBannerSysContentTypeFilterInput>
}

export type ContentfulBannerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBannerSysContentTypeSysFilterInput>
}

export type ContentfulBannerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulServicesPageFilterListInput = {
  elemMatch?: Maybe<ContentfulServicesPageFilterInput>
}

export type ContentfulServicesPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  servicesBanner?: Maybe<ContentfulBannerFilterInput>
  serviceCards?: Maybe<ContentfulGeneralCardFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulServicesPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulGeneralCardFilterListInput = {
  elemMatch?: Maybe<ContentfulGeneralCardFilterInput>
}

export type ContentfulGeneralCardFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  internalLink?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<ContentfulAssetFilterInput>
  stack?: Maybe<ContentfulStackFilterListInput>
  description?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulGeneralCardSysFilterInput>
  services_page?: Maybe<ContentfulServicesPageFilterListInput>
  childrenContentfulGeneralCardDescriptionTextNode?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterListInput>
  childContentfulGeneralCardDescriptionTextNode?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulStackFilterListInput = {
  elemMatch?: Maybe<ContentfulStackFilterInput>
}

export type ContentfulStackFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  cards?: Maybe<ContentfulGeneralCardFilterListInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  text?: Maybe<ContentfulStackTextTextNodeFilterInput>
  text2?: Maybe<ContentfulStackText2TextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulStackSysFilterInput>
  childrenContentfulStackTextTextNode?: Maybe<ContentfulStackTextTextNodeFilterListInput>
  childContentfulStackTextTextNode?: Maybe<ContentfulStackTextTextNodeFilterInput>
  childrenContentfulStackText2TextNode?: Maybe<ContentfulStackText2TextNodeFilterListInput>
  childContentfulStackText2TextNode?: Maybe<ContentfulStackText2TextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulHomePageFilterListInput = {
  elemMatch?: Maybe<ContentfulHomePageFilterInput>
}

export type ContentfulHomePageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  homeBanner?: Maybe<ContentfulBannerFilterInput>
  belowHero?: Maybe<ContentfulTextAndImageFilterInput>
  ctaStack?: Maybe<ContentfulStackFilterInput>
  howWeHelpStack?: Maybe<ContentfulStackFilterInput>
  testimonialSlides?: Maybe<ContentfulTestimonialSlideFilterListInput>
  carouselImages?: Maybe<ContentfulCarouselImagesFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulHomePageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulTextAndImageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  text?: Maybe<ContentfulTextAndImageTextTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTextAndImageSysFilterInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  childrenContentfulTextAndImageTextTextNode?: Maybe<ContentfulTextAndImageTextTextNodeFilterListInput>
  childContentfulTextAndImageTextTextNode?: Maybe<ContentfulTextAndImageTextTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulAboutUsPageFilterListInput = {
  elemMatch?: Maybe<ContentfulAboutUsPageFilterInput>
}

export type ContentfulAboutUsPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  aboutUsBanner?: Maybe<ContentfulBannerFilterInput>
  whatWeDo?: Maybe<ContentfulTextAndImageFilterInput>
  carouselImages?: Maybe<ContentfulCarouselImagesFilterInput>
  ourTeam?: Maybe<ContentfulEmployeeCardFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulAboutUsPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulCarouselImagesFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  images?: Maybe<ContentfulAssetFilterListInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulCarouselImagesSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>
}

export type ContentfulCarouselImagesSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulCarouselImagesSysContentTypeFilterInput>
}

export type ContentfulCarouselImagesSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCarouselImagesSysContentTypeSysFilterInput>
}

export type ContentfulCarouselImagesSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulEmployeeCardFilterListInput = {
  elemMatch?: Maybe<ContentfulEmployeeCardFilterInput>
}

export type ContentfulEmployeeCardFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  cardSize?: Maybe<StringQueryOperatorInput>
  employeeImage?: Maybe<ContentfulAssetFilterInput>
  about_us_page?: Maybe<ContentfulAboutUsPageFilterListInput>
  description?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulEmployeeCardSysFilterInput>
  childrenContentfulEmployeeCardDescriptionTextNode?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterListInput>
  childContentfulEmployeeCardDescriptionTextNode?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulEmployeeCardDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulEmployeeCardDescriptionTextNodeSysFilterInput>
}

export type ContentfulEmployeeCardDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulEmployeeCardSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulEmployeeCardSysContentTypeFilterInput>
}

export type ContentfulEmployeeCardSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulEmployeeCardSysContentTypeSysFilterInput>
}

export type ContentfulEmployeeCardSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulEmployeeCardDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulEmployeeCardDescriptionTextNodeFilterInput>
}

export type ContentfulAboutUsPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulAboutUsPageSysContentTypeFilterInput>
}

export type ContentfulAboutUsPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAboutUsPageSysContentTypeSysFilterInput>
}

export type ContentfulAboutUsPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTextAndImageTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulTextAndImageTextTextNodeSysFilterInput>
}

export type ContentfulTextAndImageTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTextAndImageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulTextAndImageSysContentTypeFilterInput>
}

export type ContentfulTextAndImageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTextAndImageSysContentTypeSysFilterInput>
}

export type ContentfulTextAndImageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTextAndImageTextTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulTextAndImageTextTextNodeFilterInput>
}

export type ContentfulTestimonialSlideFilterListInput = {
  elemMatch?: Maybe<ContentfulTestimonialSlideFilterInput>
}

export type ContentfulTestimonialSlideFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  companyName?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  home_page?: Maybe<ContentfulHomePageFilterListInput>
  testimony?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulTestimonialSlideSysFilterInput>
  childrenContentfulTestimonialSlideTestimonyTextNode?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterListInput>
  childContentfulTestimonialSlideTestimonyTextNode?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulTestimonialSlideTestimonyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  testimony?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeSysFilterInput>
}

export type ContentfulTestimonialSlideTestimonyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTestimonialSlideSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulTestimonialSlideSysContentTypeFilterInput>
}

export type ContentfulTestimonialSlideSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTestimonialSlideSysContentTypeSysFilterInput>
}

export type ContentfulTestimonialSlideSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTestimonialSlideTestimonyTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulTestimonialSlideTestimonyTextNodeFilterInput>
}

export type ContentfulHomePageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulHomePageSysContentTypeFilterInput>
}

export type ContentfulHomePageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHomePageSysContentTypeSysFilterInput>
}

export type ContentfulHomePageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulStackTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulStackTextTextNodeSysFilterInput>
}

export type ContentfulStackTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulStackText2TextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text2?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulStackText2TextNodeSysFilterInput>
}

export type ContentfulStackText2TextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulStackSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulStackSysContentTypeFilterInput>
}

export type ContentfulStackSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulStackSysContentTypeSysFilterInput>
}

export type ContentfulStackSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulStackTextTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulStackTextTextNodeFilterInput>
}

export type ContentfulStackText2TextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulStackText2TextNodeFilterInput>
}

export type ContentfulGeneralCardDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulGeneralCardDescriptionTextNodeSysFilterInput>
}

export type ContentfulGeneralCardDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulGeneralCardSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulGeneralCardSysContentTypeFilterInput>
}

export type ContentfulGeneralCardSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulGeneralCardSysContentTypeSysFilterInput>
}

export type ContentfulGeneralCardSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulGeneralCardDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulGeneralCardDescriptionTextNodeFilterInput>
}

export type ContentfulServicesPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulServicesPageSysContentTypeFilterInput>
}

export type ContentfulServicesPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulServicesPageSysContentTypeSysFilterInput>
}

export type ContentfulServicesPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContactPageFilterListInput = {
  elemMatch?: Maybe<ContentfulContactPageFilterInput>
}

export type ContentfulContactPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  contactBanner?: Maybe<ContentfulBannerFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulContactPageSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulContactPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulContactPageSysContentTypeFilterInput>
}

export type ContentfulContactPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulContactPageSysContentTypeSysFilterInput>
}

export type ContentfulContactPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulImageCardsFilterListInput = {
  elemMatch?: Maybe<ContentfulImageCardsFilterInput>
}

export type ContentfulImageCardsFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  button?: Maybe<ContentfulButtonFilterInput>
  community_page?: Maybe<ContentfulCommunityPageFilterListInput>
  text?: Maybe<ContentfulImageCardsTextTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulImageCardsSysFilterInput>
  childrenContentfulImageCardsTextTextNode?: Maybe<ContentfulImageCardsTextTextNodeFilterListInput>
  childContentfulImageCardsTextTextNode?: Maybe<ContentfulImageCardsTextTextNodeFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulButtonFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  buttonText?: Maybe<StringQueryOperatorInput>
  buttonLink?: Maybe<StringQueryOperatorInput>
  image_cards?: Maybe<ContentfulImageCardsFilterListInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulButtonSysFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ContentfulButtonSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulButtonSysContentTypeFilterInput>
}

export type ContentfulButtonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulButtonSysContentTypeSysFilterInput>
}

export type ContentfulButtonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulImageCardsTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  text?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulImageCardsTextTextNodeSysFilterInput>
}

export type ContentfulImageCardsTextTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulImageCardsSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulImageCardsSysContentTypeFilterInput>
}

export type ContentfulImageCardsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulImageCardsSysContentTypeSysFilterInput>
}

export type ContentfulImageCardsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulImageCardsTextTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulImageCardsTextTextNodeFilterInput>
}

export type ContentfulCommunityPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulCommunityPageSysContentTypeFilterInput>
}

export type ContentfulCommunityPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCommunityPageSysContentTypeSysFilterInput>
}

export type ContentfulCommunityPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulBannerConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulBannerEdge>
  nodes: Array<ContentfulBanner>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulBannerGroupConnection>
}

export type ContentfulBannerConnectionDistinctArgs = {
  field: ContentfulBannerFieldsEnum
}

export type ContentfulBannerConnectionMaxArgs = {
  field: ContentfulBannerFieldsEnum
}

export type ContentfulBannerConnectionMinArgs = {
  field: ContentfulBannerFieldsEnum
}

export type ContentfulBannerConnectionSumArgs = {
  field: ContentfulBannerFieldsEnum
}

export type ContentfulBannerConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulBannerFieldsEnum
}

export type ContentfulBannerEdge = {
  next?: Maybe<ContentfulBanner>
  node: ContentfulBanner
  previous?: Maybe<ContentfulBanner>
}

export type ContentfulBannerFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "heading"
  | "subHeader"
  | "backgroundImage___contentful_id"
  | "backgroundImage___id"
  | "backgroundImage___spaceId"
  | "backgroundImage___createdAt"
  | "backgroundImage___updatedAt"
  | "backgroundImage___file___url"
  | "backgroundImage___file___details___size"
  | "backgroundImage___file___fileName"
  | "backgroundImage___file___contentType"
  | "backgroundImage___title"
  | "backgroundImage___description"
  | "backgroundImage___node_locale"
  | "backgroundImage___sys___type"
  | "backgroundImage___sys___revision"
  | "backgroundImage___fixed___base64"
  | "backgroundImage___fixed___tracedSVG"
  | "backgroundImage___fixed___aspectRatio"
  | "backgroundImage___fixed___width"
  | "backgroundImage___fixed___height"
  | "backgroundImage___fixed___src"
  | "backgroundImage___fixed___srcSet"
  | "backgroundImage___fixed___srcWebp"
  | "backgroundImage___fixed___srcSetWebp"
  | "backgroundImage___fluid___base64"
  | "backgroundImage___fluid___tracedSVG"
  | "backgroundImage___fluid___aspectRatio"
  | "backgroundImage___fluid___src"
  | "backgroundImage___fluid___srcSet"
  | "backgroundImage___fluid___srcWebp"
  | "backgroundImage___fluid___srcSetWebp"
  | "backgroundImage___fluid___sizes"
  | "backgroundImage___gatsbyImageData"
  | "backgroundImage___resize___base64"
  | "backgroundImage___resize___tracedSVG"
  | "backgroundImage___resize___src"
  | "backgroundImage___resize___width"
  | "backgroundImage___resize___height"
  | "backgroundImage___resize___aspectRatio"
  | "backgroundImage___parent___id"
  | "backgroundImage___parent___parent___id"
  | "backgroundImage___parent___parent___children"
  | "backgroundImage___parent___children"
  | "backgroundImage___parent___children___id"
  | "backgroundImage___parent___children___children"
  | "backgroundImage___parent___internal___content"
  | "backgroundImage___parent___internal___contentDigest"
  | "backgroundImage___parent___internal___description"
  | "backgroundImage___parent___internal___fieldOwners"
  | "backgroundImage___parent___internal___ignoreType"
  | "backgroundImage___parent___internal___mediaType"
  | "backgroundImage___parent___internal___owner"
  | "backgroundImage___parent___internal___type"
  | "backgroundImage___children"
  | "backgroundImage___children___id"
  | "backgroundImage___children___parent___id"
  | "backgroundImage___children___parent___children"
  | "backgroundImage___children___children"
  | "backgroundImage___children___children___id"
  | "backgroundImage___children___children___children"
  | "backgroundImage___children___internal___content"
  | "backgroundImage___children___internal___contentDigest"
  | "backgroundImage___children___internal___description"
  | "backgroundImage___children___internal___fieldOwners"
  | "backgroundImage___children___internal___ignoreType"
  | "backgroundImage___children___internal___mediaType"
  | "backgroundImage___children___internal___owner"
  | "backgroundImage___children___internal___type"
  | "backgroundImage___internal___content"
  | "backgroundImage___internal___contentDigest"
  | "backgroundImage___internal___description"
  | "backgroundImage___internal___fieldOwners"
  | "backgroundImage___internal___ignoreType"
  | "backgroundImage___internal___mediaType"
  | "backgroundImage___internal___owner"
  | "backgroundImage___internal___type"
  | "community_page"
  | "community_page___contentful_id"
  | "community_page___id"
  | "community_page___node_locale"
  | "community_page___slug"
  | "community_page___communityBanner___contentful_id"
  | "community_page___communityBanner___id"
  | "community_page___communityBanner___node_locale"
  | "community_page___communityBanner___heading"
  | "community_page___communityBanner___subHeader"
  | "community_page___communityBanner___backgroundImage___contentful_id"
  | "community_page___communityBanner___backgroundImage___id"
  | "community_page___communityBanner___backgroundImage___spaceId"
  | "community_page___communityBanner___backgroundImage___createdAt"
  | "community_page___communityBanner___backgroundImage___updatedAt"
  | "community_page___communityBanner___backgroundImage___title"
  | "community_page___communityBanner___backgroundImage___description"
  | "community_page___communityBanner___backgroundImage___node_locale"
  | "community_page___communityBanner___backgroundImage___gatsbyImageData"
  | "community_page___communityBanner___backgroundImage___children"
  | "community_page___communityBanner___community_page"
  | "community_page___communityBanner___community_page___contentful_id"
  | "community_page___communityBanner___community_page___id"
  | "community_page___communityBanner___community_page___node_locale"
  | "community_page___communityBanner___community_page___slug"
  | "community_page___communityBanner___community_page___newsCards"
  | "community_page___communityBanner___community_page___blogCards"
  | "community_page___communityBanner___community_page___communityCards"
  | "community_page___communityBanner___community_page___spaceId"
  | "community_page___communityBanner___community_page___createdAt"
  | "community_page___communityBanner___community_page___updatedAt"
  | "community_page___communityBanner___community_page___children"
  | "community_page___communityBanner___spaceId"
  | "community_page___communityBanner___createdAt"
  | "community_page___communityBanner___updatedAt"
  | "community_page___communityBanner___sys___type"
  | "community_page___communityBanner___sys___revision"
  | "community_page___communityBanner___services_page"
  | "community_page___communityBanner___services_page___contentful_id"
  | "community_page___communityBanner___services_page___id"
  | "community_page___communityBanner___services_page___node_locale"
  | "community_page___communityBanner___services_page___slug"
  | "community_page___communityBanner___services_page___serviceCards"
  | "community_page___communityBanner___services_page___spaceId"
  | "community_page___communityBanner___services_page___createdAt"
  | "community_page___communityBanner___services_page___updatedAt"
  | "community_page___communityBanner___services_page___children"
  | "community_page___communityBanner___home_page"
  | "community_page___communityBanner___home_page___contentful_id"
  | "community_page___communityBanner___home_page___id"
  | "community_page___communityBanner___home_page___node_locale"
  | "community_page___communityBanner___home_page___slug"
  | "community_page___communityBanner___home_page___testimonialSlides"
  | "community_page___communityBanner___home_page___spaceId"
  | "community_page___communityBanner___home_page___createdAt"
  | "community_page___communityBanner___home_page___updatedAt"
  | "community_page___communityBanner___home_page___children"
  | "community_page___communityBanner___contact_page"
  | "community_page___communityBanner___contact_page___contentful_id"
  | "community_page___communityBanner___contact_page___id"
  | "community_page___communityBanner___contact_page___node_locale"
  | "community_page___communityBanner___contact_page___slug"
  | "community_page___communityBanner___contact_page___spaceId"
  | "community_page___communityBanner___contact_page___createdAt"
  | "community_page___communityBanner___contact_page___updatedAt"
  | "community_page___communityBanner___contact_page___children"
  | "community_page___communityBanner___about_us_page"
  | "community_page___communityBanner___about_us_page___contentful_id"
  | "community_page___communityBanner___about_us_page___id"
  | "community_page___communityBanner___about_us_page___node_locale"
  | "community_page___communityBanner___about_us_page___slug"
  | "community_page___communityBanner___about_us_page___ourTeam"
  | "community_page___communityBanner___about_us_page___spaceId"
  | "community_page___communityBanner___about_us_page___createdAt"
  | "community_page___communityBanner___about_us_page___updatedAt"
  | "community_page___communityBanner___about_us_page___children"
  | "community_page___communityBanner___parent___id"
  | "community_page___communityBanner___parent___children"
  | "community_page___communityBanner___children"
  | "community_page___communityBanner___children___id"
  | "community_page___communityBanner___children___children"
  | "community_page___communityBanner___internal___content"
  | "community_page___communityBanner___internal___contentDigest"
  | "community_page___communityBanner___internal___description"
  | "community_page___communityBanner___internal___fieldOwners"
  | "community_page___communityBanner___internal___ignoreType"
  | "community_page___communityBanner___internal___mediaType"
  | "community_page___communityBanner___internal___owner"
  | "community_page___communityBanner___internal___type"
  | "community_page___newsCards"
  | "community_page___newsCards___contentful_id"
  | "community_page___newsCards___id"
  | "community_page___newsCards___node_locale"
  | "community_page___newsCards___title"
  | "community_page___newsCards___image___contentful_id"
  | "community_page___newsCards___image___id"
  | "community_page___newsCards___image___spaceId"
  | "community_page___newsCards___image___createdAt"
  | "community_page___newsCards___image___updatedAt"
  | "community_page___newsCards___image___title"
  | "community_page___newsCards___image___description"
  | "community_page___newsCards___image___node_locale"
  | "community_page___newsCards___image___gatsbyImageData"
  | "community_page___newsCards___image___children"
  | "community_page___newsCards___button___contentful_id"
  | "community_page___newsCards___button___id"
  | "community_page___newsCards___button___node_locale"
  | "community_page___newsCards___button___buttonText"
  | "community_page___newsCards___button___buttonLink"
  | "community_page___newsCards___button___image_cards"
  | "community_page___newsCards___button___spaceId"
  | "community_page___newsCards___button___createdAt"
  | "community_page___newsCards___button___updatedAt"
  | "community_page___newsCards___button___children"
  | "community_page___newsCards___community_page"
  | "community_page___newsCards___community_page___contentful_id"
  | "community_page___newsCards___community_page___id"
  | "community_page___newsCards___community_page___node_locale"
  | "community_page___newsCards___community_page___slug"
  | "community_page___newsCards___community_page___newsCards"
  | "community_page___newsCards___community_page___blogCards"
  | "community_page___newsCards___community_page___communityCards"
  | "community_page___newsCards___community_page___spaceId"
  | "community_page___newsCards___community_page___createdAt"
  | "community_page___newsCards___community_page___updatedAt"
  | "community_page___newsCards___community_page___children"
  | "community_page___newsCards___text___id"
  | "community_page___newsCards___text___children"
  | "community_page___newsCards___text___text"
  | "community_page___newsCards___spaceId"
  | "community_page___newsCards___createdAt"
  | "community_page___newsCards___updatedAt"
  | "community_page___newsCards___sys___type"
  | "community_page___newsCards___sys___revision"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode___id"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode___children"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode___text"
  | "community_page___newsCards___childContentfulImageCardsTextTextNode___id"
  | "community_page___newsCards___childContentfulImageCardsTextTextNode___children"
  | "community_page___newsCards___childContentfulImageCardsTextTextNode___text"
  | "community_page___newsCards___parent___id"
  | "community_page___newsCards___parent___children"
  | "community_page___newsCards___children"
  | "community_page___newsCards___children___id"
  | "community_page___newsCards___children___children"
  | "community_page___newsCards___internal___content"
  | "community_page___newsCards___internal___contentDigest"
  | "community_page___newsCards___internal___description"
  | "community_page___newsCards___internal___fieldOwners"
  | "community_page___newsCards___internal___ignoreType"
  | "community_page___newsCards___internal___mediaType"
  | "community_page___newsCards___internal___owner"
  | "community_page___newsCards___internal___type"
  | "community_page___blogCards"
  | "community_page___blogCards___contentful_id"
  | "community_page___blogCards___id"
  | "community_page___blogCards___node_locale"
  | "community_page___blogCards___title"
  | "community_page___blogCards___image___contentful_id"
  | "community_page___blogCards___image___id"
  | "community_page___blogCards___image___spaceId"
  | "community_page___blogCards___image___createdAt"
  | "community_page___blogCards___image___updatedAt"
  | "community_page___blogCards___image___title"
  | "community_page___blogCards___image___description"
  | "community_page___blogCards___image___node_locale"
  | "community_page___blogCards___image___gatsbyImageData"
  | "community_page___blogCards___image___children"
  | "community_page___blogCards___button___contentful_id"
  | "community_page___blogCards___button___id"
  | "community_page___blogCards___button___node_locale"
  | "community_page___blogCards___button___buttonText"
  | "community_page___blogCards___button___buttonLink"
  | "community_page___blogCards___button___image_cards"
  | "community_page___blogCards___button___spaceId"
  | "community_page___blogCards___button___createdAt"
  | "community_page___blogCards___button___updatedAt"
  | "community_page___blogCards___button___children"
  | "community_page___blogCards___community_page"
  | "community_page___blogCards___community_page___contentful_id"
  | "community_page___blogCards___community_page___id"
  | "community_page___blogCards___community_page___node_locale"
  | "community_page___blogCards___community_page___slug"
  | "community_page___blogCards___community_page___newsCards"
  | "community_page___blogCards___community_page___blogCards"
  | "community_page___blogCards___community_page___communityCards"
  | "community_page___blogCards___community_page___spaceId"
  | "community_page___blogCards___community_page___createdAt"
  | "community_page___blogCards___community_page___updatedAt"
  | "community_page___blogCards___community_page___children"
  | "community_page___blogCards___text___id"
  | "community_page___blogCards___text___children"
  | "community_page___blogCards___text___text"
  | "community_page___blogCards___spaceId"
  | "community_page___blogCards___createdAt"
  | "community_page___blogCards___updatedAt"
  | "community_page___blogCards___sys___type"
  | "community_page___blogCards___sys___revision"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode___id"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode___children"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode___text"
  | "community_page___blogCards___childContentfulImageCardsTextTextNode___id"
  | "community_page___blogCards___childContentfulImageCardsTextTextNode___children"
  | "community_page___blogCards___childContentfulImageCardsTextTextNode___text"
  | "community_page___blogCards___parent___id"
  | "community_page___blogCards___parent___children"
  | "community_page___blogCards___children"
  | "community_page___blogCards___children___id"
  | "community_page___blogCards___children___children"
  | "community_page___blogCards___internal___content"
  | "community_page___blogCards___internal___contentDigest"
  | "community_page___blogCards___internal___description"
  | "community_page___blogCards___internal___fieldOwners"
  | "community_page___blogCards___internal___ignoreType"
  | "community_page___blogCards___internal___mediaType"
  | "community_page___blogCards___internal___owner"
  | "community_page___blogCards___internal___type"
  | "community_page___communityCards"
  | "community_page___communityCards___contentful_id"
  | "community_page___communityCards___id"
  | "community_page___communityCards___node_locale"
  | "community_page___communityCards___title"
  | "community_page___communityCards___image___contentful_id"
  | "community_page___communityCards___image___id"
  | "community_page___communityCards___image___spaceId"
  | "community_page___communityCards___image___createdAt"
  | "community_page___communityCards___image___updatedAt"
  | "community_page___communityCards___image___title"
  | "community_page___communityCards___image___description"
  | "community_page___communityCards___image___node_locale"
  | "community_page___communityCards___image___gatsbyImageData"
  | "community_page___communityCards___image___children"
  | "community_page___communityCards___button___contentful_id"
  | "community_page___communityCards___button___id"
  | "community_page___communityCards___button___node_locale"
  | "community_page___communityCards___button___buttonText"
  | "community_page___communityCards___button___buttonLink"
  | "community_page___communityCards___button___image_cards"
  | "community_page___communityCards___button___spaceId"
  | "community_page___communityCards___button___createdAt"
  | "community_page___communityCards___button___updatedAt"
  | "community_page___communityCards___button___children"
  | "community_page___communityCards___community_page"
  | "community_page___communityCards___community_page___contentful_id"
  | "community_page___communityCards___community_page___id"
  | "community_page___communityCards___community_page___node_locale"
  | "community_page___communityCards___community_page___slug"
  | "community_page___communityCards___community_page___newsCards"
  | "community_page___communityCards___community_page___blogCards"
  | "community_page___communityCards___community_page___communityCards"
  | "community_page___communityCards___community_page___spaceId"
  | "community_page___communityCards___community_page___createdAt"
  | "community_page___communityCards___community_page___updatedAt"
  | "community_page___communityCards___community_page___children"
  | "community_page___communityCards___text___id"
  | "community_page___communityCards___text___children"
  | "community_page___communityCards___text___text"
  | "community_page___communityCards___spaceId"
  | "community_page___communityCards___createdAt"
  | "community_page___communityCards___updatedAt"
  | "community_page___communityCards___sys___type"
  | "community_page___communityCards___sys___revision"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode___id"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode___children"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode___text"
  | "community_page___communityCards___childContentfulImageCardsTextTextNode___id"
  | "community_page___communityCards___childContentfulImageCardsTextTextNode___children"
  | "community_page___communityCards___childContentfulImageCardsTextTextNode___text"
  | "community_page___communityCards___parent___id"
  | "community_page___communityCards___parent___children"
  | "community_page___communityCards___children"
  | "community_page___communityCards___children___id"
  | "community_page___communityCards___children___children"
  | "community_page___communityCards___internal___content"
  | "community_page___communityCards___internal___contentDigest"
  | "community_page___communityCards___internal___description"
  | "community_page___communityCards___internal___fieldOwners"
  | "community_page___communityCards___internal___ignoreType"
  | "community_page___communityCards___internal___mediaType"
  | "community_page___communityCards___internal___owner"
  | "community_page___communityCards___internal___type"
  | "community_page___spaceId"
  | "community_page___createdAt"
  | "community_page___updatedAt"
  | "community_page___sys___type"
  | "community_page___sys___revision"
  | "community_page___parent___id"
  | "community_page___parent___parent___id"
  | "community_page___parent___parent___children"
  | "community_page___parent___children"
  | "community_page___parent___children___id"
  | "community_page___parent___children___children"
  | "community_page___parent___internal___content"
  | "community_page___parent___internal___contentDigest"
  | "community_page___parent___internal___description"
  | "community_page___parent___internal___fieldOwners"
  | "community_page___parent___internal___ignoreType"
  | "community_page___parent___internal___mediaType"
  | "community_page___parent___internal___owner"
  | "community_page___parent___internal___type"
  | "community_page___children"
  | "community_page___children___id"
  | "community_page___children___parent___id"
  | "community_page___children___parent___children"
  | "community_page___children___children"
  | "community_page___children___children___id"
  | "community_page___children___children___children"
  | "community_page___children___internal___content"
  | "community_page___children___internal___contentDigest"
  | "community_page___children___internal___description"
  | "community_page___children___internal___fieldOwners"
  | "community_page___children___internal___ignoreType"
  | "community_page___children___internal___mediaType"
  | "community_page___children___internal___owner"
  | "community_page___children___internal___type"
  | "community_page___internal___content"
  | "community_page___internal___contentDigest"
  | "community_page___internal___description"
  | "community_page___internal___fieldOwners"
  | "community_page___internal___ignoreType"
  | "community_page___internal___mediaType"
  | "community_page___internal___owner"
  | "community_page___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "services_page"
  | "services_page___contentful_id"
  | "services_page___id"
  | "services_page___node_locale"
  | "services_page___slug"
  | "services_page___servicesBanner___contentful_id"
  | "services_page___servicesBanner___id"
  | "services_page___servicesBanner___node_locale"
  | "services_page___servicesBanner___heading"
  | "services_page___servicesBanner___subHeader"
  | "services_page___servicesBanner___backgroundImage___contentful_id"
  | "services_page___servicesBanner___backgroundImage___id"
  | "services_page___servicesBanner___backgroundImage___spaceId"
  | "services_page___servicesBanner___backgroundImage___createdAt"
  | "services_page___servicesBanner___backgroundImage___updatedAt"
  | "services_page___servicesBanner___backgroundImage___title"
  | "services_page___servicesBanner___backgroundImage___description"
  | "services_page___servicesBanner___backgroundImage___node_locale"
  | "services_page___servicesBanner___backgroundImage___gatsbyImageData"
  | "services_page___servicesBanner___backgroundImage___children"
  | "services_page___servicesBanner___community_page"
  | "services_page___servicesBanner___community_page___contentful_id"
  | "services_page___servicesBanner___community_page___id"
  | "services_page___servicesBanner___community_page___node_locale"
  | "services_page___servicesBanner___community_page___slug"
  | "services_page___servicesBanner___community_page___newsCards"
  | "services_page___servicesBanner___community_page___blogCards"
  | "services_page___servicesBanner___community_page___communityCards"
  | "services_page___servicesBanner___community_page___spaceId"
  | "services_page___servicesBanner___community_page___createdAt"
  | "services_page___servicesBanner___community_page___updatedAt"
  | "services_page___servicesBanner___community_page___children"
  | "services_page___servicesBanner___spaceId"
  | "services_page___servicesBanner___createdAt"
  | "services_page___servicesBanner___updatedAt"
  | "services_page___servicesBanner___sys___type"
  | "services_page___servicesBanner___sys___revision"
  | "services_page___servicesBanner___services_page"
  | "services_page___servicesBanner___services_page___contentful_id"
  | "services_page___servicesBanner___services_page___id"
  | "services_page___servicesBanner___services_page___node_locale"
  | "services_page___servicesBanner___services_page___slug"
  | "services_page___servicesBanner___services_page___serviceCards"
  | "services_page___servicesBanner___services_page___spaceId"
  | "services_page___servicesBanner___services_page___createdAt"
  | "services_page___servicesBanner___services_page___updatedAt"
  | "services_page___servicesBanner___services_page___children"
  | "services_page___servicesBanner___home_page"
  | "services_page___servicesBanner___home_page___contentful_id"
  | "services_page___servicesBanner___home_page___id"
  | "services_page___servicesBanner___home_page___node_locale"
  | "services_page___servicesBanner___home_page___slug"
  | "services_page___servicesBanner___home_page___testimonialSlides"
  | "services_page___servicesBanner___home_page___spaceId"
  | "services_page___servicesBanner___home_page___createdAt"
  | "services_page___servicesBanner___home_page___updatedAt"
  | "services_page___servicesBanner___home_page___children"
  | "services_page___servicesBanner___contact_page"
  | "services_page___servicesBanner___contact_page___contentful_id"
  | "services_page___servicesBanner___contact_page___id"
  | "services_page___servicesBanner___contact_page___node_locale"
  | "services_page___servicesBanner___contact_page___slug"
  | "services_page___servicesBanner___contact_page___spaceId"
  | "services_page___servicesBanner___contact_page___createdAt"
  | "services_page___servicesBanner___contact_page___updatedAt"
  | "services_page___servicesBanner___contact_page___children"
  | "services_page___servicesBanner___about_us_page"
  | "services_page___servicesBanner___about_us_page___contentful_id"
  | "services_page___servicesBanner___about_us_page___id"
  | "services_page___servicesBanner___about_us_page___node_locale"
  | "services_page___servicesBanner___about_us_page___slug"
  | "services_page___servicesBanner___about_us_page___ourTeam"
  | "services_page___servicesBanner___about_us_page___spaceId"
  | "services_page___servicesBanner___about_us_page___createdAt"
  | "services_page___servicesBanner___about_us_page___updatedAt"
  | "services_page___servicesBanner___about_us_page___children"
  | "services_page___servicesBanner___parent___id"
  | "services_page___servicesBanner___parent___children"
  | "services_page___servicesBanner___children"
  | "services_page___servicesBanner___children___id"
  | "services_page___servicesBanner___children___children"
  | "services_page___servicesBanner___internal___content"
  | "services_page___servicesBanner___internal___contentDigest"
  | "services_page___servicesBanner___internal___description"
  | "services_page___servicesBanner___internal___fieldOwners"
  | "services_page___servicesBanner___internal___ignoreType"
  | "services_page___servicesBanner___internal___mediaType"
  | "services_page___servicesBanner___internal___owner"
  | "services_page___servicesBanner___internal___type"
  | "services_page___serviceCards"
  | "services_page___serviceCards___contentful_id"
  | "services_page___serviceCards___id"
  | "services_page___serviceCards___node_locale"
  | "services_page___serviceCards___title"
  | "services_page___serviceCards___internalLink"
  | "services_page___serviceCards___icon___contentful_id"
  | "services_page___serviceCards___icon___id"
  | "services_page___serviceCards___icon___spaceId"
  | "services_page___serviceCards___icon___createdAt"
  | "services_page___serviceCards___icon___updatedAt"
  | "services_page___serviceCards___icon___title"
  | "services_page___serviceCards___icon___description"
  | "services_page___serviceCards___icon___node_locale"
  | "services_page___serviceCards___icon___gatsbyImageData"
  | "services_page___serviceCards___icon___children"
  | "services_page___serviceCards___stack"
  | "services_page___serviceCards___stack___contentful_id"
  | "services_page___serviceCards___stack___id"
  | "services_page___serviceCards___stack___node_locale"
  | "services_page___serviceCards___stack___cards"
  | "services_page___serviceCards___stack___home_page"
  | "services_page___serviceCards___stack___spaceId"
  | "services_page___serviceCards___stack___createdAt"
  | "services_page___serviceCards___stack___updatedAt"
  | "services_page___serviceCards___stack___childrenContentfulStackTextTextNode"
  | "services_page___serviceCards___stack___childrenContentfulStackText2TextNode"
  | "services_page___serviceCards___stack___children"
  | "services_page___serviceCards___description___id"
  | "services_page___serviceCards___description___children"
  | "services_page___serviceCards___description___description"
  | "services_page___serviceCards___spaceId"
  | "services_page___serviceCards___createdAt"
  | "services_page___serviceCards___updatedAt"
  | "services_page___serviceCards___sys___type"
  | "services_page___serviceCards___sys___revision"
  | "services_page___serviceCards___services_page"
  | "services_page___serviceCards___services_page___contentful_id"
  | "services_page___serviceCards___services_page___id"
  | "services_page___serviceCards___services_page___node_locale"
  | "services_page___serviceCards___services_page___slug"
  | "services_page___serviceCards___services_page___serviceCards"
  | "services_page___serviceCards___services_page___spaceId"
  | "services_page___serviceCards___services_page___createdAt"
  | "services_page___serviceCards___services_page___updatedAt"
  | "services_page___serviceCards___services_page___children"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "services_page___serviceCards___childContentfulGeneralCardDescriptionTextNode___id"
  | "services_page___serviceCards___childContentfulGeneralCardDescriptionTextNode___children"
  | "services_page___serviceCards___childContentfulGeneralCardDescriptionTextNode___description"
  | "services_page___serviceCards___parent___id"
  | "services_page___serviceCards___parent___children"
  | "services_page___serviceCards___children"
  | "services_page___serviceCards___children___id"
  | "services_page___serviceCards___children___children"
  | "services_page___serviceCards___internal___content"
  | "services_page___serviceCards___internal___contentDigest"
  | "services_page___serviceCards___internal___description"
  | "services_page___serviceCards___internal___fieldOwners"
  | "services_page___serviceCards___internal___ignoreType"
  | "services_page___serviceCards___internal___mediaType"
  | "services_page___serviceCards___internal___owner"
  | "services_page___serviceCards___internal___type"
  | "services_page___spaceId"
  | "services_page___createdAt"
  | "services_page___updatedAt"
  | "services_page___sys___type"
  | "services_page___sys___revision"
  | "services_page___parent___id"
  | "services_page___parent___parent___id"
  | "services_page___parent___parent___children"
  | "services_page___parent___children"
  | "services_page___parent___children___id"
  | "services_page___parent___children___children"
  | "services_page___parent___internal___content"
  | "services_page___parent___internal___contentDigest"
  | "services_page___parent___internal___description"
  | "services_page___parent___internal___fieldOwners"
  | "services_page___parent___internal___ignoreType"
  | "services_page___parent___internal___mediaType"
  | "services_page___parent___internal___owner"
  | "services_page___parent___internal___type"
  | "services_page___children"
  | "services_page___children___id"
  | "services_page___children___parent___id"
  | "services_page___children___parent___children"
  | "services_page___children___children"
  | "services_page___children___children___id"
  | "services_page___children___children___children"
  | "services_page___children___internal___content"
  | "services_page___children___internal___contentDigest"
  | "services_page___children___internal___description"
  | "services_page___children___internal___fieldOwners"
  | "services_page___children___internal___ignoreType"
  | "services_page___children___internal___mediaType"
  | "services_page___children___internal___owner"
  | "services_page___children___internal___type"
  | "services_page___internal___content"
  | "services_page___internal___contentDigest"
  | "services_page___internal___description"
  | "services_page___internal___fieldOwners"
  | "services_page___internal___ignoreType"
  | "services_page___internal___mediaType"
  | "services_page___internal___owner"
  | "services_page___internal___type"
  | "home_page"
  | "home_page___contentful_id"
  | "home_page___id"
  | "home_page___node_locale"
  | "home_page___slug"
  | "home_page___homeBanner___contentful_id"
  | "home_page___homeBanner___id"
  | "home_page___homeBanner___node_locale"
  | "home_page___homeBanner___heading"
  | "home_page___homeBanner___subHeader"
  | "home_page___homeBanner___backgroundImage___contentful_id"
  | "home_page___homeBanner___backgroundImage___id"
  | "home_page___homeBanner___backgroundImage___spaceId"
  | "home_page___homeBanner___backgroundImage___createdAt"
  | "home_page___homeBanner___backgroundImage___updatedAt"
  | "home_page___homeBanner___backgroundImage___title"
  | "home_page___homeBanner___backgroundImage___description"
  | "home_page___homeBanner___backgroundImage___node_locale"
  | "home_page___homeBanner___backgroundImage___gatsbyImageData"
  | "home_page___homeBanner___backgroundImage___children"
  | "home_page___homeBanner___community_page"
  | "home_page___homeBanner___community_page___contentful_id"
  | "home_page___homeBanner___community_page___id"
  | "home_page___homeBanner___community_page___node_locale"
  | "home_page___homeBanner___community_page___slug"
  | "home_page___homeBanner___community_page___newsCards"
  | "home_page___homeBanner___community_page___blogCards"
  | "home_page___homeBanner___community_page___communityCards"
  | "home_page___homeBanner___community_page___spaceId"
  | "home_page___homeBanner___community_page___createdAt"
  | "home_page___homeBanner___community_page___updatedAt"
  | "home_page___homeBanner___community_page___children"
  | "home_page___homeBanner___spaceId"
  | "home_page___homeBanner___createdAt"
  | "home_page___homeBanner___updatedAt"
  | "home_page___homeBanner___sys___type"
  | "home_page___homeBanner___sys___revision"
  | "home_page___homeBanner___services_page"
  | "home_page___homeBanner___services_page___contentful_id"
  | "home_page___homeBanner___services_page___id"
  | "home_page___homeBanner___services_page___node_locale"
  | "home_page___homeBanner___services_page___slug"
  | "home_page___homeBanner___services_page___serviceCards"
  | "home_page___homeBanner___services_page___spaceId"
  | "home_page___homeBanner___services_page___createdAt"
  | "home_page___homeBanner___services_page___updatedAt"
  | "home_page___homeBanner___services_page___children"
  | "home_page___homeBanner___home_page"
  | "home_page___homeBanner___home_page___contentful_id"
  | "home_page___homeBanner___home_page___id"
  | "home_page___homeBanner___home_page___node_locale"
  | "home_page___homeBanner___home_page___slug"
  | "home_page___homeBanner___home_page___testimonialSlides"
  | "home_page___homeBanner___home_page___spaceId"
  | "home_page___homeBanner___home_page___createdAt"
  | "home_page___homeBanner___home_page___updatedAt"
  | "home_page___homeBanner___home_page___children"
  | "home_page___homeBanner___contact_page"
  | "home_page___homeBanner___contact_page___contentful_id"
  | "home_page___homeBanner___contact_page___id"
  | "home_page___homeBanner___contact_page___node_locale"
  | "home_page___homeBanner___contact_page___slug"
  | "home_page___homeBanner___contact_page___spaceId"
  | "home_page___homeBanner___contact_page___createdAt"
  | "home_page___homeBanner___contact_page___updatedAt"
  | "home_page___homeBanner___contact_page___children"
  | "home_page___homeBanner___about_us_page"
  | "home_page___homeBanner___about_us_page___contentful_id"
  | "home_page___homeBanner___about_us_page___id"
  | "home_page___homeBanner___about_us_page___node_locale"
  | "home_page___homeBanner___about_us_page___slug"
  | "home_page___homeBanner___about_us_page___ourTeam"
  | "home_page___homeBanner___about_us_page___spaceId"
  | "home_page___homeBanner___about_us_page___createdAt"
  | "home_page___homeBanner___about_us_page___updatedAt"
  | "home_page___homeBanner___about_us_page___children"
  | "home_page___homeBanner___parent___id"
  | "home_page___homeBanner___parent___children"
  | "home_page___homeBanner___children"
  | "home_page___homeBanner___children___id"
  | "home_page___homeBanner___children___children"
  | "home_page___homeBanner___internal___content"
  | "home_page___homeBanner___internal___contentDigest"
  | "home_page___homeBanner___internal___description"
  | "home_page___homeBanner___internal___fieldOwners"
  | "home_page___homeBanner___internal___ignoreType"
  | "home_page___homeBanner___internal___mediaType"
  | "home_page___homeBanner___internal___owner"
  | "home_page___homeBanner___internal___type"
  | "home_page___belowHero___contentful_id"
  | "home_page___belowHero___id"
  | "home_page___belowHero___node_locale"
  | "home_page___belowHero___image___contentful_id"
  | "home_page___belowHero___image___id"
  | "home_page___belowHero___image___spaceId"
  | "home_page___belowHero___image___createdAt"
  | "home_page___belowHero___image___updatedAt"
  | "home_page___belowHero___image___title"
  | "home_page___belowHero___image___description"
  | "home_page___belowHero___image___node_locale"
  | "home_page___belowHero___image___gatsbyImageData"
  | "home_page___belowHero___image___children"
  | "home_page___belowHero___about_us_page"
  | "home_page___belowHero___about_us_page___contentful_id"
  | "home_page___belowHero___about_us_page___id"
  | "home_page___belowHero___about_us_page___node_locale"
  | "home_page___belowHero___about_us_page___slug"
  | "home_page___belowHero___about_us_page___ourTeam"
  | "home_page___belowHero___about_us_page___spaceId"
  | "home_page___belowHero___about_us_page___createdAt"
  | "home_page___belowHero___about_us_page___updatedAt"
  | "home_page___belowHero___about_us_page___children"
  | "home_page___belowHero___text___id"
  | "home_page___belowHero___text___children"
  | "home_page___belowHero___text___text"
  | "home_page___belowHero___spaceId"
  | "home_page___belowHero___createdAt"
  | "home_page___belowHero___updatedAt"
  | "home_page___belowHero___sys___type"
  | "home_page___belowHero___sys___revision"
  | "home_page___belowHero___home_page"
  | "home_page___belowHero___home_page___contentful_id"
  | "home_page___belowHero___home_page___id"
  | "home_page___belowHero___home_page___node_locale"
  | "home_page___belowHero___home_page___slug"
  | "home_page___belowHero___home_page___testimonialSlides"
  | "home_page___belowHero___home_page___spaceId"
  | "home_page___belowHero___home_page___createdAt"
  | "home_page___belowHero___home_page___updatedAt"
  | "home_page___belowHero___home_page___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___parent___id"
  | "home_page___belowHero___parent___children"
  | "home_page___belowHero___children"
  | "home_page___belowHero___children___id"
  | "home_page___belowHero___children___children"
  | "home_page___belowHero___internal___content"
  | "home_page___belowHero___internal___contentDigest"
  | "home_page___belowHero___internal___description"
  | "home_page___belowHero___internal___fieldOwners"
  | "home_page___belowHero___internal___ignoreType"
  | "home_page___belowHero___internal___mediaType"
  | "home_page___belowHero___internal___owner"
  | "home_page___belowHero___internal___type"
  | "home_page___ctaStack___contentful_id"
  | "home_page___ctaStack___id"
  | "home_page___ctaStack___node_locale"
  | "home_page___ctaStack___cards"
  | "home_page___ctaStack___cards___contentful_id"
  | "home_page___ctaStack___cards___id"
  | "home_page___ctaStack___cards___node_locale"
  | "home_page___ctaStack___cards___title"
  | "home_page___ctaStack___cards___internalLink"
  | "home_page___ctaStack___cards___stack"
  | "home_page___ctaStack___cards___spaceId"
  | "home_page___ctaStack___cards___createdAt"
  | "home_page___ctaStack___cards___updatedAt"
  | "home_page___ctaStack___cards___services_page"
  | "home_page___ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___ctaStack___cards___children"
  | "home_page___ctaStack___home_page"
  | "home_page___ctaStack___home_page___contentful_id"
  | "home_page___ctaStack___home_page___id"
  | "home_page___ctaStack___home_page___node_locale"
  | "home_page___ctaStack___home_page___slug"
  | "home_page___ctaStack___home_page___testimonialSlides"
  | "home_page___ctaStack___home_page___spaceId"
  | "home_page___ctaStack___home_page___createdAt"
  | "home_page___ctaStack___home_page___updatedAt"
  | "home_page___ctaStack___home_page___children"
  | "home_page___ctaStack___text___id"
  | "home_page___ctaStack___text___children"
  | "home_page___ctaStack___text___text"
  | "home_page___ctaStack___text2___id"
  | "home_page___ctaStack___text2___children"
  | "home_page___ctaStack___text2___text2"
  | "home_page___ctaStack___spaceId"
  | "home_page___ctaStack___createdAt"
  | "home_page___ctaStack___updatedAt"
  | "home_page___ctaStack___sys___type"
  | "home_page___ctaStack___sys___revision"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___childContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___parent___id"
  | "home_page___ctaStack___parent___children"
  | "home_page___ctaStack___children"
  | "home_page___ctaStack___children___id"
  | "home_page___ctaStack___children___children"
  | "home_page___ctaStack___internal___content"
  | "home_page___ctaStack___internal___contentDigest"
  | "home_page___ctaStack___internal___description"
  | "home_page___ctaStack___internal___fieldOwners"
  | "home_page___ctaStack___internal___ignoreType"
  | "home_page___ctaStack___internal___mediaType"
  | "home_page___ctaStack___internal___owner"
  | "home_page___ctaStack___internal___type"
  | "home_page___howWeHelpStack___contentful_id"
  | "home_page___howWeHelpStack___id"
  | "home_page___howWeHelpStack___node_locale"
  | "home_page___howWeHelpStack___cards"
  | "home_page___howWeHelpStack___cards___contentful_id"
  | "home_page___howWeHelpStack___cards___id"
  | "home_page___howWeHelpStack___cards___node_locale"
  | "home_page___howWeHelpStack___cards___title"
  | "home_page___howWeHelpStack___cards___internalLink"
  | "home_page___howWeHelpStack___cards___stack"
  | "home_page___howWeHelpStack___cards___spaceId"
  | "home_page___howWeHelpStack___cards___createdAt"
  | "home_page___howWeHelpStack___cards___updatedAt"
  | "home_page___howWeHelpStack___cards___services_page"
  | "home_page___howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___howWeHelpStack___cards___children"
  | "home_page___howWeHelpStack___home_page"
  | "home_page___howWeHelpStack___home_page___contentful_id"
  | "home_page___howWeHelpStack___home_page___id"
  | "home_page___howWeHelpStack___home_page___node_locale"
  | "home_page___howWeHelpStack___home_page___slug"
  | "home_page___howWeHelpStack___home_page___testimonialSlides"
  | "home_page___howWeHelpStack___home_page___spaceId"
  | "home_page___howWeHelpStack___home_page___createdAt"
  | "home_page___howWeHelpStack___home_page___updatedAt"
  | "home_page___howWeHelpStack___home_page___children"
  | "home_page___howWeHelpStack___text___id"
  | "home_page___howWeHelpStack___text___children"
  | "home_page___howWeHelpStack___text___text"
  | "home_page___howWeHelpStack___text2___id"
  | "home_page___howWeHelpStack___text2___children"
  | "home_page___howWeHelpStack___text2___text2"
  | "home_page___howWeHelpStack___spaceId"
  | "home_page___howWeHelpStack___createdAt"
  | "home_page___howWeHelpStack___updatedAt"
  | "home_page___howWeHelpStack___sys___type"
  | "home_page___howWeHelpStack___sys___revision"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___parent___id"
  | "home_page___howWeHelpStack___parent___children"
  | "home_page___howWeHelpStack___children"
  | "home_page___howWeHelpStack___children___id"
  | "home_page___howWeHelpStack___children___children"
  | "home_page___howWeHelpStack___internal___content"
  | "home_page___howWeHelpStack___internal___contentDigest"
  | "home_page___howWeHelpStack___internal___description"
  | "home_page___howWeHelpStack___internal___fieldOwners"
  | "home_page___howWeHelpStack___internal___ignoreType"
  | "home_page___howWeHelpStack___internal___mediaType"
  | "home_page___howWeHelpStack___internal___owner"
  | "home_page___howWeHelpStack___internal___type"
  | "home_page___testimonialSlides"
  | "home_page___testimonialSlides___contentful_id"
  | "home_page___testimonialSlides___id"
  | "home_page___testimonialSlides___node_locale"
  | "home_page___testimonialSlides___name"
  | "home_page___testimonialSlides___jobTitle"
  | "home_page___testimonialSlides___companyName"
  | "home_page___testimonialSlides___image___contentful_id"
  | "home_page___testimonialSlides___image___id"
  | "home_page___testimonialSlides___image___spaceId"
  | "home_page___testimonialSlides___image___createdAt"
  | "home_page___testimonialSlides___image___updatedAt"
  | "home_page___testimonialSlides___image___title"
  | "home_page___testimonialSlides___image___description"
  | "home_page___testimonialSlides___image___node_locale"
  | "home_page___testimonialSlides___image___gatsbyImageData"
  | "home_page___testimonialSlides___image___children"
  | "home_page___testimonialSlides___home_page"
  | "home_page___testimonialSlides___home_page___contentful_id"
  | "home_page___testimonialSlides___home_page___id"
  | "home_page___testimonialSlides___home_page___node_locale"
  | "home_page___testimonialSlides___home_page___slug"
  | "home_page___testimonialSlides___home_page___testimonialSlides"
  | "home_page___testimonialSlides___home_page___spaceId"
  | "home_page___testimonialSlides___home_page___createdAt"
  | "home_page___testimonialSlides___home_page___updatedAt"
  | "home_page___testimonialSlides___home_page___children"
  | "home_page___testimonialSlides___testimony___id"
  | "home_page___testimonialSlides___testimony___children"
  | "home_page___testimonialSlides___testimony___testimony"
  | "home_page___testimonialSlides___spaceId"
  | "home_page___testimonialSlides___createdAt"
  | "home_page___testimonialSlides___updatedAt"
  | "home_page___testimonialSlides___sys___type"
  | "home_page___testimonialSlides___sys___revision"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___parent___id"
  | "home_page___testimonialSlides___parent___children"
  | "home_page___testimonialSlides___children"
  | "home_page___testimonialSlides___children___id"
  | "home_page___testimonialSlides___children___children"
  | "home_page___testimonialSlides___internal___content"
  | "home_page___testimonialSlides___internal___contentDigest"
  | "home_page___testimonialSlides___internal___description"
  | "home_page___testimonialSlides___internal___fieldOwners"
  | "home_page___testimonialSlides___internal___ignoreType"
  | "home_page___testimonialSlides___internal___mediaType"
  | "home_page___testimonialSlides___internal___owner"
  | "home_page___testimonialSlides___internal___type"
  | "home_page___carouselImages___contentful_id"
  | "home_page___carouselImages___id"
  | "home_page___carouselImages___node_locale"
  | "home_page___carouselImages___images"
  | "home_page___carouselImages___images___contentful_id"
  | "home_page___carouselImages___images___id"
  | "home_page___carouselImages___images___spaceId"
  | "home_page___carouselImages___images___createdAt"
  | "home_page___carouselImages___images___updatedAt"
  | "home_page___carouselImages___images___title"
  | "home_page___carouselImages___images___description"
  | "home_page___carouselImages___images___node_locale"
  | "home_page___carouselImages___images___gatsbyImageData"
  | "home_page___carouselImages___images___children"
  | "home_page___carouselImages___home_page"
  | "home_page___carouselImages___home_page___contentful_id"
  | "home_page___carouselImages___home_page___id"
  | "home_page___carouselImages___home_page___node_locale"
  | "home_page___carouselImages___home_page___slug"
  | "home_page___carouselImages___home_page___testimonialSlides"
  | "home_page___carouselImages___home_page___spaceId"
  | "home_page___carouselImages___home_page___createdAt"
  | "home_page___carouselImages___home_page___updatedAt"
  | "home_page___carouselImages___home_page___children"
  | "home_page___carouselImages___about_us_page"
  | "home_page___carouselImages___about_us_page___contentful_id"
  | "home_page___carouselImages___about_us_page___id"
  | "home_page___carouselImages___about_us_page___node_locale"
  | "home_page___carouselImages___about_us_page___slug"
  | "home_page___carouselImages___about_us_page___ourTeam"
  | "home_page___carouselImages___about_us_page___spaceId"
  | "home_page___carouselImages___about_us_page___createdAt"
  | "home_page___carouselImages___about_us_page___updatedAt"
  | "home_page___carouselImages___about_us_page___children"
  | "home_page___carouselImages___spaceId"
  | "home_page___carouselImages___createdAt"
  | "home_page___carouselImages___updatedAt"
  | "home_page___carouselImages___sys___type"
  | "home_page___carouselImages___sys___revision"
  | "home_page___carouselImages___parent___id"
  | "home_page___carouselImages___parent___children"
  | "home_page___carouselImages___children"
  | "home_page___carouselImages___children___id"
  | "home_page___carouselImages___children___children"
  | "home_page___carouselImages___internal___content"
  | "home_page___carouselImages___internal___contentDigest"
  | "home_page___carouselImages___internal___description"
  | "home_page___carouselImages___internal___fieldOwners"
  | "home_page___carouselImages___internal___ignoreType"
  | "home_page___carouselImages___internal___mediaType"
  | "home_page___carouselImages___internal___owner"
  | "home_page___carouselImages___internal___type"
  | "home_page___spaceId"
  | "home_page___createdAt"
  | "home_page___updatedAt"
  | "home_page___sys___type"
  | "home_page___sys___revision"
  | "home_page___parent___id"
  | "home_page___parent___parent___id"
  | "home_page___parent___parent___children"
  | "home_page___parent___children"
  | "home_page___parent___children___id"
  | "home_page___parent___children___children"
  | "home_page___parent___internal___content"
  | "home_page___parent___internal___contentDigest"
  | "home_page___parent___internal___description"
  | "home_page___parent___internal___fieldOwners"
  | "home_page___parent___internal___ignoreType"
  | "home_page___parent___internal___mediaType"
  | "home_page___parent___internal___owner"
  | "home_page___parent___internal___type"
  | "home_page___children"
  | "home_page___children___id"
  | "home_page___children___parent___id"
  | "home_page___children___parent___children"
  | "home_page___children___children"
  | "home_page___children___children___id"
  | "home_page___children___children___children"
  | "home_page___children___internal___content"
  | "home_page___children___internal___contentDigest"
  | "home_page___children___internal___description"
  | "home_page___children___internal___fieldOwners"
  | "home_page___children___internal___ignoreType"
  | "home_page___children___internal___mediaType"
  | "home_page___children___internal___owner"
  | "home_page___children___internal___type"
  | "home_page___internal___content"
  | "home_page___internal___contentDigest"
  | "home_page___internal___description"
  | "home_page___internal___fieldOwners"
  | "home_page___internal___ignoreType"
  | "home_page___internal___mediaType"
  | "home_page___internal___owner"
  | "home_page___internal___type"
  | "contact_page"
  | "contact_page___contentful_id"
  | "contact_page___id"
  | "contact_page___node_locale"
  | "contact_page___slug"
  | "contact_page___contactBanner___contentful_id"
  | "contact_page___contactBanner___id"
  | "contact_page___contactBanner___node_locale"
  | "contact_page___contactBanner___heading"
  | "contact_page___contactBanner___subHeader"
  | "contact_page___contactBanner___backgroundImage___contentful_id"
  | "contact_page___contactBanner___backgroundImage___id"
  | "contact_page___contactBanner___backgroundImage___spaceId"
  | "contact_page___contactBanner___backgroundImage___createdAt"
  | "contact_page___contactBanner___backgroundImage___updatedAt"
  | "contact_page___contactBanner___backgroundImage___title"
  | "contact_page___contactBanner___backgroundImage___description"
  | "contact_page___contactBanner___backgroundImage___node_locale"
  | "contact_page___contactBanner___backgroundImage___gatsbyImageData"
  | "contact_page___contactBanner___backgroundImage___children"
  | "contact_page___contactBanner___community_page"
  | "contact_page___contactBanner___community_page___contentful_id"
  | "contact_page___contactBanner___community_page___id"
  | "contact_page___contactBanner___community_page___node_locale"
  | "contact_page___contactBanner___community_page___slug"
  | "contact_page___contactBanner___community_page___newsCards"
  | "contact_page___contactBanner___community_page___blogCards"
  | "contact_page___contactBanner___community_page___communityCards"
  | "contact_page___contactBanner___community_page___spaceId"
  | "contact_page___contactBanner___community_page___createdAt"
  | "contact_page___contactBanner___community_page___updatedAt"
  | "contact_page___contactBanner___community_page___children"
  | "contact_page___contactBanner___spaceId"
  | "contact_page___contactBanner___createdAt"
  | "contact_page___contactBanner___updatedAt"
  | "contact_page___contactBanner___sys___type"
  | "contact_page___contactBanner___sys___revision"
  | "contact_page___contactBanner___services_page"
  | "contact_page___contactBanner___services_page___contentful_id"
  | "contact_page___contactBanner___services_page___id"
  | "contact_page___contactBanner___services_page___node_locale"
  | "contact_page___contactBanner___services_page___slug"
  | "contact_page___contactBanner___services_page___serviceCards"
  | "contact_page___contactBanner___services_page___spaceId"
  | "contact_page___contactBanner___services_page___createdAt"
  | "contact_page___contactBanner___services_page___updatedAt"
  | "contact_page___contactBanner___services_page___children"
  | "contact_page___contactBanner___home_page"
  | "contact_page___contactBanner___home_page___contentful_id"
  | "contact_page___contactBanner___home_page___id"
  | "contact_page___contactBanner___home_page___node_locale"
  | "contact_page___contactBanner___home_page___slug"
  | "contact_page___contactBanner___home_page___testimonialSlides"
  | "contact_page___contactBanner___home_page___spaceId"
  | "contact_page___contactBanner___home_page___createdAt"
  | "contact_page___contactBanner___home_page___updatedAt"
  | "contact_page___contactBanner___home_page___children"
  | "contact_page___contactBanner___contact_page"
  | "contact_page___contactBanner___contact_page___contentful_id"
  | "contact_page___contactBanner___contact_page___id"
  | "contact_page___contactBanner___contact_page___node_locale"
  | "contact_page___contactBanner___contact_page___slug"
  | "contact_page___contactBanner___contact_page___spaceId"
  | "contact_page___contactBanner___contact_page___createdAt"
  | "contact_page___contactBanner___contact_page___updatedAt"
  | "contact_page___contactBanner___contact_page___children"
  | "contact_page___contactBanner___about_us_page"
  | "contact_page___contactBanner___about_us_page___contentful_id"
  | "contact_page___contactBanner___about_us_page___id"
  | "contact_page___contactBanner___about_us_page___node_locale"
  | "contact_page___contactBanner___about_us_page___slug"
  | "contact_page___contactBanner___about_us_page___ourTeam"
  | "contact_page___contactBanner___about_us_page___spaceId"
  | "contact_page___contactBanner___about_us_page___createdAt"
  | "contact_page___contactBanner___about_us_page___updatedAt"
  | "contact_page___contactBanner___about_us_page___children"
  | "contact_page___contactBanner___parent___id"
  | "contact_page___contactBanner___parent___children"
  | "contact_page___contactBanner___children"
  | "contact_page___contactBanner___children___id"
  | "contact_page___contactBanner___children___children"
  | "contact_page___contactBanner___internal___content"
  | "contact_page___contactBanner___internal___contentDigest"
  | "contact_page___contactBanner___internal___description"
  | "contact_page___contactBanner___internal___fieldOwners"
  | "contact_page___contactBanner___internal___ignoreType"
  | "contact_page___contactBanner___internal___mediaType"
  | "contact_page___contactBanner___internal___owner"
  | "contact_page___contactBanner___internal___type"
  | "contact_page___spaceId"
  | "contact_page___createdAt"
  | "contact_page___updatedAt"
  | "contact_page___sys___type"
  | "contact_page___sys___revision"
  | "contact_page___parent___id"
  | "contact_page___parent___parent___id"
  | "contact_page___parent___parent___children"
  | "contact_page___parent___children"
  | "contact_page___parent___children___id"
  | "contact_page___parent___children___children"
  | "contact_page___parent___internal___content"
  | "contact_page___parent___internal___contentDigest"
  | "contact_page___parent___internal___description"
  | "contact_page___parent___internal___fieldOwners"
  | "contact_page___parent___internal___ignoreType"
  | "contact_page___parent___internal___mediaType"
  | "contact_page___parent___internal___owner"
  | "contact_page___parent___internal___type"
  | "contact_page___children"
  | "contact_page___children___id"
  | "contact_page___children___parent___id"
  | "contact_page___children___parent___children"
  | "contact_page___children___children"
  | "contact_page___children___children___id"
  | "contact_page___children___children___children"
  | "contact_page___children___internal___content"
  | "contact_page___children___internal___contentDigest"
  | "contact_page___children___internal___description"
  | "contact_page___children___internal___fieldOwners"
  | "contact_page___children___internal___ignoreType"
  | "contact_page___children___internal___mediaType"
  | "contact_page___children___internal___owner"
  | "contact_page___children___internal___type"
  | "contact_page___internal___content"
  | "contact_page___internal___contentDigest"
  | "contact_page___internal___description"
  | "contact_page___internal___fieldOwners"
  | "contact_page___internal___ignoreType"
  | "contact_page___internal___mediaType"
  | "contact_page___internal___owner"
  | "contact_page___internal___type"
  | "about_us_page"
  | "about_us_page___contentful_id"
  | "about_us_page___id"
  | "about_us_page___node_locale"
  | "about_us_page___slug"
  | "about_us_page___aboutUsBanner___contentful_id"
  | "about_us_page___aboutUsBanner___id"
  | "about_us_page___aboutUsBanner___node_locale"
  | "about_us_page___aboutUsBanner___heading"
  | "about_us_page___aboutUsBanner___subHeader"
  | "about_us_page___aboutUsBanner___backgroundImage___contentful_id"
  | "about_us_page___aboutUsBanner___backgroundImage___id"
  | "about_us_page___aboutUsBanner___backgroundImage___spaceId"
  | "about_us_page___aboutUsBanner___backgroundImage___createdAt"
  | "about_us_page___aboutUsBanner___backgroundImage___updatedAt"
  | "about_us_page___aboutUsBanner___backgroundImage___title"
  | "about_us_page___aboutUsBanner___backgroundImage___description"
  | "about_us_page___aboutUsBanner___backgroundImage___node_locale"
  | "about_us_page___aboutUsBanner___backgroundImage___gatsbyImageData"
  | "about_us_page___aboutUsBanner___backgroundImage___children"
  | "about_us_page___aboutUsBanner___community_page"
  | "about_us_page___aboutUsBanner___community_page___contentful_id"
  | "about_us_page___aboutUsBanner___community_page___id"
  | "about_us_page___aboutUsBanner___community_page___node_locale"
  | "about_us_page___aboutUsBanner___community_page___slug"
  | "about_us_page___aboutUsBanner___community_page___newsCards"
  | "about_us_page___aboutUsBanner___community_page___blogCards"
  | "about_us_page___aboutUsBanner___community_page___communityCards"
  | "about_us_page___aboutUsBanner___community_page___spaceId"
  | "about_us_page___aboutUsBanner___community_page___createdAt"
  | "about_us_page___aboutUsBanner___community_page___updatedAt"
  | "about_us_page___aboutUsBanner___community_page___children"
  | "about_us_page___aboutUsBanner___spaceId"
  | "about_us_page___aboutUsBanner___createdAt"
  | "about_us_page___aboutUsBanner___updatedAt"
  | "about_us_page___aboutUsBanner___sys___type"
  | "about_us_page___aboutUsBanner___sys___revision"
  | "about_us_page___aboutUsBanner___services_page"
  | "about_us_page___aboutUsBanner___services_page___contentful_id"
  | "about_us_page___aboutUsBanner___services_page___id"
  | "about_us_page___aboutUsBanner___services_page___node_locale"
  | "about_us_page___aboutUsBanner___services_page___slug"
  | "about_us_page___aboutUsBanner___services_page___serviceCards"
  | "about_us_page___aboutUsBanner___services_page___spaceId"
  | "about_us_page___aboutUsBanner___services_page___createdAt"
  | "about_us_page___aboutUsBanner___services_page___updatedAt"
  | "about_us_page___aboutUsBanner___services_page___children"
  | "about_us_page___aboutUsBanner___home_page"
  | "about_us_page___aboutUsBanner___home_page___contentful_id"
  | "about_us_page___aboutUsBanner___home_page___id"
  | "about_us_page___aboutUsBanner___home_page___node_locale"
  | "about_us_page___aboutUsBanner___home_page___slug"
  | "about_us_page___aboutUsBanner___home_page___testimonialSlides"
  | "about_us_page___aboutUsBanner___home_page___spaceId"
  | "about_us_page___aboutUsBanner___home_page___createdAt"
  | "about_us_page___aboutUsBanner___home_page___updatedAt"
  | "about_us_page___aboutUsBanner___home_page___children"
  | "about_us_page___aboutUsBanner___contact_page"
  | "about_us_page___aboutUsBanner___contact_page___contentful_id"
  | "about_us_page___aboutUsBanner___contact_page___id"
  | "about_us_page___aboutUsBanner___contact_page___node_locale"
  | "about_us_page___aboutUsBanner___contact_page___slug"
  | "about_us_page___aboutUsBanner___contact_page___spaceId"
  | "about_us_page___aboutUsBanner___contact_page___createdAt"
  | "about_us_page___aboutUsBanner___contact_page___updatedAt"
  | "about_us_page___aboutUsBanner___contact_page___children"
  | "about_us_page___aboutUsBanner___about_us_page"
  | "about_us_page___aboutUsBanner___about_us_page___contentful_id"
  | "about_us_page___aboutUsBanner___about_us_page___id"
  | "about_us_page___aboutUsBanner___about_us_page___node_locale"
  | "about_us_page___aboutUsBanner___about_us_page___slug"
  | "about_us_page___aboutUsBanner___about_us_page___ourTeam"
  | "about_us_page___aboutUsBanner___about_us_page___spaceId"
  | "about_us_page___aboutUsBanner___about_us_page___createdAt"
  | "about_us_page___aboutUsBanner___about_us_page___updatedAt"
  | "about_us_page___aboutUsBanner___about_us_page___children"
  | "about_us_page___aboutUsBanner___parent___id"
  | "about_us_page___aboutUsBanner___parent___children"
  | "about_us_page___aboutUsBanner___children"
  | "about_us_page___aboutUsBanner___children___id"
  | "about_us_page___aboutUsBanner___children___children"
  | "about_us_page___aboutUsBanner___internal___content"
  | "about_us_page___aboutUsBanner___internal___contentDigest"
  | "about_us_page___aboutUsBanner___internal___description"
  | "about_us_page___aboutUsBanner___internal___fieldOwners"
  | "about_us_page___aboutUsBanner___internal___ignoreType"
  | "about_us_page___aboutUsBanner___internal___mediaType"
  | "about_us_page___aboutUsBanner___internal___owner"
  | "about_us_page___aboutUsBanner___internal___type"
  | "about_us_page___whatWeDo___contentful_id"
  | "about_us_page___whatWeDo___id"
  | "about_us_page___whatWeDo___node_locale"
  | "about_us_page___whatWeDo___image___contentful_id"
  | "about_us_page___whatWeDo___image___id"
  | "about_us_page___whatWeDo___image___spaceId"
  | "about_us_page___whatWeDo___image___createdAt"
  | "about_us_page___whatWeDo___image___updatedAt"
  | "about_us_page___whatWeDo___image___title"
  | "about_us_page___whatWeDo___image___description"
  | "about_us_page___whatWeDo___image___node_locale"
  | "about_us_page___whatWeDo___image___gatsbyImageData"
  | "about_us_page___whatWeDo___image___children"
  | "about_us_page___whatWeDo___about_us_page"
  | "about_us_page___whatWeDo___about_us_page___contentful_id"
  | "about_us_page___whatWeDo___about_us_page___id"
  | "about_us_page___whatWeDo___about_us_page___node_locale"
  | "about_us_page___whatWeDo___about_us_page___slug"
  | "about_us_page___whatWeDo___about_us_page___ourTeam"
  | "about_us_page___whatWeDo___about_us_page___spaceId"
  | "about_us_page___whatWeDo___about_us_page___createdAt"
  | "about_us_page___whatWeDo___about_us_page___updatedAt"
  | "about_us_page___whatWeDo___about_us_page___children"
  | "about_us_page___whatWeDo___text___id"
  | "about_us_page___whatWeDo___text___children"
  | "about_us_page___whatWeDo___text___text"
  | "about_us_page___whatWeDo___spaceId"
  | "about_us_page___whatWeDo___createdAt"
  | "about_us_page___whatWeDo___updatedAt"
  | "about_us_page___whatWeDo___sys___type"
  | "about_us_page___whatWeDo___sys___revision"
  | "about_us_page___whatWeDo___home_page"
  | "about_us_page___whatWeDo___home_page___contentful_id"
  | "about_us_page___whatWeDo___home_page___id"
  | "about_us_page___whatWeDo___home_page___node_locale"
  | "about_us_page___whatWeDo___home_page___slug"
  | "about_us_page___whatWeDo___home_page___testimonialSlides"
  | "about_us_page___whatWeDo___home_page___spaceId"
  | "about_us_page___whatWeDo___home_page___createdAt"
  | "about_us_page___whatWeDo___home_page___updatedAt"
  | "about_us_page___whatWeDo___home_page___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___parent___id"
  | "about_us_page___whatWeDo___parent___children"
  | "about_us_page___whatWeDo___children"
  | "about_us_page___whatWeDo___children___id"
  | "about_us_page___whatWeDo___children___children"
  | "about_us_page___whatWeDo___internal___content"
  | "about_us_page___whatWeDo___internal___contentDigest"
  | "about_us_page___whatWeDo___internal___description"
  | "about_us_page___whatWeDo___internal___fieldOwners"
  | "about_us_page___whatWeDo___internal___ignoreType"
  | "about_us_page___whatWeDo___internal___mediaType"
  | "about_us_page___whatWeDo___internal___owner"
  | "about_us_page___whatWeDo___internal___type"
  | "about_us_page___carouselImages___contentful_id"
  | "about_us_page___carouselImages___id"
  | "about_us_page___carouselImages___node_locale"
  | "about_us_page___carouselImages___images"
  | "about_us_page___carouselImages___images___contentful_id"
  | "about_us_page___carouselImages___images___id"
  | "about_us_page___carouselImages___images___spaceId"
  | "about_us_page___carouselImages___images___createdAt"
  | "about_us_page___carouselImages___images___updatedAt"
  | "about_us_page___carouselImages___images___title"
  | "about_us_page___carouselImages___images___description"
  | "about_us_page___carouselImages___images___node_locale"
  | "about_us_page___carouselImages___images___gatsbyImageData"
  | "about_us_page___carouselImages___images___children"
  | "about_us_page___carouselImages___home_page"
  | "about_us_page___carouselImages___home_page___contentful_id"
  | "about_us_page___carouselImages___home_page___id"
  | "about_us_page___carouselImages___home_page___node_locale"
  | "about_us_page___carouselImages___home_page___slug"
  | "about_us_page___carouselImages___home_page___testimonialSlides"
  | "about_us_page___carouselImages___home_page___spaceId"
  | "about_us_page___carouselImages___home_page___createdAt"
  | "about_us_page___carouselImages___home_page___updatedAt"
  | "about_us_page___carouselImages___home_page___children"
  | "about_us_page___carouselImages___about_us_page"
  | "about_us_page___carouselImages___about_us_page___contentful_id"
  | "about_us_page___carouselImages___about_us_page___id"
  | "about_us_page___carouselImages___about_us_page___node_locale"
  | "about_us_page___carouselImages___about_us_page___slug"
  | "about_us_page___carouselImages___about_us_page___ourTeam"
  | "about_us_page___carouselImages___about_us_page___spaceId"
  | "about_us_page___carouselImages___about_us_page___createdAt"
  | "about_us_page___carouselImages___about_us_page___updatedAt"
  | "about_us_page___carouselImages___about_us_page___children"
  | "about_us_page___carouselImages___spaceId"
  | "about_us_page___carouselImages___createdAt"
  | "about_us_page___carouselImages___updatedAt"
  | "about_us_page___carouselImages___sys___type"
  | "about_us_page___carouselImages___sys___revision"
  | "about_us_page___carouselImages___parent___id"
  | "about_us_page___carouselImages___parent___children"
  | "about_us_page___carouselImages___children"
  | "about_us_page___carouselImages___children___id"
  | "about_us_page___carouselImages___children___children"
  | "about_us_page___carouselImages___internal___content"
  | "about_us_page___carouselImages___internal___contentDigest"
  | "about_us_page___carouselImages___internal___description"
  | "about_us_page___carouselImages___internal___fieldOwners"
  | "about_us_page___carouselImages___internal___ignoreType"
  | "about_us_page___carouselImages___internal___mediaType"
  | "about_us_page___carouselImages___internal___owner"
  | "about_us_page___carouselImages___internal___type"
  | "about_us_page___ourTeam"
  | "about_us_page___ourTeam___contentful_id"
  | "about_us_page___ourTeam___id"
  | "about_us_page___ourTeam___node_locale"
  | "about_us_page___ourTeam___name"
  | "about_us_page___ourTeam___jobTitle"
  | "about_us_page___ourTeam___cardSize"
  | "about_us_page___ourTeam___employeeImage___contentful_id"
  | "about_us_page___ourTeam___employeeImage___id"
  | "about_us_page___ourTeam___employeeImage___spaceId"
  | "about_us_page___ourTeam___employeeImage___createdAt"
  | "about_us_page___ourTeam___employeeImage___updatedAt"
  | "about_us_page___ourTeam___employeeImage___title"
  | "about_us_page___ourTeam___employeeImage___description"
  | "about_us_page___ourTeam___employeeImage___node_locale"
  | "about_us_page___ourTeam___employeeImage___gatsbyImageData"
  | "about_us_page___ourTeam___employeeImage___children"
  | "about_us_page___ourTeam___about_us_page"
  | "about_us_page___ourTeam___about_us_page___contentful_id"
  | "about_us_page___ourTeam___about_us_page___id"
  | "about_us_page___ourTeam___about_us_page___node_locale"
  | "about_us_page___ourTeam___about_us_page___slug"
  | "about_us_page___ourTeam___about_us_page___ourTeam"
  | "about_us_page___ourTeam___about_us_page___spaceId"
  | "about_us_page___ourTeam___about_us_page___createdAt"
  | "about_us_page___ourTeam___about_us_page___updatedAt"
  | "about_us_page___ourTeam___about_us_page___children"
  | "about_us_page___ourTeam___description___id"
  | "about_us_page___ourTeam___description___children"
  | "about_us_page___ourTeam___description___description"
  | "about_us_page___ourTeam___spaceId"
  | "about_us_page___ourTeam___createdAt"
  | "about_us_page___ourTeam___updatedAt"
  | "about_us_page___ourTeam___sys___type"
  | "about_us_page___ourTeam___sys___revision"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___parent___id"
  | "about_us_page___ourTeam___parent___children"
  | "about_us_page___ourTeam___children"
  | "about_us_page___ourTeam___children___id"
  | "about_us_page___ourTeam___children___children"
  | "about_us_page___ourTeam___internal___content"
  | "about_us_page___ourTeam___internal___contentDigest"
  | "about_us_page___ourTeam___internal___description"
  | "about_us_page___ourTeam___internal___fieldOwners"
  | "about_us_page___ourTeam___internal___ignoreType"
  | "about_us_page___ourTeam___internal___mediaType"
  | "about_us_page___ourTeam___internal___owner"
  | "about_us_page___ourTeam___internal___type"
  | "about_us_page___spaceId"
  | "about_us_page___createdAt"
  | "about_us_page___updatedAt"
  | "about_us_page___sys___type"
  | "about_us_page___sys___revision"
  | "about_us_page___parent___id"
  | "about_us_page___parent___parent___id"
  | "about_us_page___parent___parent___children"
  | "about_us_page___parent___children"
  | "about_us_page___parent___children___id"
  | "about_us_page___parent___children___children"
  | "about_us_page___parent___internal___content"
  | "about_us_page___parent___internal___contentDigest"
  | "about_us_page___parent___internal___description"
  | "about_us_page___parent___internal___fieldOwners"
  | "about_us_page___parent___internal___ignoreType"
  | "about_us_page___parent___internal___mediaType"
  | "about_us_page___parent___internal___owner"
  | "about_us_page___parent___internal___type"
  | "about_us_page___children"
  | "about_us_page___children___id"
  | "about_us_page___children___parent___id"
  | "about_us_page___children___parent___children"
  | "about_us_page___children___children"
  | "about_us_page___children___children___id"
  | "about_us_page___children___children___children"
  | "about_us_page___children___internal___content"
  | "about_us_page___children___internal___contentDigest"
  | "about_us_page___children___internal___description"
  | "about_us_page___children___internal___fieldOwners"
  | "about_us_page___children___internal___ignoreType"
  | "about_us_page___children___internal___mediaType"
  | "about_us_page___children___internal___owner"
  | "about_us_page___children___internal___type"
  | "about_us_page___internal___content"
  | "about_us_page___internal___contentDigest"
  | "about_us_page___internal___description"
  | "about_us_page___internal___fieldOwners"
  | "about_us_page___internal___ignoreType"
  | "about_us_page___internal___mediaType"
  | "about_us_page___internal___owner"
  | "about_us_page___internal___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulBannerGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulBannerEdge>
  nodes: Array<ContentfulBanner>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulBannerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBannerFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulTextAndImageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTextAndImageEdge>
  nodes: Array<ContentfulTextAndImage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulTextAndImageGroupConnection>
}

export type ContentfulTextAndImageConnectionDistinctArgs = {
  field: ContentfulTextAndImageFieldsEnum
}

export type ContentfulTextAndImageConnectionMaxArgs = {
  field: ContentfulTextAndImageFieldsEnum
}

export type ContentfulTextAndImageConnectionMinArgs = {
  field: ContentfulTextAndImageFieldsEnum
}

export type ContentfulTextAndImageConnectionSumArgs = {
  field: ContentfulTextAndImageFieldsEnum
}

export type ContentfulTextAndImageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulTextAndImageFieldsEnum
}

export type ContentfulTextAndImageEdge = {
  next?: Maybe<ContentfulTextAndImage>
  node: ContentfulTextAndImage
  previous?: Maybe<ContentfulTextAndImage>
}

export type ContentfulTextAndImageFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "image___contentful_id"
  | "image___id"
  | "image___spaceId"
  | "image___createdAt"
  | "image___updatedAt"
  | "image___file___url"
  | "image___file___details___size"
  | "image___file___fileName"
  | "image___file___contentType"
  | "image___title"
  | "image___description"
  | "image___node_locale"
  | "image___sys___type"
  | "image___sys___revision"
  | "image___fixed___base64"
  | "image___fixed___tracedSVG"
  | "image___fixed___aspectRatio"
  | "image___fixed___width"
  | "image___fixed___height"
  | "image___fixed___src"
  | "image___fixed___srcSet"
  | "image___fixed___srcWebp"
  | "image___fixed___srcSetWebp"
  | "image___fluid___base64"
  | "image___fluid___tracedSVG"
  | "image___fluid___aspectRatio"
  | "image___fluid___src"
  | "image___fluid___srcSet"
  | "image___fluid___srcWebp"
  | "image___fluid___srcSetWebp"
  | "image___fluid___sizes"
  | "image___gatsbyImageData"
  | "image___resize___base64"
  | "image___resize___tracedSVG"
  | "image___resize___src"
  | "image___resize___width"
  | "image___resize___height"
  | "image___resize___aspectRatio"
  | "image___parent___id"
  | "image___parent___parent___id"
  | "image___parent___parent___children"
  | "image___parent___children"
  | "image___parent___children___id"
  | "image___parent___children___children"
  | "image___parent___internal___content"
  | "image___parent___internal___contentDigest"
  | "image___parent___internal___description"
  | "image___parent___internal___fieldOwners"
  | "image___parent___internal___ignoreType"
  | "image___parent___internal___mediaType"
  | "image___parent___internal___owner"
  | "image___parent___internal___type"
  | "image___children"
  | "image___children___id"
  | "image___children___parent___id"
  | "image___children___parent___children"
  | "image___children___children"
  | "image___children___children___id"
  | "image___children___children___children"
  | "image___children___internal___content"
  | "image___children___internal___contentDigest"
  | "image___children___internal___description"
  | "image___children___internal___fieldOwners"
  | "image___children___internal___ignoreType"
  | "image___children___internal___mediaType"
  | "image___children___internal___owner"
  | "image___children___internal___type"
  | "image___internal___content"
  | "image___internal___contentDigest"
  | "image___internal___description"
  | "image___internal___fieldOwners"
  | "image___internal___ignoreType"
  | "image___internal___mediaType"
  | "image___internal___owner"
  | "image___internal___type"
  | "about_us_page"
  | "about_us_page___contentful_id"
  | "about_us_page___id"
  | "about_us_page___node_locale"
  | "about_us_page___slug"
  | "about_us_page___aboutUsBanner___contentful_id"
  | "about_us_page___aboutUsBanner___id"
  | "about_us_page___aboutUsBanner___node_locale"
  | "about_us_page___aboutUsBanner___heading"
  | "about_us_page___aboutUsBanner___subHeader"
  | "about_us_page___aboutUsBanner___backgroundImage___contentful_id"
  | "about_us_page___aboutUsBanner___backgroundImage___id"
  | "about_us_page___aboutUsBanner___backgroundImage___spaceId"
  | "about_us_page___aboutUsBanner___backgroundImage___createdAt"
  | "about_us_page___aboutUsBanner___backgroundImage___updatedAt"
  | "about_us_page___aboutUsBanner___backgroundImage___title"
  | "about_us_page___aboutUsBanner___backgroundImage___description"
  | "about_us_page___aboutUsBanner___backgroundImage___node_locale"
  | "about_us_page___aboutUsBanner___backgroundImage___gatsbyImageData"
  | "about_us_page___aboutUsBanner___backgroundImage___children"
  | "about_us_page___aboutUsBanner___community_page"
  | "about_us_page___aboutUsBanner___community_page___contentful_id"
  | "about_us_page___aboutUsBanner___community_page___id"
  | "about_us_page___aboutUsBanner___community_page___node_locale"
  | "about_us_page___aboutUsBanner___community_page___slug"
  | "about_us_page___aboutUsBanner___community_page___newsCards"
  | "about_us_page___aboutUsBanner___community_page___blogCards"
  | "about_us_page___aboutUsBanner___community_page___communityCards"
  | "about_us_page___aboutUsBanner___community_page___spaceId"
  | "about_us_page___aboutUsBanner___community_page___createdAt"
  | "about_us_page___aboutUsBanner___community_page___updatedAt"
  | "about_us_page___aboutUsBanner___community_page___children"
  | "about_us_page___aboutUsBanner___spaceId"
  | "about_us_page___aboutUsBanner___createdAt"
  | "about_us_page___aboutUsBanner___updatedAt"
  | "about_us_page___aboutUsBanner___sys___type"
  | "about_us_page___aboutUsBanner___sys___revision"
  | "about_us_page___aboutUsBanner___services_page"
  | "about_us_page___aboutUsBanner___services_page___contentful_id"
  | "about_us_page___aboutUsBanner___services_page___id"
  | "about_us_page___aboutUsBanner___services_page___node_locale"
  | "about_us_page___aboutUsBanner___services_page___slug"
  | "about_us_page___aboutUsBanner___services_page___serviceCards"
  | "about_us_page___aboutUsBanner___services_page___spaceId"
  | "about_us_page___aboutUsBanner___services_page___createdAt"
  | "about_us_page___aboutUsBanner___services_page___updatedAt"
  | "about_us_page___aboutUsBanner___services_page___children"
  | "about_us_page___aboutUsBanner___home_page"
  | "about_us_page___aboutUsBanner___home_page___contentful_id"
  | "about_us_page___aboutUsBanner___home_page___id"
  | "about_us_page___aboutUsBanner___home_page___node_locale"
  | "about_us_page___aboutUsBanner___home_page___slug"
  | "about_us_page___aboutUsBanner___home_page___testimonialSlides"
  | "about_us_page___aboutUsBanner___home_page___spaceId"
  | "about_us_page___aboutUsBanner___home_page___createdAt"
  | "about_us_page___aboutUsBanner___home_page___updatedAt"
  | "about_us_page___aboutUsBanner___home_page___children"
  | "about_us_page___aboutUsBanner___contact_page"
  | "about_us_page___aboutUsBanner___contact_page___contentful_id"
  | "about_us_page___aboutUsBanner___contact_page___id"
  | "about_us_page___aboutUsBanner___contact_page___node_locale"
  | "about_us_page___aboutUsBanner___contact_page___slug"
  | "about_us_page___aboutUsBanner___contact_page___spaceId"
  | "about_us_page___aboutUsBanner___contact_page___createdAt"
  | "about_us_page___aboutUsBanner___contact_page___updatedAt"
  | "about_us_page___aboutUsBanner___contact_page___children"
  | "about_us_page___aboutUsBanner___about_us_page"
  | "about_us_page___aboutUsBanner___about_us_page___contentful_id"
  | "about_us_page___aboutUsBanner___about_us_page___id"
  | "about_us_page___aboutUsBanner___about_us_page___node_locale"
  | "about_us_page___aboutUsBanner___about_us_page___slug"
  | "about_us_page___aboutUsBanner___about_us_page___ourTeam"
  | "about_us_page___aboutUsBanner___about_us_page___spaceId"
  | "about_us_page___aboutUsBanner___about_us_page___createdAt"
  | "about_us_page___aboutUsBanner___about_us_page___updatedAt"
  | "about_us_page___aboutUsBanner___about_us_page___children"
  | "about_us_page___aboutUsBanner___parent___id"
  | "about_us_page___aboutUsBanner___parent___children"
  | "about_us_page___aboutUsBanner___children"
  | "about_us_page___aboutUsBanner___children___id"
  | "about_us_page___aboutUsBanner___children___children"
  | "about_us_page___aboutUsBanner___internal___content"
  | "about_us_page___aboutUsBanner___internal___contentDigest"
  | "about_us_page___aboutUsBanner___internal___description"
  | "about_us_page___aboutUsBanner___internal___fieldOwners"
  | "about_us_page___aboutUsBanner___internal___ignoreType"
  | "about_us_page___aboutUsBanner___internal___mediaType"
  | "about_us_page___aboutUsBanner___internal___owner"
  | "about_us_page___aboutUsBanner___internal___type"
  | "about_us_page___whatWeDo___contentful_id"
  | "about_us_page___whatWeDo___id"
  | "about_us_page___whatWeDo___node_locale"
  | "about_us_page___whatWeDo___image___contentful_id"
  | "about_us_page___whatWeDo___image___id"
  | "about_us_page___whatWeDo___image___spaceId"
  | "about_us_page___whatWeDo___image___createdAt"
  | "about_us_page___whatWeDo___image___updatedAt"
  | "about_us_page___whatWeDo___image___title"
  | "about_us_page___whatWeDo___image___description"
  | "about_us_page___whatWeDo___image___node_locale"
  | "about_us_page___whatWeDo___image___gatsbyImageData"
  | "about_us_page___whatWeDo___image___children"
  | "about_us_page___whatWeDo___about_us_page"
  | "about_us_page___whatWeDo___about_us_page___contentful_id"
  | "about_us_page___whatWeDo___about_us_page___id"
  | "about_us_page___whatWeDo___about_us_page___node_locale"
  | "about_us_page___whatWeDo___about_us_page___slug"
  | "about_us_page___whatWeDo___about_us_page___ourTeam"
  | "about_us_page___whatWeDo___about_us_page___spaceId"
  | "about_us_page___whatWeDo___about_us_page___createdAt"
  | "about_us_page___whatWeDo___about_us_page___updatedAt"
  | "about_us_page___whatWeDo___about_us_page___children"
  | "about_us_page___whatWeDo___text___id"
  | "about_us_page___whatWeDo___text___children"
  | "about_us_page___whatWeDo___text___text"
  | "about_us_page___whatWeDo___spaceId"
  | "about_us_page___whatWeDo___createdAt"
  | "about_us_page___whatWeDo___updatedAt"
  | "about_us_page___whatWeDo___sys___type"
  | "about_us_page___whatWeDo___sys___revision"
  | "about_us_page___whatWeDo___home_page"
  | "about_us_page___whatWeDo___home_page___contentful_id"
  | "about_us_page___whatWeDo___home_page___id"
  | "about_us_page___whatWeDo___home_page___node_locale"
  | "about_us_page___whatWeDo___home_page___slug"
  | "about_us_page___whatWeDo___home_page___testimonialSlides"
  | "about_us_page___whatWeDo___home_page___spaceId"
  | "about_us_page___whatWeDo___home_page___createdAt"
  | "about_us_page___whatWeDo___home_page___updatedAt"
  | "about_us_page___whatWeDo___home_page___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___parent___id"
  | "about_us_page___whatWeDo___parent___children"
  | "about_us_page___whatWeDo___children"
  | "about_us_page___whatWeDo___children___id"
  | "about_us_page___whatWeDo___children___children"
  | "about_us_page___whatWeDo___internal___content"
  | "about_us_page___whatWeDo___internal___contentDigest"
  | "about_us_page___whatWeDo___internal___description"
  | "about_us_page___whatWeDo___internal___fieldOwners"
  | "about_us_page___whatWeDo___internal___ignoreType"
  | "about_us_page___whatWeDo___internal___mediaType"
  | "about_us_page___whatWeDo___internal___owner"
  | "about_us_page___whatWeDo___internal___type"
  | "about_us_page___carouselImages___contentful_id"
  | "about_us_page___carouselImages___id"
  | "about_us_page___carouselImages___node_locale"
  | "about_us_page___carouselImages___images"
  | "about_us_page___carouselImages___images___contentful_id"
  | "about_us_page___carouselImages___images___id"
  | "about_us_page___carouselImages___images___spaceId"
  | "about_us_page___carouselImages___images___createdAt"
  | "about_us_page___carouselImages___images___updatedAt"
  | "about_us_page___carouselImages___images___title"
  | "about_us_page___carouselImages___images___description"
  | "about_us_page___carouselImages___images___node_locale"
  | "about_us_page___carouselImages___images___gatsbyImageData"
  | "about_us_page___carouselImages___images___children"
  | "about_us_page___carouselImages___home_page"
  | "about_us_page___carouselImages___home_page___contentful_id"
  | "about_us_page___carouselImages___home_page___id"
  | "about_us_page___carouselImages___home_page___node_locale"
  | "about_us_page___carouselImages___home_page___slug"
  | "about_us_page___carouselImages___home_page___testimonialSlides"
  | "about_us_page___carouselImages___home_page___spaceId"
  | "about_us_page___carouselImages___home_page___createdAt"
  | "about_us_page___carouselImages___home_page___updatedAt"
  | "about_us_page___carouselImages___home_page___children"
  | "about_us_page___carouselImages___about_us_page"
  | "about_us_page___carouselImages___about_us_page___contentful_id"
  | "about_us_page___carouselImages___about_us_page___id"
  | "about_us_page___carouselImages___about_us_page___node_locale"
  | "about_us_page___carouselImages___about_us_page___slug"
  | "about_us_page___carouselImages___about_us_page___ourTeam"
  | "about_us_page___carouselImages___about_us_page___spaceId"
  | "about_us_page___carouselImages___about_us_page___createdAt"
  | "about_us_page___carouselImages___about_us_page___updatedAt"
  | "about_us_page___carouselImages___about_us_page___children"
  | "about_us_page___carouselImages___spaceId"
  | "about_us_page___carouselImages___createdAt"
  | "about_us_page___carouselImages___updatedAt"
  | "about_us_page___carouselImages___sys___type"
  | "about_us_page___carouselImages___sys___revision"
  | "about_us_page___carouselImages___parent___id"
  | "about_us_page___carouselImages___parent___children"
  | "about_us_page___carouselImages___children"
  | "about_us_page___carouselImages___children___id"
  | "about_us_page___carouselImages___children___children"
  | "about_us_page___carouselImages___internal___content"
  | "about_us_page___carouselImages___internal___contentDigest"
  | "about_us_page___carouselImages___internal___description"
  | "about_us_page___carouselImages___internal___fieldOwners"
  | "about_us_page___carouselImages___internal___ignoreType"
  | "about_us_page___carouselImages___internal___mediaType"
  | "about_us_page___carouselImages___internal___owner"
  | "about_us_page___carouselImages___internal___type"
  | "about_us_page___ourTeam"
  | "about_us_page___ourTeam___contentful_id"
  | "about_us_page___ourTeam___id"
  | "about_us_page___ourTeam___node_locale"
  | "about_us_page___ourTeam___name"
  | "about_us_page___ourTeam___jobTitle"
  | "about_us_page___ourTeam___cardSize"
  | "about_us_page___ourTeam___employeeImage___contentful_id"
  | "about_us_page___ourTeam___employeeImage___id"
  | "about_us_page___ourTeam___employeeImage___spaceId"
  | "about_us_page___ourTeam___employeeImage___createdAt"
  | "about_us_page___ourTeam___employeeImage___updatedAt"
  | "about_us_page___ourTeam___employeeImage___title"
  | "about_us_page___ourTeam___employeeImage___description"
  | "about_us_page___ourTeam___employeeImage___node_locale"
  | "about_us_page___ourTeam___employeeImage___gatsbyImageData"
  | "about_us_page___ourTeam___employeeImage___children"
  | "about_us_page___ourTeam___about_us_page"
  | "about_us_page___ourTeam___about_us_page___contentful_id"
  | "about_us_page___ourTeam___about_us_page___id"
  | "about_us_page___ourTeam___about_us_page___node_locale"
  | "about_us_page___ourTeam___about_us_page___slug"
  | "about_us_page___ourTeam___about_us_page___ourTeam"
  | "about_us_page___ourTeam___about_us_page___spaceId"
  | "about_us_page___ourTeam___about_us_page___createdAt"
  | "about_us_page___ourTeam___about_us_page___updatedAt"
  | "about_us_page___ourTeam___about_us_page___children"
  | "about_us_page___ourTeam___description___id"
  | "about_us_page___ourTeam___description___children"
  | "about_us_page___ourTeam___description___description"
  | "about_us_page___ourTeam___spaceId"
  | "about_us_page___ourTeam___createdAt"
  | "about_us_page___ourTeam___updatedAt"
  | "about_us_page___ourTeam___sys___type"
  | "about_us_page___ourTeam___sys___revision"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___parent___id"
  | "about_us_page___ourTeam___parent___children"
  | "about_us_page___ourTeam___children"
  | "about_us_page___ourTeam___children___id"
  | "about_us_page___ourTeam___children___children"
  | "about_us_page___ourTeam___internal___content"
  | "about_us_page___ourTeam___internal___contentDigest"
  | "about_us_page___ourTeam___internal___description"
  | "about_us_page___ourTeam___internal___fieldOwners"
  | "about_us_page___ourTeam___internal___ignoreType"
  | "about_us_page___ourTeam___internal___mediaType"
  | "about_us_page___ourTeam___internal___owner"
  | "about_us_page___ourTeam___internal___type"
  | "about_us_page___spaceId"
  | "about_us_page___createdAt"
  | "about_us_page___updatedAt"
  | "about_us_page___sys___type"
  | "about_us_page___sys___revision"
  | "about_us_page___parent___id"
  | "about_us_page___parent___parent___id"
  | "about_us_page___parent___parent___children"
  | "about_us_page___parent___children"
  | "about_us_page___parent___children___id"
  | "about_us_page___parent___children___children"
  | "about_us_page___parent___internal___content"
  | "about_us_page___parent___internal___contentDigest"
  | "about_us_page___parent___internal___description"
  | "about_us_page___parent___internal___fieldOwners"
  | "about_us_page___parent___internal___ignoreType"
  | "about_us_page___parent___internal___mediaType"
  | "about_us_page___parent___internal___owner"
  | "about_us_page___parent___internal___type"
  | "about_us_page___children"
  | "about_us_page___children___id"
  | "about_us_page___children___parent___id"
  | "about_us_page___children___parent___children"
  | "about_us_page___children___children"
  | "about_us_page___children___children___id"
  | "about_us_page___children___children___children"
  | "about_us_page___children___internal___content"
  | "about_us_page___children___internal___contentDigest"
  | "about_us_page___children___internal___description"
  | "about_us_page___children___internal___fieldOwners"
  | "about_us_page___children___internal___ignoreType"
  | "about_us_page___children___internal___mediaType"
  | "about_us_page___children___internal___owner"
  | "about_us_page___children___internal___type"
  | "about_us_page___internal___content"
  | "about_us_page___internal___contentDigest"
  | "about_us_page___internal___description"
  | "about_us_page___internal___fieldOwners"
  | "about_us_page___internal___ignoreType"
  | "about_us_page___internal___mediaType"
  | "about_us_page___internal___owner"
  | "about_us_page___internal___type"
  | "text___id"
  | "text___parent___id"
  | "text___parent___parent___id"
  | "text___parent___parent___children"
  | "text___parent___children"
  | "text___parent___children___id"
  | "text___parent___children___children"
  | "text___parent___internal___content"
  | "text___parent___internal___contentDigest"
  | "text___parent___internal___description"
  | "text___parent___internal___fieldOwners"
  | "text___parent___internal___ignoreType"
  | "text___parent___internal___mediaType"
  | "text___parent___internal___owner"
  | "text___parent___internal___type"
  | "text___children"
  | "text___children___id"
  | "text___children___parent___id"
  | "text___children___parent___children"
  | "text___children___children"
  | "text___children___children___id"
  | "text___children___children___children"
  | "text___children___internal___content"
  | "text___children___internal___contentDigest"
  | "text___children___internal___description"
  | "text___children___internal___fieldOwners"
  | "text___children___internal___ignoreType"
  | "text___children___internal___mediaType"
  | "text___children___internal___owner"
  | "text___children___internal___type"
  | "text___internal___content"
  | "text___internal___contentDigest"
  | "text___internal___description"
  | "text___internal___fieldOwners"
  | "text___internal___ignoreType"
  | "text___internal___mediaType"
  | "text___internal___owner"
  | "text___internal___type"
  | "text___text"
  | "text___sys___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "home_page"
  | "home_page___contentful_id"
  | "home_page___id"
  | "home_page___node_locale"
  | "home_page___slug"
  | "home_page___homeBanner___contentful_id"
  | "home_page___homeBanner___id"
  | "home_page___homeBanner___node_locale"
  | "home_page___homeBanner___heading"
  | "home_page___homeBanner___subHeader"
  | "home_page___homeBanner___backgroundImage___contentful_id"
  | "home_page___homeBanner___backgroundImage___id"
  | "home_page___homeBanner___backgroundImage___spaceId"
  | "home_page___homeBanner___backgroundImage___createdAt"
  | "home_page___homeBanner___backgroundImage___updatedAt"
  | "home_page___homeBanner___backgroundImage___title"
  | "home_page___homeBanner___backgroundImage___description"
  | "home_page___homeBanner___backgroundImage___node_locale"
  | "home_page___homeBanner___backgroundImage___gatsbyImageData"
  | "home_page___homeBanner___backgroundImage___children"
  | "home_page___homeBanner___community_page"
  | "home_page___homeBanner___community_page___contentful_id"
  | "home_page___homeBanner___community_page___id"
  | "home_page___homeBanner___community_page___node_locale"
  | "home_page___homeBanner___community_page___slug"
  | "home_page___homeBanner___community_page___newsCards"
  | "home_page___homeBanner___community_page___blogCards"
  | "home_page___homeBanner___community_page___communityCards"
  | "home_page___homeBanner___community_page___spaceId"
  | "home_page___homeBanner___community_page___createdAt"
  | "home_page___homeBanner___community_page___updatedAt"
  | "home_page___homeBanner___community_page___children"
  | "home_page___homeBanner___spaceId"
  | "home_page___homeBanner___createdAt"
  | "home_page___homeBanner___updatedAt"
  | "home_page___homeBanner___sys___type"
  | "home_page___homeBanner___sys___revision"
  | "home_page___homeBanner___services_page"
  | "home_page___homeBanner___services_page___contentful_id"
  | "home_page___homeBanner___services_page___id"
  | "home_page___homeBanner___services_page___node_locale"
  | "home_page___homeBanner___services_page___slug"
  | "home_page___homeBanner___services_page___serviceCards"
  | "home_page___homeBanner___services_page___spaceId"
  | "home_page___homeBanner___services_page___createdAt"
  | "home_page___homeBanner___services_page___updatedAt"
  | "home_page___homeBanner___services_page___children"
  | "home_page___homeBanner___home_page"
  | "home_page___homeBanner___home_page___contentful_id"
  | "home_page___homeBanner___home_page___id"
  | "home_page___homeBanner___home_page___node_locale"
  | "home_page___homeBanner___home_page___slug"
  | "home_page___homeBanner___home_page___testimonialSlides"
  | "home_page___homeBanner___home_page___spaceId"
  | "home_page___homeBanner___home_page___createdAt"
  | "home_page___homeBanner___home_page___updatedAt"
  | "home_page___homeBanner___home_page___children"
  | "home_page___homeBanner___contact_page"
  | "home_page___homeBanner___contact_page___contentful_id"
  | "home_page___homeBanner___contact_page___id"
  | "home_page___homeBanner___contact_page___node_locale"
  | "home_page___homeBanner___contact_page___slug"
  | "home_page___homeBanner___contact_page___spaceId"
  | "home_page___homeBanner___contact_page___createdAt"
  | "home_page___homeBanner___contact_page___updatedAt"
  | "home_page___homeBanner___contact_page___children"
  | "home_page___homeBanner___about_us_page"
  | "home_page___homeBanner___about_us_page___contentful_id"
  | "home_page___homeBanner___about_us_page___id"
  | "home_page___homeBanner___about_us_page___node_locale"
  | "home_page___homeBanner___about_us_page___slug"
  | "home_page___homeBanner___about_us_page___ourTeam"
  | "home_page___homeBanner___about_us_page___spaceId"
  | "home_page___homeBanner___about_us_page___createdAt"
  | "home_page___homeBanner___about_us_page___updatedAt"
  | "home_page___homeBanner___about_us_page___children"
  | "home_page___homeBanner___parent___id"
  | "home_page___homeBanner___parent___children"
  | "home_page___homeBanner___children"
  | "home_page___homeBanner___children___id"
  | "home_page___homeBanner___children___children"
  | "home_page___homeBanner___internal___content"
  | "home_page___homeBanner___internal___contentDigest"
  | "home_page___homeBanner___internal___description"
  | "home_page___homeBanner___internal___fieldOwners"
  | "home_page___homeBanner___internal___ignoreType"
  | "home_page___homeBanner___internal___mediaType"
  | "home_page___homeBanner___internal___owner"
  | "home_page___homeBanner___internal___type"
  | "home_page___belowHero___contentful_id"
  | "home_page___belowHero___id"
  | "home_page___belowHero___node_locale"
  | "home_page___belowHero___image___contentful_id"
  | "home_page___belowHero___image___id"
  | "home_page___belowHero___image___spaceId"
  | "home_page___belowHero___image___createdAt"
  | "home_page___belowHero___image___updatedAt"
  | "home_page___belowHero___image___title"
  | "home_page___belowHero___image___description"
  | "home_page___belowHero___image___node_locale"
  | "home_page___belowHero___image___gatsbyImageData"
  | "home_page___belowHero___image___children"
  | "home_page___belowHero___about_us_page"
  | "home_page___belowHero___about_us_page___contentful_id"
  | "home_page___belowHero___about_us_page___id"
  | "home_page___belowHero___about_us_page___node_locale"
  | "home_page___belowHero___about_us_page___slug"
  | "home_page___belowHero___about_us_page___ourTeam"
  | "home_page___belowHero___about_us_page___spaceId"
  | "home_page___belowHero___about_us_page___createdAt"
  | "home_page___belowHero___about_us_page___updatedAt"
  | "home_page___belowHero___about_us_page___children"
  | "home_page___belowHero___text___id"
  | "home_page___belowHero___text___children"
  | "home_page___belowHero___text___text"
  | "home_page___belowHero___spaceId"
  | "home_page___belowHero___createdAt"
  | "home_page___belowHero___updatedAt"
  | "home_page___belowHero___sys___type"
  | "home_page___belowHero___sys___revision"
  | "home_page___belowHero___home_page"
  | "home_page___belowHero___home_page___contentful_id"
  | "home_page___belowHero___home_page___id"
  | "home_page___belowHero___home_page___node_locale"
  | "home_page___belowHero___home_page___slug"
  | "home_page___belowHero___home_page___testimonialSlides"
  | "home_page___belowHero___home_page___spaceId"
  | "home_page___belowHero___home_page___createdAt"
  | "home_page___belowHero___home_page___updatedAt"
  | "home_page___belowHero___home_page___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___parent___id"
  | "home_page___belowHero___parent___children"
  | "home_page___belowHero___children"
  | "home_page___belowHero___children___id"
  | "home_page___belowHero___children___children"
  | "home_page___belowHero___internal___content"
  | "home_page___belowHero___internal___contentDigest"
  | "home_page___belowHero___internal___description"
  | "home_page___belowHero___internal___fieldOwners"
  | "home_page___belowHero___internal___ignoreType"
  | "home_page___belowHero___internal___mediaType"
  | "home_page___belowHero___internal___owner"
  | "home_page___belowHero___internal___type"
  | "home_page___ctaStack___contentful_id"
  | "home_page___ctaStack___id"
  | "home_page___ctaStack___node_locale"
  | "home_page___ctaStack___cards"
  | "home_page___ctaStack___cards___contentful_id"
  | "home_page___ctaStack___cards___id"
  | "home_page___ctaStack___cards___node_locale"
  | "home_page___ctaStack___cards___title"
  | "home_page___ctaStack___cards___internalLink"
  | "home_page___ctaStack___cards___stack"
  | "home_page___ctaStack___cards___spaceId"
  | "home_page___ctaStack___cards___createdAt"
  | "home_page___ctaStack___cards___updatedAt"
  | "home_page___ctaStack___cards___services_page"
  | "home_page___ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___ctaStack___cards___children"
  | "home_page___ctaStack___home_page"
  | "home_page___ctaStack___home_page___contentful_id"
  | "home_page___ctaStack___home_page___id"
  | "home_page___ctaStack___home_page___node_locale"
  | "home_page___ctaStack___home_page___slug"
  | "home_page___ctaStack___home_page___testimonialSlides"
  | "home_page___ctaStack___home_page___spaceId"
  | "home_page___ctaStack___home_page___createdAt"
  | "home_page___ctaStack___home_page___updatedAt"
  | "home_page___ctaStack___home_page___children"
  | "home_page___ctaStack___text___id"
  | "home_page___ctaStack___text___children"
  | "home_page___ctaStack___text___text"
  | "home_page___ctaStack___text2___id"
  | "home_page___ctaStack___text2___children"
  | "home_page___ctaStack___text2___text2"
  | "home_page___ctaStack___spaceId"
  | "home_page___ctaStack___createdAt"
  | "home_page___ctaStack___updatedAt"
  | "home_page___ctaStack___sys___type"
  | "home_page___ctaStack___sys___revision"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___childContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___parent___id"
  | "home_page___ctaStack___parent___children"
  | "home_page___ctaStack___children"
  | "home_page___ctaStack___children___id"
  | "home_page___ctaStack___children___children"
  | "home_page___ctaStack___internal___content"
  | "home_page___ctaStack___internal___contentDigest"
  | "home_page___ctaStack___internal___description"
  | "home_page___ctaStack___internal___fieldOwners"
  | "home_page___ctaStack___internal___ignoreType"
  | "home_page___ctaStack___internal___mediaType"
  | "home_page___ctaStack___internal___owner"
  | "home_page___ctaStack___internal___type"
  | "home_page___howWeHelpStack___contentful_id"
  | "home_page___howWeHelpStack___id"
  | "home_page___howWeHelpStack___node_locale"
  | "home_page___howWeHelpStack___cards"
  | "home_page___howWeHelpStack___cards___contentful_id"
  | "home_page___howWeHelpStack___cards___id"
  | "home_page___howWeHelpStack___cards___node_locale"
  | "home_page___howWeHelpStack___cards___title"
  | "home_page___howWeHelpStack___cards___internalLink"
  | "home_page___howWeHelpStack___cards___stack"
  | "home_page___howWeHelpStack___cards___spaceId"
  | "home_page___howWeHelpStack___cards___createdAt"
  | "home_page___howWeHelpStack___cards___updatedAt"
  | "home_page___howWeHelpStack___cards___services_page"
  | "home_page___howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___howWeHelpStack___cards___children"
  | "home_page___howWeHelpStack___home_page"
  | "home_page___howWeHelpStack___home_page___contentful_id"
  | "home_page___howWeHelpStack___home_page___id"
  | "home_page___howWeHelpStack___home_page___node_locale"
  | "home_page___howWeHelpStack___home_page___slug"
  | "home_page___howWeHelpStack___home_page___testimonialSlides"
  | "home_page___howWeHelpStack___home_page___spaceId"
  | "home_page___howWeHelpStack___home_page___createdAt"
  | "home_page___howWeHelpStack___home_page___updatedAt"
  | "home_page___howWeHelpStack___home_page___children"
  | "home_page___howWeHelpStack___text___id"
  | "home_page___howWeHelpStack___text___children"
  | "home_page___howWeHelpStack___text___text"
  | "home_page___howWeHelpStack___text2___id"
  | "home_page___howWeHelpStack___text2___children"
  | "home_page___howWeHelpStack___text2___text2"
  | "home_page___howWeHelpStack___spaceId"
  | "home_page___howWeHelpStack___createdAt"
  | "home_page___howWeHelpStack___updatedAt"
  | "home_page___howWeHelpStack___sys___type"
  | "home_page___howWeHelpStack___sys___revision"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___parent___id"
  | "home_page___howWeHelpStack___parent___children"
  | "home_page___howWeHelpStack___children"
  | "home_page___howWeHelpStack___children___id"
  | "home_page___howWeHelpStack___children___children"
  | "home_page___howWeHelpStack___internal___content"
  | "home_page___howWeHelpStack___internal___contentDigest"
  | "home_page___howWeHelpStack___internal___description"
  | "home_page___howWeHelpStack___internal___fieldOwners"
  | "home_page___howWeHelpStack___internal___ignoreType"
  | "home_page___howWeHelpStack___internal___mediaType"
  | "home_page___howWeHelpStack___internal___owner"
  | "home_page___howWeHelpStack___internal___type"
  | "home_page___testimonialSlides"
  | "home_page___testimonialSlides___contentful_id"
  | "home_page___testimonialSlides___id"
  | "home_page___testimonialSlides___node_locale"
  | "home_page___testimonialSlides___name"
  | "home_page___testimonialSlides___jobTitle"
  | "home_page___testimonialSlides___companyName"
  | "home_page___testimonialSlides___image___contentful_id"
  | "home_page___testimonialSlides___image___id"
  | "home_page___testimonialSlides___image___spaceId"
  | "home_page___testimonialSlides___image___createdAt"
  | "home_page___testimonialSlides___image___updatedAt"
  | "home_page___testimonialSlides___image___title"
  | "home_page___testimonialSlides___image___description"
  | "home_page___testimonialSlides___image___node_locale"
  | "home_page___testimonialSlides___image___gatsbyImageData"
  | "home_page___testimonialSlides___image___children"
  | "home_page___testimonialSlides___home_page"
  | "home_page___testimonialSlides___home_page___contentful_id"
  | "home_page___testimonialSlides___home_page___id"
  | "home_page___testimonialSlides___home_page___node_locale"
  | "home_page___testimonialSlides___home_page___slug"
  | "home_page___testimonialSlides___home_page___testimonialSlides"
  | "home_page___testimonialSlides___home_page___spaceId"
  | "home_page___testimonialSlides___home_page___createdAt"
  | "home_page___testimonialSlides___home_page___updatedAt"
  | "home_page___testimonialSlides___home_page___children"
  | "home_page___testimonialSlides___testimony___id"
  | "home_page___testimonialSlides___testimony___children"
  | "home_page___testimonialSlides___testimony___testimony"
  | "home_page___testimonialSlides___spaceId"
  | "home_page___testimonialSlides___createdAt"
  | "home_page___testimonialSlides___updatedAt"
  | "home_page___testimonialSlides___sys___type"
  | "home_page___testimonialSlides___sys___revision"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___parent___id"
  | "home_page___testimonialSlides___parent___children"
  | "home_page___testimonialSlides___children"
  | "home_page___testimonialSlides___children___id"
  | "home_page___testimonialSlides___children___children"
  | "home_page___testimonialSlides___internal___content"
  | "home_page___testimonialSlides___internal___contentDigest"
  | "home_page___testimonialSlides___internal___description"
  | "home_page___testimonialSlides___internal___fieldOwners"
  | "home_page___testimonialSlides___internal___ignoreType"
  | "home_page___testimonialSlides___internal___mediaType"
  | "home_page___testimonialSlides___internal___owner"
  | "home_page___testimonialSlides___internal___type"
  | "home_page___carouselImages___contentful_id"
  | "home_page___carouselImages___id"
  | "home_page___carouselImages___node_locale"
  | "home_page___carouselImages___images"
  | "home_page___carouselImages___images___contentful_id"
  | "home_page___carouselImages___images___id"
  | "home_page___carouselImages___images___spaceId"
  | "home_page___carouselImages___images___createdAt"
  | "home_page___carouselImages___images___updatedAt"
  | "home_page___carouselImages___images___title"
  | "home_page___carouselImages___images___description"
  | "home_page___carouselImages___images___node_locale"
  | "home_page___carouselImages___images___gatsbyImageData"
  | "home_page___carouselImages___images___children"
  | "home_page___carouselImages___home_page"
  | "home_page___carouselImages___home_page___contentful_id"
  | "home_page___carouselImages___home_page___id"
  | "home_page___carouselImages___home_page___node_locale"
  | "home_page___carouselImages___home_page___slug"
  | "home_page___carouselImages___home_page___testimonialSlides"
  | "home_page___carouselImages___home_page___spaceId"
  | "home_page___carouselImages___home_page___createdAt"
  | "home_page___carouselImages___home_page___updatedAt"
  | "home_page___carouselImages___home_page___children"
  | "home_page___carouselImages___about_us_page"
  | "home_page___carouselImages___about_us_page___contentful_id"
  | "home_page___carouselImages___about_us_page___id"
  | "home_page___carouselImages___about_us_page___node_locale"
  | "home_page___carouselImages___about_us_page___slug"
  | "home_page___carouselImages___about_us_page___ourTeam"
  | "home_page___carouselImages___about_us_page___spaceId"
  | "home_page___carouselImages___about_us_page___createdAt"
  | "home_page___carouselImages___about_us_page___updatedAt"
  | "home_page___carouselImages___about_us_page___children"
  | "home_page___carouselImages___spaceId"
  | "home_page___carouselImages___createdAt"
  | "home_page___carouselImages___updatedAt"
  | "home_page___carouselImages___sys___type"
  | "home_page___carouselImages___sys___revision"
  | "home_page___carouselImages___parent___id"
  | "home_page___carouselImages___parent___children"
  | "home_page___carouselImages___children"
  | "home_page___carouselImages___children___id"
  | "home_page___carouselImages___children___children"
  | "home_page___carouselImages___internal___content"
  | "home_page___carouselImages___internal___contentDigest"
  | "home_page___carouselImages___internal___description"
  | "home_page___carouselImages___internal___fieldOwners"
  | "home_page___carouselImages___internal___ignoreType"
  | "home_page___carouselImages___internal___mediaType"
  | "home_page___carouselImages___internal___owner"
  | "home_page___carouselImages___internal___type"
  | "home_page___spaceId"
  | "home_page___createdAt"
  | "home_page___updatedAt"
  | "home_page___sys___type"
  | "home_page___sys___revision"
  | "home_page___parent___id"
  | "home_page___parent___parent___id"
  | "home_page___parent___parent___children"
  | "home_page___parent___children"
  | "home_page___parent___children___id"
  | "home_page___parent___children___children"
  | "home_page___parent___internal___content"
  | "home_page___parent___internal___contentDigest"
  | "home_page___parent___internal___description"
  | "home_page___parent___internal___fieldOwners"
  | "home_page___parent___internal___ignoreType"
  | "home_page___parent___internal___mediaType"
  | "home_page___parent___internal___owner"
  | "home_page___parent___internal___type"
  | "home_page___children"
  | "home_page___children___id"
  | "home_page___children___parent___id"
  | "home_page___children___parent___children"
  | "home_page___children___children"
  | "home_page___children___children___id"
  | "home_page___children___children___children"
  | "home_page___children___internal___content"
  | "home_page___children___internal___contentDigest"
  | "home_page___children___internal___description"
  | "home_page___children___internal___fieldOwners"
  | "home_page___children___internal___ignoreType"
  | "home_page___children___internal___mediaType"
  | "home_page___children___internal___owner"
  | "home_page___children___internal___type"
  | "home_page___internal___content"
  | "home_page___internal___contentDigest"
  | "home_page___internal___description"
  | "home_page___internal___fieldOwners"
  | "home_page___internal___ignoreType"
  | "home_page___internal___mediaType"
  | "home_page___internal___owner"
  | "home_page___internal___type"
  | "childrenContentfulTextAndImageTextTextNode"
  | "childrenContentfulTextAndImageTextTextNode___id"
  | "childrenContentfulTextAndImageTextTextNode___parent___id"
  | "childrenContentfulTextAndImageTextTextNode___parent___parent___id"
  | "childrenContentfulTextAndImageTextTextNode___parent___parent___children"
  | "childrenContentfulTextAndImageTextTextNode___parent___children"
  | "childrenContentfulTextAndImageTextTextNode___parent___children___id"
  | "childrenContentfulTextAndImageTextTextNode___parent___children___children"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___content"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___contentDigest"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___description"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___fieldOwners"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___ignoreType"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___mediaType"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___owner"
  | "childrenContentfulTextAndImageTextTextNode___parent___internal___type"
  | "childrenContentfulTextAndImageTextTextNode___children"
  | "childrenContentfulTextAndImageTextTextNode___children___id"
  | "childrenContentfulTextAndImageTextTextNode___children___parent___id"
  | "childrenContentfulTextAndImageTextTextNode___children___parent___children"
  | "childrenContentfulTextAndImageTextTextNode___children___children"
  | "childrenContentfulTextAndImageTextTextNode___children___children___id"
  | "childrenContentfulTextAndImageTextTextNode___children___children___children"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___content"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___contentDigest"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___description"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___fieldOwners"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___ignoreType"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___mediaType"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___owner"
  | "childrenContentfulTextAndImageTextTextNode___children___internal___type"
  | "childrenContentfulTextAndImageTextTextNode___internal___content"
  | "childrenContentfulTextAndImageTextTextNode___internal___contentDigest"
  | "childrenContentfulTextAndImageTextTextNode___internal___description"
  | "childrenContentfulTextAndImageTextTextNode___internal___fieldOwners"
  | "childrenContentfulTextAndImageTextTextNode___internal___ignoreType"
  | "childrenContentfulTextAndImageTextTextNode___internal___mediaType"
  | "childrenContentfulTextAndImageTextTextNode___internal___owner"
  | "childrenContentfulTextAndImageTextTextNode___internal___type"
  | "childrenContentfulTextAndImageTextTextNode___text"
  | "childrenContentfulTextAndImageTextTextNode___sys___type"
  | "childContentfulTextAndImageTextTextNode___id"
  | "childContentfulTextAndImageTextTextNode___parent___id"
  | "childContentfulTextAndImageTextTextNode___parent___parent___id"
  | "childContentfulTextAndImageTextTextNode___parent___parent___children"
  | "childContentfulTextAndImageTextTextNode___parent___children"
  | "childContentfulTextAndImageTextTextNode___parent___children___id"
  | "childContentfulTextAndImageTextTextNode___parent___children___children"
  | "childContentfulTextAndImageTextTextNode___parent___internal___content"
  | "childContentfulTextAndImageTextTextNode___parent___internal___contentDigest"
  | "childContentfulTextAndImageTextTextNode___parent___internal___description"
  | "childContentfulTextAndImageTextTextNode___parent___internal___fieldOwners"
  | "childContentfulTextAndImageTextTextNode___parent___internal___ignoreType"
  | "childContentfulTextAndImageTextTextNode___parent___internal___mediaType"
  | "childContentfulTextAndImageTextTextNode___parent___internal___owner"
  | "childContentfulTextAndImageTextTextNode___parent___internal___type"
  | "childContentfulTextAndImageTextTextNode___children"
  | "childContentfulTextAndImageTextTextNode___children___id"
  | "childContentfulTextAndImageTextTextNode___children___parent___id"
  | "childContentfulTextAndImageTextTextNode___children___parent___children"
  | "childContentfulTextAndImageTextTextNode___children___children"
  | "childContentfulTextAndImageTextTextNode___children___children___id"
  | "childContentfulTextAndImageTextTextNode___children___children___children"
  | "childContentfulTextAndImageTextTextNode___children___internal___content"
  | "childContentfulTextAndImageTextTextNode___children___internal___contentDigest"
  | "childContentfulTextAndImageTextTextNode___children___internal___description"
  | "childContentfulTextAndImageTextTextNode___children___internal___fieldOwners"
  | "childContentfulTextAndImageTextTextNode___children___internal___ignoreType"
  | "childContentfulTextAndImageTextTextNode___children___internal___mediaType"
  | "childContentfulTextAndImageTextTextNode___children___internal___owner"
  | "childContentfulTextAndImageTextTextNode___children___internal___type"
  | "childContentfulTextAndImageTextTextNode___internal___content"
  | "childContentfulTextAndImageTextTextNode___internal___contentDigest"
  | "childContentfulTextAndImageTextTextNode___internal___description"
  | "childContentfulTextAndImageTextTextNode___internal___fieldOwners"
  | "childContentfulTextAndImageTextTextNode___internal___ignoreType"
  | "childContentfulTextAndImageTextTextNode___internal___mediaType"
  | "childContentfulTextAndImageTextTextNode___internal___owner"
  | "childContentfulTextAndImageTextTextNode___internal___type"
  | "childContentfulTextAndImageTextTextNode___text"
  | "childContentfulTextAndImageTextTextNode___sys___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulTextAndImageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTextAndImageEdge>
  nodes: Array<ContentfulTextAndImage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulTextAndImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTextAndImageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulGeneralCardConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulGeneralCardEdge>
  nodes: Array<ContentfulGeneralCard>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulGeneralCardGroupConnection>
}

export type ContentfulGeneralCardConnectionDistinctArgs = {
  field: ContentfulGeneralCardFieldsEnum
}

export type ContentfulGeneralCardConnectionMaxArgs = {
  field: ContentfulGeneralCardFieldsEnum
}

export type ContentfulGeneralCardConnectionMinArgs = {
  field: ContentfulGeneralCardFieldsEnum
}

export type ContentfulGeneralCardConnectionSumArgs = {
  field: ContentfulGeneralCardFieldsEnum
}

export type ContentfulGeneralCardConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulGeneralCardFieldsEnum
}

export type ContentfulGeneralCardEdge = {
  next?: Maybe<ContentfulGeneralCard>
  node: ContentfulGeneralCard
  previous?: Maybe<ContentfulGeneralCard>
}

export type ContentfulGeneralCardFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "title"
  | "internalLink"
  | "icon___contentful_id"
  | "icon___id"
  | "icon___spaceId"
  | "icon___createdAt"
  | "icon___updatedAt"
  | "icon___file___url"
  | "icon___file___details___size"
  | "icon___file___fileName"
  | "icon___file___contentType"
  | "icon___title"
  | "icon___description"
  | "icon___node_locale"
  | "icon___sys___type"
  | "icon___sys___revision"
  | "icon___fixed___base64"
  | "icon___fixed___tracedSVG"
  | "icon___fixed___aspectRatio"
  | "icon___fixed___width"
  | "icon___fixed___height"
  | "icon___fixed___src"
  | "icon___fixed___srcSet"
  | "icon___fixed___srcWebp"
  | "icon___fixed___srcSetWebp"
  | "icon___fluid___base64"
  | "icon___fluid___tracedSVG"
  | "icon___fluid___aspectRatio"
  | "icon___fluid___src"
  | "icon___fluid___srcSet"
  | "icon___fluid___srcWebp"
  | "icon___fluid___srcSetWebp"
  | "icon___fluid___sizes"
  | "icon___gatsbyImageData"
  | "icon___resize___base64"
  | "icon___resize___tracedSVG"
  | "icon___resize___src"
  | "icon___resize___width"
  | "icon___resize___height"
  | "icon___resize___aspectRatio"
  | "icon___parent___id"
  | "icon___parent___parent___id"
  | "icon___parent___parent___children"
  | "icon___parent___children"
  | "icon___parent___children___id"
  | "icon___parent___children___children"
  | "icon___parent___internal___content"
  | "icon___parent___internal___contentDigest"
  | "icon___parent___internal___description"
  | "icon___parent___internal___fieldOwners"
  | "icon___parent___internal___ignoreType"
  | "icon___parent___internal___mediaType"
  | "icon___parent___internal___owner"
  | "icon___parent___internal___type"
  | "icon___children"
  | "icon___children___id"
  | "icon___children___parent___id"
  | "icon___children___parent___children"
  | "icon___children___children"
  | "icon___children___children___id"
  | "icon___children___children___children"
  | "icon___children___internal___content"
  | "icon___children___internal___contentDigest"
  | "icon___children___internal___description"
  | "icon___children___internal___fieldOwners"
  | "icon___children___internal___ignoreType"
  | "icon___children___internal___mediaType"
  | "icon___children___internal___owner"
  | "icon___children___internal___type"
  | "icon___internal___content"
  | "icon___internal___contentDigest"
  | "icon___internal___description"
  | "icon___internal___fieldOwners"
  | "icon___internal___ignoreType"
  | "icon___internal___mediaType"
  | "icon___internal___owner"
  | "icon___internal___type"
  | "stack"
  | "stack___contentful_id"
  | "stack___id"
  | "stack___node_locale"
  | "stack___cards"
  | "stack___cards___contentful_id"
  | "stack___cards___id"
  | "stack___cards___node_locale"
  | "stack___cards___title"
  | "stack___cards___internalLink"
  | "stack___cards___icon___contentful_id"
  | "stack___cards___icon___id"
  | "stack___cards___icon___spaceId"
  | "stack___cards___icon___createdAt"
  | "stack___cards___icon___updatedAt"
  | "stack___cards___icon___title"
  | "stack___cards___icon___description"
  | "stack___cards___icon___node_locale"
  | "stack___cards___icon___gatsbyImageData"
  | "stack___cards___icon___children"
  | "stack___cards___stack"
  | "stack___cards___stack___contentful_id"
  | "stack___cards___stack___id"
  | "stack___cards___stack___node_locale"
  | "stack___cards___stack___cards"
  | "stack___cards___stack___home_page"
  | "stack___cards___stack___spaceId"
  | "stack___cards___stack___createdAt"
  | "stack___cards___stack___updatedAt"
  | "stack___cards___stack___childrenContentfulStackTextTextNode"
  | "stack___cards___stack___childrenContentfulStackText2TextNode"
  | "stack___cards___stack___children"
  | "stack___cards___description___id"
  | "stack___cards___description___children"
  | "stack___cards___description___description"
  | "stack___cards___spaceId"
  | "stack___cards___createdAt"
  | "stack___cards___updatedAt"
  | "stack___cards___sys___type"
  | "stack___cards___sys___revision"
  | "stack___cards___services_page"
  | "stack___cards___services_page___contentful_id"
  | "stack___cards___services_page___id"
  | "stack___cards___services_page___node_locale"
  | "stack___cards___services_page___slug"
  | "stack___cards___services_page___serviceCards"
  | "stack___cards___services_page___spaceId"
  | "stack___cards___services_page___createdAt"
  | "stack___cards___services_page___updatedAt"
  | "stack___cards___services_page___children"
  | "stack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "stack___cards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "stack___cards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "stack___cards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "stack___cards___childContentfulGeneralCardDescriptionTextNode___id"
  | "stack___cards___childContentfulGeneralCardDescriptionTextNode___children"
  | "stack___cards___childContentfulGeneralCardDescriptionTextNode___description"
  | "stack___cards___parent___id"
  | "stack___cards___parent___children"
  | "stack___cards___children"
  | "stack___cards___children___id"
  | "stack___cards___children___children"
  | "stack___cards___internal___content"
  | "stack___cards___internal___contentDigest"
  | "stack___cards___internal___description"
  | "stack___cards___internal___fieldOwners"
  | "stack___cards___internal___ignoreType"
  | "stack___cards___internal___mediaType"
  | "stack___cards___internal___owner"
  | "stack___cards___internal___type"
  | "stack___home_page"
  | "stack___home_page___contentful_id"
  | "stack___home_page___id"
  | "stack___home_page___node_locale"
  | "stack___home_page___slug"
  | "stack___home_page___homeBanner___contentful_id"
  | "stack___home_page___homeBanner___id"
  | "stack___home_page___homeBanner___node_locale"
  | "stack___home_page___homeBanner___heading"
  | "stack___home_page___homeBanner___subHeader"
  | "stack___home_page___homeBanner___community_page"
  | "stack___home_page___homeBanner___spaceId"
  | "stack___home_page___homeBanner___createdAt"
  | "stack___home_page___homeBanner___updatedAt"
  | "stack___home_page___homeBanner___services_page"
  | "stack___home_page___homeBanner___home_page"
  | "stack___home_page___homeBanner___contact_page"
  | "stack___home_page___homeBanner___about_us_page"
  | "stack___home_page___homeBanner___children"
  | "stack___home_page___belowHero___contentful_id"
  | "stack___home_page___belowHero___id"
  | "stack___home_page___belowHero___node_locale"
  | "stack___home_page___belowHero___about_us_page"
  | "stack___home_page___belowHero___spaceId"
  | "stack___home_page___belowHero___createdAt"
  | "stack___home_page___belowHero___updatedAt"
  | "stack___home_page___belowHero___home_page"
  | "stack___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "stack___home_page___belowHero___children"
  | "stack___home_page___ctaStack___contentful_id"
  | "stack___home_page___ctaStack___id"
  | "stack___home_page___ctaStack___node_locale"
  | "stack___home_page___ctaStack___cards"
  | "stack___home_page___ctaStack___home_page"
  | "stack___home_page___ctaStack___spaceId"
  | "stack___home_page___ctaStack___createdAt"
  | "stack___home_page___ctaStack___updatedAt"
  | "stack___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "stack___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "stack___home_page___ctaStack___children"
  | "stack___home_page___howWeHelpStack___contentful_id"
  | "stack___home_page___howWeHelpStack___id"
  | "stack___home_page___howWeHelpStack___node_locale"
  | "stack___home_page___howWeHelpStack___cards"
  | "stack___home_page___howWeHelpStack___home_page"
  | "stack___home_page___howWeHelpStack___spaceId"
  | "stack___home_page___howWeHelpStack___createdAt"
  | "stack___home_page___howWeHelpStack___updatedAt"
  | "stack___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "stack___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "stack___home_page___howWeHelpStack___children"
  | "stack___home_page___testimonialSlides"
  | "stack___home_page___testimonialSlides___contentful_id"
  | "stack___home_page___testimonialSlides___id"
  | "stack___home_page___testimonialSlides___node_locale"
  | "stack___home_page___testimonialSlides___name"
  | "stack___home_page___testimonialSlides___jobTitle"
  | "stack___home_page___testimonialSlides___companyName"
  | "stack___home_page___testimonialSlides___home_page"
  | "stack___home_page___testimonialSlides___spaceId"
  | "stack___home_page___testimonialSlides___createdAt"
  | "stack___home_page___testimonialSlides___updatedAt"
  | "stack___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "stack___home_page___testimonialSlides___children"
  | "stack___home_page___carouselImages___contentful_id"
  | "stack___home_page___carouselImages___id"
  | "stack___home_page___carouselImages___node_locale"
  | "stack___home_page___carouselImages___images"
  | "stack___home_page___carouselImages___home_page"
  | "stack___home_page___carouselImages___about_us_page"
  | "stack___home_page___carouselImages___spaceId"
  | "stack___home_page___carouselImages___createdAt"
  | "stack___home_page___carouselImages___updatedAt"
  | "stack___home_page___carouselImages___children"
  | "stack___home_page___spaceId"
  | "stack___home_page___createdAt"
  | "stack___home_page___updatedAt"
  | "stack___home_page___sys___type"
  | "stack___home_page___sys___revision"
  | "stack___home_page___parent___id"
  | "stack___home_page___parent___children"
  | "stack___home_page___children"
  | "stack___home_page___children___id"
  | "stack___home_page___children___children"
  | "stack___home_page___internal___content"
  | "stack___home_page___internal___contentDigest"
  | "stack___home_page___internal___description"
  | "stack___home_page___internal___fieldOwners"
  | "stack___home_page___internal___ignoreType"
  | "stack___home_page___internal___mediaType"
  | "stack___home_page___internal___owner"
  | "stack___home_page___internal___type"
  | "stack___text___id"
  | "stack___text___parent___id"
  | "stack___text___parent___children"
  | "stack___text___children"
  | "stack___text___children___id"
  | "stack___text___children___children"
  | "stack___text___internal___content"
  | "stack___text___internal___contentDigest"
  | "stack___text___internal___description"
  | "stack___text___internal___fieldOwners"
  | "stack___text___internal___ignoreType"
  | "stack___text___internal___mediaType"
  | "stack___text___internal___owner"
  | "stack___text___internal___type"
  | "stack___text___text"
  | "stack___text___sys___type"
  | "stack___text2___id"
  | "stack___text2___parent___id"
  | "stack___text2___parent___children"
  | "stack___text2___children"
  | "stack___text2___children___id"
  | "stack___text2___children___children"
  | "stack___text2___internal___content"
  | "stack___text2___internal___contentDigest"
  | "stack___text2___internal___description"
  | "stack___text2___internal___fieldOwners"
  | "stack___text2___internal___ignoreType"
  | "stack___text2___internal___mediaType"
  | "stack___text2___internal___owner"
  | "stack___text2___internal___type"
  | "stack___text2___text2"
  | "stack___text2___sys___type"
  | "stack___spaceId"
  | "stack___createdAt"
  | "stack___updatedAt"
  | "stack___sys___type"
  | "stack___sys___revision"
  | "stack___childrenContentfulStackTextTextNode"
  | "stack___childrenContentfulStackTextTextNode___id"
  | "stack___childrenContentfulStackTextTextNode___parent___id"
  | "stack___childrenContentfulStackTextTextNode___parent___children"
  | "stack___childrenContentfulStackTextTextNode___children"
  | "stack___childrenContentfulStackTextTextNode___children___id"
  | "stack___childrenContentfulStackTextTextNode___children___children"
  | "stack___childrenContentfulStackTextTextNode___internal___content"
  | "stack___childrenContentfulStackTextTextNode___internal___contentDigest"
  | "stack___childrenContentfulStackTextTextNode___internal___description"
  | "stack___childrenContentfulStackTextTextNode___internal___fieldOwners"
  | "stack___childrenContentfulStackTextTextNode___internal___ignoreType"
  | "stack___childrenContentfulStackTextTextNode___internal___mediaType"
  | "stack___childrenContentfulStackTextTextNode___internal___owner"
  | "stack___childrenContentfulStackTextTextNode___internal___type"
  | "stack___childrenContentfulStackTextTextNode___text"
  | "stack___childrenContentfulStackTextTextNode___sys___type"
  | "stack___childContentfulStackTextTextNode___id"
  | "stack___childContentfulStackTextTextNode___parent___id"
  | "stack___childContentfulStackTextTextNode___parent___children"
  | "stack___childContentfulStackTextTextNode___children"
  | "stack___childContentfulStackTextTextNode___children___id"
  | "stack___childContentfulStackTextTextNode___children___children"
  | "stack___childContentfulStackTextTextNode___internal___content"
  | "stack___childContentfulStackTextTextNode___internal___contentDigest"
  | "stack___childContentfulStackTextTextNode___internal___description"
  | "stack___childContentfulStackTextTextNode___internal___fieldOwners"
  | "stack___childContentfulStackTextTextNode___internal___ignoreType"
  | "stack___childContentfulStackTextTextNode___internal___mediaType"
  | "stack___childContentfulStackTextTextNode___internal___owner"
  | "stack___childContentfulStackTextTextNode___internal___type"
  | "stack___childContentfulStackTextTextNode___text"
  | "stack___childContentfulStackTextTextNode___sys___type"
  | "stack___childrenContentfulStackText2TextNode"
  | "stack___childrenContentfulStackText2TextNode___id"
  | "stack___childrenContentfulStackText2TextNode___parent___id"
  | "stack___childrenContentfulStackText2TextNode___parent___children"
  | "stack___childrenContentfulStackText2TextNode___children"
  | "stack___childrenContentfulStackText2TextNode___children___id"
  | "stack___childrenContentfulStackText2TextNode___children___children"
  | "stack___childrenContentfulStackText2TextNode___internal___content"
  | "stack___childrenContentfulStackText2TextNode___internal___contentDigest"
  | "stack___childrenContentfulStackText2TextNode___internal___description"
  | "stack___childrenContentfulStackText2TextNode___internal___fieldOwners"
  | "stack___childrenContentfulStackText2TextNode___internal___ignoreType"
  | "stack___childrenContentfulStackText2TextNode___internal___mediaType"
  | "stack___childrenContentfulStackText2TextNode___internal___owner"
  | "stack___childrenContentfulStackText2TextNode___internal___type"
  | "stack___childrenContentfulStackText2TextNode___text2"
  | "stack___childrenContentfulStackText2TextNode___sys___type"
  | "stack___childContentfulStackText2TextNode___id"
  | "stack___childContentfulStackText2TextNode___parent___id"
  | "stack___childContentfulStackText2TextNode___parent___children"
  | "stack___childContentfulStackText2TextNode___children"
  | "stack___childContentfulStackText2TextNode___children___id"
  | "stack___childContentfulStackText2TextNode___children___children"
  | "stack___childContentfulStackText2TextNode___internal___content"
  | "stack___childContentfulStackText2TextNode___internal___contentDigest"
  | "stack___childContentfulStackText2TextNode___internal___description"
  | "stack___childContentfulStackText2TextNode___internal___fieldOwners"
  | "stack___childContentfulStackText2TextNode___internal___ignoreType"
  | "stack___childContentfulStackText2TextNode___internal___mediaType"
  | "stack___childContentfulStackText2TextNode___internal___owner"
  | "stack___childContentfulStackText2TextNode___internal___type"
  | "stack___childContentfulStackText2TextNode___text2"
  | "stack___childContentfulStackText2TextNode___sys___type"
  | "stack___parent___id"
  | "stack___parent___parent___id"
  | "stack___parent___parent___children"
  | "stack___parent___children"
  | "stack___parent___children___id"
  | "stack___parent___children___children"
  | "stack___parent___internal___content"
  | "stack___parent___internal___contentDigest"
  | "stack___parent___internal___description"
  | "stack___parent___internal___fieldOwners"
  | "stack___parent___internal___ignoreType"
  | "stack___parent___internal___mediaType"
  | "stack___parent___internal___owner"
  | "stack___parent___internal___type"
  | "stack___children"
  | "stack___children___id"
  | "stack___children___parent___id"
  | "stack___children___parent___children"
  | "stack___children___children"
  | "stack___children___children___id"
  | "stack___children___children___children"
  | "stack___children___internal___content"
  | "stack___children___internal___contentDigest"
  | "stack___children___internal___description"
  | "stack___children___internal___fieldOwners"
  | "stack___children___internal___ignoreType"
  | "stack___children___internal___mediaType"
  | "stack___children___internal___owner"
  | "stack___children___internal___type"
  | "stack___internal___content"
  | "stack___internal___contentDigest"
  | "stack___internal___description"
  | "stack___internal___fieldOwners"
  | "stack___internal___ignoreType"
  | "stack___internal___mediaType"
  | "stack___internal___owner"
  | "stack___internal___type"
  | "description___id"
  | "description___parent___id"
  | "description___parent___parent___id"
  | "description___parent___parent___children"
  | "description___parent___children"
  | "description___parent___children___id"
  | "description___parent___children___children"
  | "description___parent___internal___content"
  | "description___parent___internal___contentDigest"
  | "description___parent___internal___description"
  | "description___parent___internal___fieldOwners"
  | "description___parent___internal___ignoreType"
  | "description___parent___internal___mediaType"
  | "description___parent___internal___owner"
  | "description___parent___internal___type"
  | "description___children"
  | "description___children___id"
  | "description___children___parent___id"
  | "description___children___parent___children"
  | "description___children___children"
  | "description___children___children___id"
  | "description___children___children___children"
  | "description___children___internal___content"
  | "description___children___internal___contentDigest"
  | "description___children___internal___description"
  | "description___children___internal___fieldOwners"
  | "description___children___internal___ignoreType"
  | "description___children___internal___mediaType"
  | "description___children___internal___owner"
  | "description___children___internal___type"
  | "description___internal___content"
  | "description___internal___contentDigest"
  | "description___internal___description"
  | "description___internal___fieldOwners"
  | "description___internal___ignoreType"
  | "description___internal___mediaType"
  | "description___internal___owner"
  | "description___internal___type"
  | "description___description"
  | "description___sys___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "services_page"
  | "services_page___contentful_id"
  | "services_page___id"
  | "services_page___node_locale"
  | "services_page___slug"
  | "services_page___servicesBanner___contentful_id"
  | "services_page___servicesBanner___id"
  | "services_page___servicesBanner___node_locale"
  | "services_page___servicesBanner___heading"
  | "services_page___servicesBanner___subHeader"
  | "services_page___servicesBanner___backgroundImage___contentful_id"
  | "services_page___servicesBanner___backgroundImage___id"
  | "services_page___servicesBanner___backgroundImage___spaceId"
  | "services_page___servicesBanner___backgroundImage___createdAt"
  | "services_page___servicesBanner___backgroundImage___updatedAt"
  | "services_page___servicesBanner___backgroundImage___title"
  | "services_page___servicesBanner___backgroundImage___description"
  | "services_page___servicesBanner___backgroundImage___node_locale"
  | "services_page___servicesBanner___backgroundImage___gatsbyImageData"
  | "services_page___servicesBanner___backgroundImage___children"
  | "services_page___servicesBanner___community_page"
  | "services_page___servicesBanner___community_page___contentful_id"
  | "services_page___servicesBanner___community_page___id"
  | "services_page___servicesBanner___community_page___node_locale"
  | "services_page___servicesBanner___community_page___slug"
  | "services_page___servicesBanner___community_page___newsCards"
  | "services_page___servicesBanner___community_page___blogCards"
  | "services_page___servicesBanner___community_page___communityCards"
  | "services_page___servicesBanner___community_page___spaceId"
  | "services_page___servicesBanner___community_page___createdAt"
  | "services_page___servicesBanner___community_page___updatedAt"
  | "services_page___servicesBanner___community_page___children"
  | "services_page___servicesBanner___spaceId"
  | "services_page___servicesBanner___createdAt"
  | "services_page___servicesBanner___updatedAt"
  | "services_page___servicesBanner___sys___type"
  | "services_page___servicesBanner___sys___revision"
  | "services_page___servicesBanner___services_page"
  | "services_page___servicesBanner___services_page___contentful_id"
  | "services_page___servicesBanner___services_page___id"
  | "services_page___servicesBanner___services_page___node_locale"
  | "services_page___servicesBanner___services_page___slug"
  | "services_page___servicesBanner___services_page___serviceCards"
  | "services_page___servicesBanner___services_page___spaceId"
  | "services_page___servicesBanner___services_page___createdAt"
  | "services_page___servicesBanner___services_page___updatedAt"
  | "services_page___servicesBanner___services_page___children"
  | "services_page___servicesBanner___home_page"
  | "services_page___servicesBanner___home_page___contentful_id"
  | "services_page___servicesBanner___home_page___id"
  | "services_page___servicesBanner___home_page___node_locale"
  | "services_page___servicesBanner___home_page___slug"
  | "services_page___servicesBanner___home_page___testimonialSlides"
  | "services_page___servicesBanner___home_page___spaceId"
  | "services_page___servicesBanner___home_page___createdAt"
  | "services_page___servicesBanner___home_page___updatedAt"
  | "services_page___servicesBanner___home_page___children"
  | "services_page___servicesBanner___contact_page"
  | "services_page___servicesBanner___contact_page___contentful_id"
  | "services_page___servicesBanner___contact_page___id"
  | "services_page___servicesBanner___contact_page___node_locale"
  | "services_page___servicesBanner___contact_page___slug"
  | "services_page___servicesBanner___contact_page___spaceId"
  | "services_page___servicesBanner___contact_page___createdAt"
  | "services_page___servicesBanner___contact_page___updatedAt"
  | "services_page___servicesBanner___contact_page___children"
  | "services_page___servicesBanner___about_us_page"
  | "services_page___servicesBanner___about_us_page___contentful_id"
  | "services_page___servicesBanner___about_us_page___id"
  | "services_page___servicesBanner___about_us_page___node_locale"
  | "services_page___servicesBanner___about_us_page___slug"
  | "services_page___servicesBanner___about_us_page___ourTeam"
  | "services_page___servicesBanner___about_us_page___spaceId"
  | "services_page___servicesBanner___about_us_page___createdAt"
  | "services_page___servicesBanner___about_us_page___updatedAt"
  | "services_page___servicesBanner___about_us_page___children"
  | "services_page___servicesBanner___parent___id"
  | "services_page___servicesBanner___parent___children"
  | "services_page___servicesBanner___children"
  | "services_page___servicesBanner___children___id"
  | "services_page___servicesBanner___children___children"
  | "services_page___servicesBanner___internal___content"
  | "services_page___servicesBanner___internal___contentDigest"
  | "services_page___servicesBanner___internal___description"
  | "services_page___servicesBanner___internal___fieldOwners"
  | "services_page___servicesBanner___internal___ignoreType"
  | "services_page___servicesBanner___internal___mediaType"
  | "services_page___servicesBanner___internal___owner"
  | "services_page___servicesBanner___internal___type"
  | "services_page___serviceCards"
  | "services_page___serviceCards___contentful_id"
  | "services_page___serviceCards___id"
  | "services_page___serviceCards___node_locale"
  | "services_page___serviceCards___title"
  | "services_page___serviceCards___internalLink"
  | "services_page___serviceCards___icon___contentful_id"
  | "services_page___serviceCards___icon___id"
  | "services_page___serviceCards___icon___spaceId"
  | "services_page___serviceCards___icon___createdAt"
  | "services_page___serviceCards___icon___updatedAt"
  | "services_page___serviceCards___icon___title"
  | "services_page___serviceCards___icon___description"
  | "services_page___serviceCards___icon___node_locale"
  | "services_page___serviceCards___icon___gatsbyImageData"
  | "services_page___serviceCards___icon___children"
  | "services_page___serviceCards___stack"
  | "services_page___serviceCards___stack___contentful_id"
  | "services_page___serviceCards___stack___id"
  | "services_page___serviceCards___stack___node_locale"
  | "services_page___serviceCards___stack___cards"
  | "services_page___serviceCards___stack___home_page"
  | "services_page___serviceCards___stack___spaceId"
  | "services_page___serviceCards___stack___createdAt"
  | "services_page___serviceCards___stack___updatedAt"
  | "services_page___serviceCards___stack___childrenContentfulStackTextTextNode"
  | "services_page___serviceCards___stack___childrenContentfulStackText2TextNode"
  | "services_page___serviceCards___stack___children"
  | "services_page___serviceCards___description___id"
  | "services_page___serviceCards___description___children"
  | "services_page___serviceCards___description___description"
  | "services_page___serviceCards___spaceId"
  | "services_page___serviceCards___createdAt"
  | "services_page___serviceCards___updatedAt"
  | "services_page___serviceCards___sys___type"
  | "services_page___serviceCards___sys___revision"
  | "services_page___serviceCards___services_page"
  | "services_page___serviceCards___services_page___contentful_id"
  | "services_page___serviceCards___services_page___id"
  | "services_page___serviceCards___services_page___node_locale"
  | "services_page___serviceCards___services_page___slug"
  | "services_page___serviceCards___services_page___serviceCards"
  | "services_page___serviceCards___services_page___spaceId"
  | "services_page___serviceCards___services_page___createdAt"
  | "services_page___serviceCards___services_page___updatedAt"
  | "services_page___serviceCards___services_page___children"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "services_page___serviceCards___childContentfulGeneralCardDescriptionTextNode___id"
  | "services_page___serviceCards___childContentfulGeneralCardDescriptionTextNode___children"
  | "services_page___serviceCards___childContentfulGeneralCardDescriptionTextNode___description"
  | "services_page___serviceCards___parent___id"
  | "services_page___serviceCards___parent___children"
  | "services_page___serviceCards___children"
  | "services_page___serviceCards___children___id"
  | "services_page___serviceCards___children___children"
  | "services_page___serviceCards___internal___content"
  | "services_page___serviceCards___internal___contentDigest"
  | "services_page___serviceCards___internal___description"
  | "services_page___serviceCards___internal___fieldOwners"
  | "services_page___serviceCards___internal___ignoreType"
  | "services_page___serviceCards___internal___mediaType"
  | "services_page___serviceCards___internal___owner"
  | "services_page___serviceCards___internal___type"
  | "services_page___spaceId"
  | "services_page___createdAt"
  | "services_page___updatedAt"
  | "services_page___sys___type"
  | "services_page___sys___revision"
  | "services_page___parent___id"
  | "services_page___parent___parent___id"
  | "services_page___parent___parent___children"
  | "services_page___parent___children"
  | "services_page___parent___children___id"
  | "services_page___parent___children___children"
  | "services_page___parent___internal___content"
  | "services_page___parent___internal___contentDigest"
  | "services_page___parent___internal___description"
  | "services_page___parent___internal___fieldOwners"
  | "services_page___parent___internal___ignoreType"
  | "services_page___parent___internal___mediaType"
  | "services_page___parent___internal___owner"
  | "services_page___parent___internal___type"
  | "services_page___children"
  | "services_page___children___id"
  | "services_page___children___parent___id"
  | "services_page___children___parent___children"
  | "services_page___children___children"
  | "services_page___children___children___id"
  | "services_page___children___children___children"
  | "services_page___children___internal___content"
  | "services_page___children___internal___contentDigest"
  | "services_page___children___internal___description"
  | "services_page___children___internal___fieldOwners"
  | "services_page___children___internal___ignoreType"
  | "services_page___children___internal___mediaType"
  | "services_page___children___internal___owner"
  | "services_page___children___internal___type"
  | "services_page___internal___content"
  | "services_page___internal___contentDigest"
  | "services_page___internal___description"
  | "services_page___internal___fieldOwners"
  | "services_page___internal___ignoreType"
  | "services_page___internal___mediaType"
  | "services_page___internal___owner"
  | "services_page___internal___type"
  | "childrenContentfulGeneralCardDescriptionTextNode"
  | "childrenContentfulGeneralCardDescriptionTextNode___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___parent___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___parent___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___children___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___children___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___content"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___contentDigest"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___description"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___fieldOwners"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___ignoreType"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___mediaType"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___owner"
  | "childrenContentfulGeneralCardDescriptionTextNode___parent___internal___type"
  | "childrenContentfulGeneralCardDescriptionTextNode___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___parent___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___parent___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___children___id"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___children___children"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___content"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___contentDigest"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___description"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___fieldOwners"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___ignoreType"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___mediaType"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___owner"
  | "childrenContentfulGeneralCardDescriptionTextNode___children___internal___type"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___content"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___contentDigest"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___description"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___fieldOwners"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___ignoreType"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___mediaType"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___owner"
  | "childrenContentfulGeneralCardDescriptionTextNode___internal___type"
  | "childrenContentfulGeneralCardDescriptionTextNode___description"
  | "childrenContentfulGeneralCardDescriptionTextNode___sys___type"
  | "childContentfulGeneralCardDescriptionTextNode___id"
  | "childContentfulGeneralCardDescriptionTextNode___parent___id"
  | "childContentfulGeneralCardDescriptionTextNode___parent___parent___id"
  | "childContentfulGeneralCardDescriptionTextNode___parent___parent___children"
  | "childContentfulGeneralCardDescriptionTextNode___parent___children"
  | "childContentfulGeneralCardDescriptionTextNode___parent___children___id"
  | "childContentfulGeneralCardDescriptionTextNode___parent___children___children"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___content"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___contentDigest"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___description"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___fieldOwners"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___ignoreType"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___mediaType"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___owner"
  | "childContentfulGeneralCardDescriptionTextNode___parent___internal___type"
  | "childContentfulGeneralCardDescriptionTextNode___children"
  | "childContentfulGeneralCardDescriptionTextNode___children___id"
  | "childContentfulGeneralCardDescriptionTextNode___children___parent___id"
  | "childContentfulGeneralCardDescriptionTextNode___children___parent___children"
  | "childContentfulGeneralCardDescriptionTextNode___children___children"
  | "childContentfulGeneralCardDescriptionTextNode___children___children___id"
  | "childContentfulGeneralCardDescriptionTextNode___children___children___children"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___content"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___contentDigest"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___description"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___fieldOwners"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___ignoreType"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___mediaType"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___owner"
  | "childContentfulGeneralCardDescriptionTextNode___children___internal___type"
  | "childContentfulGeneralCardDescriptionTextNode___internal___content"
  | "childContentfulGeneralCardDescriptionTextNode___internal___contentDigest"
  | "childContentfulGeneralCardDescriptionTextNode___internal___description"
  | "childContentfulGeneralCardDescriptionTextNode___internal___fieldOwners"
  | "childContentfulGeneralCardDescriptionTextNode___internal___ignoreType"
  | "childContentfulGeneralCardDescriptionTextNode___internal___mediaType"
  | "childContentfulGeneralCardDescriptionTextNode___internal___owner"
  | "childContentfulGeneralCardDescriptionTextNode___internal___type"
  | "childContentfulGeneralCardDescriptionTextNode___description"
  | "childContentfulGeneralCardDescriptionTextNode___sys___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulGeneralCardGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulGeneralCardEdge>
  nodes: Array<ContentfulGeneralCard>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulGeneralCardSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGeneralCardFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulTestimonialSlideConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTestimonialSlideEdge>
  nodes: Array<ContentfulTestimonialSlide>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulTestimonialSlideGroupConnection>
}

export type ContentfulTestimonialSlideConnectionDistinctArgs = {
  field: ContentfulTestimonialSlideFieldsEnum
}

export type ContentfulTestimonialSlideConnectionMaxArgs = {
  field: ContentfulTestimonialSlideFieldsEnum
}

export type ContentfulTestimonialSlideConnectionMinArgs = {
  field: ContentfulTestimonialSlideFieldsEnum
}

export type ContentfulTestimonialSlideConnectionSumArgs = {
  field: ContentfulTestimonialSlideFieldsEnum
}

export type ContentfulTestimonialSlideConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulTestimonialSlideFieldsEnum
}

export type ContentfulTestimonialSlideEdge = {
  next?: Maybe<ContentfulTestimonialSlide>
  node: ContentfulTestimonialSlide
  previous?: Maybe<ContentfulTestimonialSlide>
}

export type ContentfulTestimonialSlideFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "name"
  | "jobTitle"
  | "companyName"
  | "image___contentful_id"
  | "image___id"
  | "image___spaceId"
  | "image___createdAt"
  | "image___updatedAt"
  | "image___file___url"
  | "image___file___details___size"
  | "image___file___fileName"
  | "image___file___contentType"
  | "image___title"
  | "image___description"
  | "image___node_locale"
  | "image___sys___type"
  | "image___sys___revision"
  | "image___fixed___base64"
  | "image___fixed___tracedSVG"
  | "image___fixed___aspectRatio"
  | "image___fixed___width"
  | "image___fixed___height"
  | "image___fixed___src"
  | "image___fixed___srcSet"
  | "image___fixed___srcWebp"
  | "image___fixed___srcSetWebp"
  | "image___fluid___base64"
  | "image___fluid___tracedSVG"
  | "image___fluid___aspectRatio"
  | "image___fluid___src"
  | "image___fluid___srcSet"
  | "image___fluid___srcWebp"
  | "image___fluid___srcSetWebp"
  | "image___fluid___sizes"
  | "image___gatsbyImageData"
  | "image___resize___base64"
  | "image___resize___tracedSVG"
  | "image___resize___src"
  | "image___resize___width"
  | "image___resize___height"
  | "image___resize___aspectRatio"
  | "image___parent___id"
  | "image___parent___parent___id"
  | "image___parent___parent___children"
  | "image___parent___children"
  | "image___parent___children___id"
  | "image___parent___children___children"
  | "image___parent___internal___content"
  | "image___parent___internal___contentDigest"
  | "image___parent___internal___description"
  | "image___parent___internal___fieldOwners"
  | "image___parent___internal___ignoreType"
  | "image___parent___internal___mediaType"
  | "image___parent___internal___owner"
  | "image___parent___internal___type"
  | "image___children"
  | "image___children___id"
  | "image___children___parent___id"
  | "image___children___parent___children"
  | "image___children___children"
  | "image___children___children___id"
  | "image___children___children___children"
  | "image___children___internal___content"
  | "image___children___internal___contentDigest"
  | "image___children___internal___description"
  | "image___children___internal___fieldOwners"
  | "image___children___internal___ignoreType"
  | "image___children___internal___mediaType"
  | "image___children___internal___owner"
  | "image___children___internal___type"
  | "image___internal___content"
  | "image___internal___contentDigest"
  | "image___internal___description"
  | "image___internal___fieldOwners"
  | "image___internal___ignoreType"
  | "image___internal___mediaType"
  | "image___internal___owner"
  | "image___internal___type"
  | "home_page"
  | "home_page___contentful_id"
  | "home_page___id"
  | "home_page___node_locale"
  | "home_page___slug"
  | "home_page___homeBanner___contentful_id"
  | "home_page___homeBanner___id"
  | "home_page___homeBanner___node_locale"
  | "home_page___homeBanner___heading"
  | "home_page___homeBanner___subHeader"
  | "home_page___homeBanner___backgroundImage___contentful_id"
  | "home_page___homeBanner___backgroundImage___id"
  | "home_page___homeBanner___backgroundImage___spaceId"
  | "home_page___homeBanner___backgroundImage___createdAt"
  | "home_page___homeBanner___backgroundImage___updatedAt"
  | "home_page___homeBanner___backgroundImage___title"
  | "home_page___homeBanner___backgroundImage___description"
  | "home_page___homeBanner___backgroundImage___node_locale"
  | "home_page___homeBanner___backgroundImage___gatsbyImageData"
  | "home_page___homeBanner___backgroundImage___children"
  | "home_page___homeBanner___community_page"
  | "home_page___homeBanner___community_page___contentful_id"
  | "home_page___homeBanner___community_page___id"
  | "home_page___homeBanner___community_page___node_locale"
  | "home_page___homeBanner___community_page___slug"
  | "home_page___homeBanner___community_page___newsCards"
  | "home_page___homeBanner___community_page___blogCards"
  | "home_page___homeBanner___community_page___communityCards"
  | "home_page___homeBanner___community_page___spaceId"
  | "home_page___homeBanner___community_page___createdAt"
  | "home_page___homeBanner___community_page___updatedAt"
  | "home_page___homeBanner___community_page___children"
  | "home_page___homeBanner___spaceId"
  | "home_page___homeBanner___createdAt"
  | "home_page___homeBanner___updatedAt"
  | "home_page___homeBanner___sys___type"
  | "home_page___homeBanner___sys___revision"
  | "home_page___homeBanner___services_page"
  | "home_page___homeBanner___services_page___contentful_id"
  | "home_page___homeBanner___services_page___id"
  | "home_page___homeBanner___services_page___node_locale"
  | "home_page___homeBanner___services_page___slug"
  | "home_page___homeBanner___services_page___serviceCards"
  | "home_page___homeBanner___services_page___spaceId"
  | "home_page___homeBanner___services_page___createdAt"
  | "home_page___homeBanner___services_page___updatedAt"
  | "home_page___homeBanner___services_page___children"
  | "home_page___homeBanner___home_page"
  | "home_page___homeBanner___home_page___contentful_id"
  | "home_page___homeBanner___home_page___id"
  | "home_page___homeBanner___home_page___node_locale"
  | "home_page___homeBanner___home_page___slug"
  | "home_page___homeBanner___home_page___testimonialSlides"
  | "home_page___homeBanner___home_page___spaceId"
  | "home_page___homeBanner___home_page___createdAt"
  | "home_page___homeBanner___home_page___updatedAt"
  | "home_page___homeBanner___home_page___children"
  | "home_page___homeBanner___contact_page"
  | "home_page___homeBanner___contact_page___contentful_id"
  | "home_page___homeBanner___contact_page___id"
  | "home_page___homeBanner___contact_page___node_locale"
  | "home_page___homeBanner___contact_page___slug"
  | "home_page___homeBanner___contact_page___spaceId"
  | "home_page___homeBanner___contact_page___createdAt"
  | "home_page___homeBanner___contact_page___updatedAt"
  | "home_page___homeBanner___contact_page___children"
  | "home_page___homeBanner___about_us_page"
  | "home_page___homeBanner___about_us_page___contentful_id"
  | "home_page___homeBanner___about_us_page___id"
  | "home_page___homeBanner___about_us_page___node_locale"
  | "home_page___homeBanner___about_us_page___slug"
  | "home_page___homeBanner___about_us_page___ourTeam"
  | "home_page___homeBanner___about_us_page___spaceId"
  | "home_page___homeBanner___about_us_page___createdAt"
  | "home_page___homeBanner___about_us_page___updatedAt"
  | "home_page___homeBanner___about_us_page___children"
  | "home_page___homeBanner___parent___id"
  | "home_page___homeBanner___parent___children"
  | "home_page___homeBanner___children"
  | "home_page___homeBanner___children___id"
  | "home_page___homeBanner___children___children"
  | "home_page___homeBanner___internal___content"
  | "home_page___homeBanner___internal___contentDigest"
  | "home_page___homeBanner___internal___description"
  | "home_page___homeBanner___internal___fieldOwners"
  | "home_page___homeBanner___internal___ignoreType"
  | "home_page___homeBanner___internal___mediaType"
  | "home_page___homeBanner___internal___owner"
  | "home_page___homeBanner___internal___type"
  | "home_page___belowHero___contentful_id"
  | "home_page___belowHero___id"
  | "home_page___belowHero___node_locale"
  | "home_page___belowHero___image___contentful_id"
  | "home_page___belowHero___image___id"
  | "home_page___belowHero___image___spaceId"
  | "home_page___belowHero___image___createdAt"
  | "home_page___belowHero___image___updatedAt"
  | "home_page___belowHero___image___title"
  | "home_page___belowHero___image___description"
  | "home_page___belowHero___image___node_locale"
  | "home_page___belowHero___image___gatsbyImageData"
  | "home_page___belowHero___image___children"
  | "home_page___belowHero___about_us_page"
  | "home_page___belowHero___about_us_page___contentful_id"
  | "home_page___belowHero___about_us_page___id"
  | "home_page___belowHero___about_us_page___node_locale"
  | "home_page___belowHero___about_us_page___slug"
  | "home_page___belowHero___about_us_page___ourTeam"
  | "home_page___belowHero___about_us_page___spaceId"
  | "home_page___belowHero___about_us_page___createdAt"
  | "home_page___belowHero___about_us_page___updatedAt"
  | "home_page___belowHero___about_us_page___children"
  | "home_page___belowHero___text___id"
  | "home_page___belowHero___text___children"
  | "home_page___belowHero___text___text"
  | "home_page___belowHero___spaceId"
  | "home_page___belowHero___createdAt"
  | "home_page___belowHero___updatedAt"
  | "home_page___belowHero___sys___type"
  | "home_page___belowHero___sys___revision"
  | "home_page___belowHero___home_page"
  | "home_page___belowHero___home_page___contentful_id"
  | "home_page___belowHero___home_page___id"
  | "home_page___belowHero___home_page___node_locale"
  | "home_page___belowHero___home_page___slug"
  | "home_page___belowHero___home_page___testimonialSlides"
  | "home_page___belowHero___home_page___spaceId"
  | "home_page___belowHero___home_page___createdAt"
  | "home_page___belowHero___home_page___updatedAt"
  | "home_page___belowHero___home_page___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___parent___id"
  | "home_page___belowHero___parent___children"
  | "home_page___belowHero___children"
  | "home_page___belowHero___children___id"
  | "home_page___belowHero___children___children"
  | "home_page___belowHero___internal___content"
  | "home_page___belowHero___internal___contentDigest"
  | "home_page___belowHero___internal___description"
  | "home_page___belowHero___internal___fieldOwners"
  | "home_page___belowHero___internal___ignoreType"
  | "home_page___belowHero___internal___mediaType"
  | "home_page___belowHero___internal___owner"
  | "home_page___belowHero___internal___type"
  | "home_page___ctaStack___contentful_id"
  | "home_page___ctaStack___id"
  | "home_page___ctaStack___node_locale"
  | "home_page___ctaStack___cards"
  | "home_page___ctaStack___cards___contentful_id"
  | "home_page___ctaStack___cards___id"
  | "home_page___ctaStack___cards___node_locale"
  | "home_page___ctaStack___cards___title"
  | "home_page___ctaStack___cards___internalLink"
  | "home_page___ctaStack___cards___stack"
  | "home_page___ctaStack___cards___spaceId"
  | "home_page___ctaStack___cards___createdAt"
  | "home_page___ctaStack___cards___updatedAt"
  | "home_page___ctaStack___cards___services_page"
  | "home_page___ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___ctaStack___cards___children"
  | "home_page___ctaStack___home_page"
  | "home_page___ctaStack___home_page___contentful_id"
  | "home_page___ctaStack___home_page___id"
  | "home_page___ctaStack___home_page___node_locale"
  | "home_page___ctaStack___home_page___slug"
  | "home_page___ctaStack___home_page___testimonialSlides"
  | "home_page___ctaStack___home_page___spaceId"
  | "home_page___ctaStack___home_page___createdAt"
  | "home_page___ctaStack___home_page___updatedAt"
  | "home_page___ctaStack___home_page___children"
  | "home_page___ctaStack___text___id"
  | "home_page___ctaStack___text___children"
  | "home_page___ctaStack___text___text"
  | "home_page___ctaStack___text2___id"
  | "home_page___ctaStack___text2___children"
  | "home_page___ctaStack___text2___text2"
  | "home_page___ctaStack___spaceId"
  | "home_page___ctaStack___createdAt"
  | "home_page___ctaStack___updatedAt"
  | "home_page___ctaStack___sys___type"
  | "home_page___ctaStack___sys___revision"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___childContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___parent___id"
  | "home_page___ctaStack___parent___children"
  | "home_page___ctaStack___children"
  | "home_page___ctaStack___children___id"
  | "home_page___ctaStack___children___children"
  | "home_page___ctaStack___internal___content"
  | "home_page___ctaStack___internal___contentDigest"
  | "home_page___ctaStack___internal___description"
  | "home_page___ctaStack___internal___fieldOwners"
  | "home_page___ctaStack___internal___ignoreType"
  | "home_page___ctaStack___internal___mediaType"
  | "home_page___ctaStack___internal___owner"
  | "home_page___ctaStack___internal___type"
  | "home_page___howWeHelpStack___contentful_id"
  | "home_page___howWeHelpStack___id"
  | "home_page___howWeHelpStack___node_locale"
  | "home_page___howWeHelpStack___cards"
  | "home_page___howWeHelpStack___cards___contentful_id"
  | "home_page___howWeHelpStack___cards___id"
  | "home_page___howWeHelpStack___cards___node_locale"
  | "home_page___howWeHelpStack___cards___title"
  | "home_page___howWeHelpStack___cards___internalLink"
  | "home_page___howWeHelpStack___cards___stack"
  | "home_page___howWeHelpStack___cards___spaceId"
  | "home_page___howWeHelpStack___cards___createdAt"
  | "home_page___howWeHelpStack___cards___updatedAt"
  | "home_page___howWeHelpStack___cards___services_page"
  | "home_page___howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___howWeHelpStack___cards___children"
  | "home_page___howWeHelpStack___home_page"
  | "home_page___howWeHelpStack___home_page___contentful_id"
  | "home_page___howWeHelpStack___home_page___id"
  | "home_page___howWeHelpStack___home_page___node_locale"
  | "home_page___howWeHelpStack___home_page___slug"
  | "home_page___howWeHelpStack___home_page___testimonialSlides"
  | "home_page___howWeHelpStack___home_page___spaceId"
  | "home_page___howWeHelpStack___home_page___createdAt"
  | "home_page___howWeHelpStack___home_page___updatedAt"
  | "home_page___howWeHelpStack___home_page___children"
  | "home_page___howWeHelpStack___text___id"
  | "home_page___howWeHelpStack___text___children"
  | "home_page___howWeHelpStack___text___text"
  | "home_page___howWeHelpStack___text2___id"
  | "home_page___howWeHelpStack___text2___children"
  | "home_page___howWeHelpStack___text2___text2"
  | "home_page___howWeHelpStack___spaceId"
  | "home_page___howWeHelpStack___createdAt"
  | "home_page___howWeHelpStack___updatedAt"
  | "home_page___howWeHelpStack___sys___type"
  | "home_page___howWeHelpStack___sys___revision"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___parent___id"
  | "home_page___howWeHelpStack___parent___children"
  | "home_page___howWeHelpStack___children"
  | "home_page___howWeHelpStack___children___id"
  | "home_page___howWeHelpStack___children___children"
  | "home_page___howWeHelpStack___internal___content"
  | "home_page___howWeHelpStack___internal___contentDigest"
  | "home_page___howWeHelpStack___internal___description"
  | "home_page___howWeHelpStack___internal___fieldOwners"
  | "home_page___howWeHelpStack___internal___ignoreType"
  | "home_page___howWeHelpStack___internal___mediaType"
  | "home_page___howWeHelpStack___internal___owner"
  | "home_page___howWeHelpStack___internal___type"
  | "home_page___testimonialSlides"
  | "home_page___testimonialSlides___contentful_id"
  | "home_page___testimonialSlides___id"
  | "home_page___testimonialSlides___node_locale"
  | "home_page___testimonialSlides___name"
  | "home_page___testimonialSlides___jobTitle"
  | "home_page___testimonialSlides___companyName"
  | "home_page___testimonialSlides___image___contentful_id"
  | "home_page___testimonialSlides___image___id"
  | "home_page___testimonialSlides___image___spaceId"
  | "home_page___testimonialSlides___image___createdAt"
  | "home_page___testimonialSlides___image___updatedAt"
  | "home_page___testimonialSlides___image___title"
  | "home_page___testimonialSlides___image___description"
  | "home_page___testimonialSlides___image___node_locale"
  | "home_page___testimonialSlides___image___gatsbyImageData"
  | "home_page___testimonialSlides___image___children"
  | "home_page___testimonialSlides___home_page"
  | "home_page___testimonialSlides___home_page___contentful_id"
  | "home_page___testimonialSlides___home_page___id"
  | "home_page___testimonialSlides___home_page___node_locale"
  | "home_page___testimonialSlides___home_page___slug"
  | "home_page___testimonialSlides___home_page___testimonialSlides"
  | "home_page___testimonialSlides___home_page___spaceId"
  | "home_page___testimonialSlides___home_page___createdAt"
  | "home_page___testimonialSlides___home_page___updatedAt"
  | "home_page___testimonialSlides___home_page___children"
  | "home_page___testimonialSlides___testimony___id"
  | "home_page___testimonialSlides___testimony___children"
  | "home_page___testimonialSlides___testimony___testimony"
  | "home_page___testimonialSlides___spaceId"
  | "home_page___testimonialSlides___createdAt"
  | "home_page___testimonialSlides___updatedAt"
  | "home_page___testimonialSlides___sys___type"
  | "home_page___testimonialSlides___sys___revision"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___parent___id"
  | "home_page___testimonialSlides___parent___children"
  | "home_page___testimonialSlides___children"
  | "home_page___testimonialSlides___children___id"
  | "home_page___testimonialSlides___children___children"
  | "home_page___testimonialSlides___internal___content"
  | "home_page___testimonialSlides___internal___contentDigest"
  | "home_page___testimonialSlides___internal___description"
  | "home_page___testimonialSlides___internal___fieldOwners"
  | "home_page___testimonialSlides___internal___ignoreType"
  | "home_page___testimonialSlides___internal___mediaType"
  | "home_page___testimonialSlides___internal___owner"
  | "home_page___testimonialSlides___internal___type"
  | "home_page___carouselImages___contentful_id"
  | "home_page___carouselImages___id"
  | "home_page___carouselImages___node_locale"
  | "home_page___carouselImages___images"
  | "home_page___carouselImages___images___contentful_id"
  | "home_page___carouselImages___images___id"
  | "home_page___carouselImages___images___spaceId"
  | "home_page___carouselImages___images___createdAt"
  | "home_page___carouselImages___images___updatedAt"
  | "home_page___carouselImages___images___title"
  | "home_page___carouselImages___images___description"
  | "home_page___carouselImages___images___node_locale"
  | "home_page___carouselImages___images___gatsbyImageData"
  | "home_page___carouselImages___images___children"
  | "home_page___carouselImages___home_page"
  | "home_page___carouselImages___home_page___contentful_id"
  | "home_page___carouselImages___home_page___id"
  | "home_page___carouselImages___home_page___node_locale"
  | "home_page___carouselImages___home_page___slug"
  | "home_page___carouselImages___home_page___testimonialSlides"
  | "home_page___carouselImages___home_page___spaceId"
  | "home_page___carouselImages___home_page___createdAt"
  | "home_page___carouselImages___home_page___updatedAt"
  | "home_page___carouselImages___home_page___children"
  | "home_page___carouselImages___about_us_page"
  | "home_page___carouselImages___about_us_page___contentful_id"
  | "home_page___carouselImages___about_us_page___id"
  | "home_page___carouselImages___about_us_page___node_locale"
  | "home_page___carouselImages___about_us_page___slug"
  | "home_page___carouselImages___about_us_page___ourTeam"
  | "home_page___carouselImages___about_us_page___spaceId"
  | "home_page___carouselImages___about_us_page___createdAt"
  | "home_page___carouselImages___about_us_page___updatedAt"
  | "home_page___carouselImages___about_us_page___children"
  | "home_page___carouselImages___spaceId"
  | "home_page___carouselImages___createdAt"
  | "home_page___carouselImages___updatedAt"
  | "home_page___carouselImages___sys___type"
  | "home_page___carouselImages___sys___revision"
  | "home_page___carouselImages___parent___id"
  | "home_page___carouselImages___parent___children"
  | "home_page___carouselImages___children"
  | "home_page___carouselImages___children___id"
  | "home_page___carouselImages___children___children"
  | "home_page___carouselImages___internal___content"
  | "home_page___carouselImages___internal___contentDigest"
  | "home_page___carouselImages___internal___description"
  | "home_page___carouselImages___internal___fieldOwners"
  | "home_page___carouselImages___internal___ignoreType"
  | "home_page___carouselImages___internal___mediaType"
  | "home_page___carouselImages___internal___owner"
  | "home_page___carouselImages___internal___type"
  | "home_page___spaceId"
  | "home_page___createdAt"
  | "home_page___updatedAt"
  | "home_page___sys___type"
  | "home_page___sys___revision"
  | "home_page___parent___id"
  | "home_page___parent___parent___id"
  | "home_page___parent___parent___children"
  | "home_page___parent___children"
  | "home_page___parent___children___id"
  | "home_page___parent___children___children"
  | "home_page___parent___internal___content"
  | "home_page___parent___internal___contentDigest"
  | "home_page___parent___internal___description"
  | "home_page___parent___internal___fieldOwners"
  | "home_page___parent___internal___ignoreType"
  | "home_page___parent___internal___mediaType"
  | "home_page___parent___internal___owner"
  | "home_page___parent___internal___type"
  | "home_page___children"
  | "home_page___children___id"
  | "home_page___children___parent___id"
  | "home_page___children___parent___children"
  | "home_page___children___children"
  | "home_page___children___children___id"
  | "home_page___children___children___children"
  | "home_page___children___internal___content"
  | "home_page___children___internal___contentDigest"
  | "home_page___children___internal___description"
  | "home_page___children___internal___fieldOwners"
  | "home_page___children___internal___ignoreType"
  | "home_page___children___internal___mediaType"
  | "home_page___children___internal___owner"
  | "home_page___children___internal___type"
  | "home_page___internal___content"
  | "home_page___internal___contentDigest"
  | "home_page___internal___description"
  | "home_page___internal___fieldOwners"
  | "home_page___internal___ignoreType"
  | "home_page___internal___mediaType"
  | "home_page___internal___owner"
  | "home_page___internal___type"
  | "testimony___id"
  | "testimony___parent___id"
  | "testimony___parent___parent___id"
  | "testimony___parent___parent___children"
  | "testimony___parent___children"
  | "testimony___parent___children___id"
  | "testimony___parent___children___children"
  | "testimony___parent___internal___content"
  | "testimony___parent___internal___contentDigest"
  | "testimony___parent___internal___description"
  | "testimony___parent___internal___fieldOwners"
  | "testimony___parent___internal___ignoreType"
  | "testimony___parent___internal___mediaType"
  | "testimony___parent___internal___owner"
  | "testimony___parent___internal___type"
  | "testimony___children"
  | "testimony___children___id"
  | "testimony___children___parent___id"
  | "testimony___children___parent___children"
  | "testimony___children___children"
  | "testimony___children___children___id"
  | "testimony___children___children___children"
  | "testimony___children___internal___content"
  | "testimony___children___internal___contentDigest"
  | "testimony___children___internal___description"
  | "testimony___children___internal___fieldOwners"
  | "testimony___children___internal___ignoreType"
  | "testimony___children___internal___mediaType"
  | "testimony___children___internal___owner"
  | "testimony___children___internal___type"
  | "testimony___internal___content"
  | "testimony___internal___contentDigest"
  | "testimony___internal___description"
  | "testimony___internal___fieldOwners"
  | "testimony___internal___ignoreType"
  | "testimony___internal___mediaType"
  | "testimony___internal___owner"
  | "testimony___internal___type"
  | "testimony___testimony"
  | "testimony___sys___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___parent___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___parent___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___children___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___children___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___content"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___contentDigest"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___description"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___fieldOwners"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___ignoreType"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___mediaType"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___owner"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___parent___internal___type"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___parent___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___parent___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___children___id"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___children___children"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___content"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___contentDigest"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___description"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___fieldOwners"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___ignoreType"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___mediaType"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___owner"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___children___internal___type"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___content"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___contentDigest"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___description"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___fieldOwners"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___ignoreType"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___mediaType"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___owner"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___internal___type"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "childrenContentfulTestimonialSlideTestimonyTextNode___sys___type"
  | "childContentfulTestimonialSlideTestimonyTextNode___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___parent___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___parent___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___children___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___children___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___content"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___contentDigest"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___description"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___fieldOwners"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___ignoreType"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___mediaType"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___owner"
  | "childContentfulTestimonialSlideTestimonyTextNode___parent___internal___type"
  | "childContentfulTestimonialSlideTestimonyTextNode___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___parent___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___parent___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___children___id"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___children___children"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___content"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___contentDigest"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___description"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___fieldOwners"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___ignoreType"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___mediaType"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___owner"
  | "childContentfulTestimonialSlideTestimonyTextNode___children___internal___type"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___content"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___contentDigest"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___description"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___fieldOwners"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___ignoreType"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___mediaType"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___owner"
  | "childContentfulTestimonialSlideTestimonyTextNode___internal___type"
  | "childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "childContentfulTestimonialSlideTestimonyTextNode___sys___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulTestimonialSlideGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTestimonialSlideEdge>
  nodes: Array<ContentfulTestimonialSlide>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulTestimonialSlideSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTestimonialSlideFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulCarouselImagesConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulCarouselImagesEdge>
  nodes: Array<ContentfulCarouselImages>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulCarouselImagesGroupConnection>
}

export type ContentfulCarouselImagesConnectionDistinctArgs = {
  field: ContentfulCarouselImagesFieldsEnum
}

export type ContentfulCarouselImagesConnectionMaxArgs = {
  field: ContentfulCarouselImagesFieldsEnum
}

export type ContentfulCarouselImagesConnectionMinArgs = {
  field: ContentfulCarouselImagesFieldsEnum
}

export type ContentfulCarouselImagesConnectionSumArgs = {
  field: ContentfulCarouselImagesFieldsEnum
}

export type ContentfulCarouselImagesConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulCarouselImagesFieldsEnum
}

export type ContentfulCarouselImagesEdge = {
  next?: Maybe<ContentfulCarouselImages>
  node: ContentfulCarouselImages
  previous?: Maybe<ContentfulCarouselImages>
}

export type ContentfulCarouselImagesFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "images"
  | "images___contentful_id"
  | "images___id"
  | "images___spaceId"
  | "images___createdAt"
  | "images___updatedAt"
  | "images___file___url"
  | "images___file___details___size"
  | "images___file___fileName"
  | "images___file___contentType"
  | "images___title"
  | "images___description"
  | "images___node_locale"
  | "images___sys___type"
  | "images___sys___revision"
  | "images___fixed___base64"
  | "images___fixed___tracedSVG"
  | "images___fixed___aspectRatio"
  | "images___fixed___width"
  | "images___fixed___height"
  | "images___fixed___src"
  | "images___fixed___srcSet"
  | "images___fixed___srcWebp"
  | "images___fixed___srcSetWebp"
  | "images___fluid___base64"
  | "images___fluid___tracedSVG"
  | "images___fluid___aspectRatio"
  | "images___fluid___src"
  | "images___fluid___srcSet"
  | "images___fluid___srcWebp"
  | "images___fluid___srcSetWebp"
  | "images___fluid___sizes"
  | "images___gatsbyImageData"
  | "images___resize___base64"
  | "images___resize___tracedSVG"
  | "images___resize___src"
  | "images___resize___width"
  | "images___resize___height"
  | "images___resize___aspectRatio"
  | "images___parent___id"
  | "images___parent___parent___id"
  | "images___parent___parent___children"
  | "images___parent___children"
  | "images___parent___children___id"
  | "images___parent___children___children"
  | "images___parent___internal___content"
  | "images___parent___internal___contentDigest"
  | "images___parent___internal___description"
  | "images___parent___internal___fieldOwners"
  | "images___parent___internal___ignoreType"
  | "images___parent___internal___mediaType"
  | "images___parent___internal___owner"
  | "images___parent___internal___type"
  | "images___children"
  | "images___children___id"
  | "images___children___parent___id"
  | "images___children___parent___children"
  | "images___children___children"
  | "images___children___children___id"
  | "images___children___children___children"
  | "images___children___internal___content"
  | "images___children___internal___contentDigest"
  | "images___children___internal___description"
  | "images___children___internal___fieldOwners"
  | "images___children___internal___ignoreType"
  | "images___children___internal___mediaType"
  | "images___children___internal___owner"
  | "images___children___internal___type"
  | "images___internal___content"
  | "images___internal___contentDigest"
  | "images___internal___description"
  | "images___internal___fieldOwners"
  | "images___internal___ignoreType"
  | "images___internal___mediaType"
  | "images___internal___owner"
  | "images___internal___type"
  | "home_page"
  | "home_page___contentful_id"
  | "home_page___id"
  | "home_page___node_locale"
  | "home_page___slug"
  | "home_page___homeBanner___contentful_id"
  | "home_page___homeBanner___id"
  | "home_page___homeBanner___node_locale"
  | "home_page___homeBanner___heading"
  | "home_page___homeBanner___subHeader"
  | "home_page___homeBanner___backgroundImage___contentful_id"
  | "home_page___homeBanner___backgroundImage___id"
  | "home_page___homeBanner___backgroundImage___spaceId"
  | "home_page___homeBanner___backgroundImage___createdAt"
  | "home_page___homeBanner___backgroundImage___updatedAt"
  | "home_page___homeBanner___backgroundImage___title"
  | "home_page___homeBanner___backgroundImage___description"
  | "home_page___homeBanner___backgroundImage___node_locale"
  | "home_page___homeBanner___backgroundImage___gatsbyImageData"
  | "home_page___homeBanner___backgroundImage___children"
  | "home_page___homeBanner___community_page"
  | "home_page___homeBanner___community_page___contentful_id"
  | "home_page___homeBanner___community_page___id"
  | "home_page___homeBanner___community_page___node_locale"
  | "home_page___homeBanner___community_page___slug"
  | "home_page___homeBanner___community_page___newsCards"
  | "home_page___homeBanner___community_page___blogCards"
  | "home_page___homeBanner___community_page___communityCards"
  | "home_page___homeBanner___community_page___spaceId"
  | "home_page___homeBanner___community_page___createdAt"
  | "home_page___homeBanner___community_page___updatedAt"
  | "home_page___homeBanner___community_page___children"
  | "home_page___homeBanner___spaceId"
  | "home_page___homeBanner___createdAt"
  | "home_page___homeBanner___updatedAt"
  | "home_page___homeBanner___sys___type"
  | "home_page___homeBanner___sys___revision"
  | "home_page___homeBanner___services_page"
  | "home_page___homeBanner___services_page___contentful_id"
  | "home_page___homeBanner___services_page___id"
  | "home_page___homeBanner___services_page___node_locale"
  | "home_page___homeBanner___services_page___slug"
  | "home_page___homeBanner___services_page___serviceCards"
  | "home_page___homeBanner___services_page___spaceId"
  | "home_page___homeBanner___services_page___createdAt"
  | "home_page___homeBanner___services_page___updatedAt"
  | "home_page___homeBanner___services_page___children"
  | "home_page___homeBanner___home_page"
  | "home_page___homeBanner___home_page___contentful_id"
  | "home_page___homeBanner___home_page___id"
  | "home_page___homeBanner___home_page___node_locale"
  | "home_page___homeBanner___home_page___slug"
  | "home_page___homeBanner___home_page___testimonialSlides"
  | "home_page___homeBanner___home_page___spaceId"
  | "home_page___homeBanner___home_page___createdAt"
  | "home_page___homeBanner___home_page___updatedAt"
  | "home_page___homeBanner___home_page___children"
  | "home_page___homeBanner___contact_page"
  | "home_page___homeBanner___contact_page___contentful_id"
  | "home_page___homeBanner___contact_page___id"
  | "home_page___homeBanner___contact_page___node_locale"
  | "home_page___homeBanner___contact_page___slug"
  | "home_page___homeBanner___contact_page___spaceId"
  | "home_page___homeBanner___contact_page___createdAt"
  | "home_page___homeBanner___contact_page___updatedAt"
  | "home_page___homeBanner___contact_page___children"
  | "home_page___homeBanner___about_us_page"
  | "home_page___homeBanner___about_us_page___contentful_id"
  | "home_page___homeBanner___about_us_page___id"
  | "home_page___homeBanner___about_us_page___node_locale"
  | "home_page___homeBanner___about_us_page___slug"
  | "home_page___homeBanner___about_us_page___ourTeam"
  | "home_page___homeBanner___about_us_page___spaceId"
  | "home_page___homeBanner___about_us_page___createdAt"
  | "home_page___homeBanner___about_us_page___updatedAt"
  | "home_page___homeBanner___about_us_page___children"
  | "home_page___homeBanner___parent___id"
  | "home_page___homeBanner___parent___children"
  | "home_page___homeBanner___children"
  | "home_page___homeBanner___children___id"
  | "home_page___homeBanner___children___children"
  | "home_page___homeBanner___internal___content"
  | "home_page___homeBanner___internal___contentDigest"
  | "home_page___homeBanner___internal___description"
  | "home_page___homeBanner___internal___fieldOwners"
  | "home_page___homeBanner___internal___ignoreType"
  | "home_page___homeBanner___internal___mediaType"
  | "home_page___homeBanner___internal___owner"
  | "home_page___homeBanner___internal___type"
  | "home_page___belowHero___contentful_id"
  | "home_page___belowHero___id"
  | "home_page___belowHero___node_locale"
  | "home_page___belowHero___image___contentful_id"
  | "home_page___belowHero___image___id"
  | "home_page___belowHero___image___spaceId"
  | "home_page___belowHero___image___createdAt"
  | "home_page___belowHero___image___updatedAt"
  | "home_page___belowHero___image___title"
  | "home_page___belowHero___image___description"
  | "home_page___belowHero___image___node_locale"
  | "home_page___belowHero___image___gatsbyImageData"
  | "home_page___belowHero___image___children"
  | "home_page___belowHero___about_us_page"
  | "home_page___belowHero___about_us_page___contentful_id"
  | "home_page___belowHero___about_us_page___id"
  | "home_page___belowHero___about_us_page___node_locale"
  | "home_page___belowHero___about_us_page___slug"
  | "home_page___belowHero___about_us_page___ourTeam"
  | "home_page___belowHero___about_us_page___spaceId"
  | "home_page___belowHero___about_us_page___createdAt"
  | "home_page___belowHero___about_us_page___updatedAt"
  | "home_page___belowHero___about_us_page___children"
  | "home_page___belowHero___text___id"
  | "home_page___belowHero___text___children"
  | "home_page___belowHero___text___text"
  | "home_page___belowHero___spaceId"
  | "home_page___belowHero___createdAt"
  | "home_page___belowHero___updatedAt"
  | "home_page___belowHero___sys___type"
  | "home_page___belowHero___sys___revision"
  | "home_page___belowHero___home_page"
  | "home_page___belowHero___home_page___contentful_id"
  | "home_page___belowHero___home_page___id"
  | "home_page___belowHero___home_page___node_locale"
  | "home_page___belowHero___home_page___slug"
  | "home_page___belowHero___home_page___testimonialSlides"
  | "home_page___belowHero___home_page___spaceId"
  | "home_page___belowHero___home_page___createdAt"
  | "home_page___belowHero___home_page___updatedAt"
  | "home_page___belowHero___home_page___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___parent___id"
  | "home_page___belowHero___parent___children"
  | "home_page___belowHero___children"
  | "home_page___belowHero___children___id"
  | "home_page___belowHero___children___children"
  | "home_page___belowHero___internal___content"
  | "home_page___belowHero___internal___contentDigest"
  | "home_page___belowHero___internal___description"
  | "home_page___belowHero___internal___fieldOwners"
  | "home_page___belowHero___internal___ignoreType"
  | "home_page___belowHero___internal___mediaType"
  | "home_page___belowHero___internal___owner"
  | "home_page___belowHero___internal___type"
  | "home_page___ctaStack___contentful_id"
  | "home_page___ctaStack___id"
  | "home_page___ctaStack___node_locale"
  | "home_page___ctaStack___cards"
  | "home_page___ctaStack___cards___contentful_id"
  | "home_page___ctaStack___cards___id"
  | "home_page___ctaStack___cards___node_locale"
  | "home_page___ctaStack___cards___title"
  | "home_page___ctaStack___cards___internalLink"
  | "home_page___ctaStack___cards___stack"
  | "home_page___ctaStack___cards___spaceId"
  | "home_page___ctaStack___cards___createdAt"
  | "home_page___ctaStack___cards___updatedAt"
  | "home_page___ctaStack___cards___services_page"
  | "home_page___ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___ctaStack___cards___children"
  | "home_page___ctaStack___home_page"
  | "home_page___ctaStack___home_page___contentful_id"
  | "home_page___ctaStack___home_page___id"
  | "home_page___ctaStack___home_page___node_locale"
  | "home_page___ctaStack___home_page___slug"
  | "home_page___ctaStack___home_page___testimonialSlides"
  | "home_page___ctaStack___home_page___spaceId"
  | "home_page___ctaStack___home_page___createdAt"
  | "home_page___ctaStack___home_page___updatedAt"
  | "home_page___ctaStack___home_page___children"
  | "home_page___ctaStack___text___id"
  | "home_page___ctaStack___text___children"
  | "home_page___ctaStack___text___text"
  | "home_page___ctaStack___text2___id"
  | "home_page___ctaStack___text2___children"
  | "home_page___ctaStack___text2___text2"
  | "home_page___ctaStack___spaceId"
  | "home_page___ctaStack___createdAt"
  | "home_page___ctaStack___updatedAt"
  | "home_page___ctaStack___sys___type"
  | "home_page___ctaStack___sys___revision"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___childContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___parent___id"
  | "home_page___ctaStack___parent___children"
  | "home_page___ctaStack___children"
  | "home_page___ctaStack___children___id"
  | "home_page___ctaStack___children___children"
  | "home_page___ctaStack___internal___content"
  | "home_page___ctaStack___internal___contentDigest"
  | "home_page___ctaStack___internal___description"
  | "home_page___ctaStack___internal___fieldOwners"
  | "home_page___ctaStack___internal___ignoreType"
  | "home_page___ctaStack___internal___mediaType"
  | "home_page___ctaStack___internal___owner"
  | "home_page___ctaStack___internal___type"
  | "home_page___howWeHelpStack___contentful_id"
  | "home_page___howWeHelpStack___id"
  | "home_page___howWeHelpStack___node_locale"
  | "home_page___howWeHelpStack___cards"
  | "home_page___howWeHelpStack___cards___contentful_id"
  | "home_page___howWeHelpStack___cards___id"
  | "home_page___howWeHelpStack___cards___node_locale"
  | "home_page___howWeHelpStack___cards___title"
  | "home_page___howWeHelpStack___cards___internalLink"
  | "home_page___howWeHelpStack___cards___stack"
  | "home_page___howWeHelpStack___cards___spaceId"
  | "home_page___howWeHelpStack___cards___createdAt"
  | "home_page___howWeHelpStack___cards___updatedAt"
  | "home_page___howWeHelpStack___cards___services_page"
  | "home_page___howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___howWeHelpStack___cards___children"
  | "home_page___howWeHelpStack___home_page"
  | "home_page___howWeHelpStack___home_page___contentful_id"
  | "home_page___howWeHelpStack___home_page___id"
  | "home_page___howWeHelpStack___home_page___node_locale"
  | "home_page___howWeHelpStack___home_page___slug"
  | "home_page___howWeHelpStack___home_page___testimonialSlides"
  | "home_page___howWeHelpStack___home_page___spaceId"
  | "home_page___howWeHelpStack___home_page___createdAt"
  | "home_page___howWeHelpStack___home_page___updatedAt"
  | "home_page___howWeHelpStack___home_page___children"
  | "home_page___howWeHelpStack___text___id"
  | "home_page___howWeHelpStack___text___children"
  | "home_page___howWeHelpStack___text___text"
  | "home_page___howWeHelpStack___text2___id"
  | "home_page___howWeHelpStack___text2___children"
  | "home_page___howWeHelpStack___text2___text2"
  | "home_page___howWeHelpStack___spaceId"
  | "home_page___howWeHelpStack___createdAt"
  | "home_page___howWeHelpStack___updatedAt"
  | "home_page___howWeHelpStack___sys___type"
  | "home_page___howWeHelpStack___sys___revision"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___parent___id"
  | "home_page___howWeHelpStack___parent___children"
  | "home_page___howWeHelpStack___children"
  | "home_page___howWeHelpStack___children___id"
  | "home_page___howWeHelpStack___children___children"
  | "home_page___howWeHelpStack___internal___content"
  | "home_page___howWeHelpStack___internal___contentDigest"
  | "home_page___howWeHelpStack___internal___description"
  | "home_page___howWeHelpStack___internal___fieldOwners"
  | "home_page___howWeHelpStack___internal___ignoreType"
  | "home_page___howWeHelpStack___internal___mediaType"
  | "home_page___howWeHelpStack___internal___owner"
  | "home_page___howWeHelpStack___internal___type"
  | "home_page___testimonialSlides"
  | "home_page___testimonialSlides___contentful_id"
  | "home_page___testimonialSlides___id"
  | "home_page___testimonialSlides___node_locale"
  | "home_page___testimonialSlides___name"
  | "home_page___testimonialSlides___jobTitle"
  | "home_page___testimonialSlides___companyName"
  | "home_page___testimonialSlides___image___contentful_id"
  | "home_page___testimonialSlides___image___id"
  | "home_page___testimonialSlides___image___spaceId"
  | "home_page___testimonialSlides___image___createdAt"
  | "home_page___testimonialSlides___image___updatedAt"
  | "home_page___testimonialSlides___image___title"
  | "home_page___testimonialSlides___image___description"
  | "home_page___testimonialSlides___image___node_locale"
  | "home_page___testimonialSlides___image___gatsbyImageData"
  | "home_page___testimonialSlides___image___children"
  | "home_page___testimonialSlides___home_page"
  | "home_page___testimonialSlides___home_page___contentful_id"
  | "home_page___testimonialSlides___home_page___id"
  | "home_page___testimonialSlides___home_page___node_locale"
  | "home_page___testimonialSlides___home_page___slug"
  | "home_page___testimonialSlides___home_page___testimonialSlides"
  | "home_page___testimonialSlides___home_page___spaceId"
  | "home_page___testimonialSlides___home_page___createdAt"
  | "home_page___testimonialSlides___home_page___updatedAt"
  | "home_page___testimonialSlides___home_page___children"
  | "home_page___testimonialSlides___testimony___id"
  | "home_page___testimonialSlides___testimony___children"
  | "home_page___testimonialSlides___testimony___testimony"
  | "home_page___testimonialSlides___spaceId"
  | "home_page___testimonialSlides___createdAt"
  | "home_page___testimonialSlides___updatedAt"
  | "home_page___testimonialSlides___sys___type"
  | "home_page___testimonialSlides___sys___revision"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___parent___id"
  | "home_page___testimonialSlides___parent___children"
  | "home_page___testimonialSlides___children"
  | "home_page___testimonialSlides___children___id"
  | "home_page___testimonialSlides___children___children"
  | "home_page___testimonialSlides___internal___content"
  | "home_page___testimonialSlides___internal___contentDigest"
  | "home_page___testimonialSlides___internal___description"
  | "home_page___testimonialSlides___internal___fieldOwners"
  | "home_page___testimonialSlides___internal___ignoreType"
  | "home_page___testimonialSlides___internal___mediaType"
  | "home_page___testimonialSlides___internal___owner"
  | "home_page___testimonialSlides___internal___type"
  | "home_page___carouselImages___contentful_id"
  | "home_page___carouselImages___id"
  | "home_page___carouselImages___node_locale"
  | "home_page___carouselImages___images"
  | "home_page___carouselImages___images___contentful_id"
  | "home_page___carouselImages___images___id"
  | "home_page___carouselImages___images___spaceId"
  | "home_page___carouselImages___images___createdAt"
  | "home_page___carouselImages___images___updatedAt"
  | "home_page___carouselImages___images___title"
  | "home_page___carouselImages___images___description"
  | "home_page___carouselImages___images___node_locale"
  | "home_page___carouselImages___images___gatsbyImageData"
  | "home_page___carouselImages___images___children"
  | "home_page___carouselImages___home_page"
  | "home_page___carouselImages___home_page___contentful_id"
  | "home_page___carouselImages___home_page___id"
  | "home_page___carouselImages___home_page___node_locale"
  | "home_page___carouselImages___home_page___slug"
  | "home_page___carouselImages___home_page___testimonialSlides"
  | "home_page___carouselImages___home_page___spaceId"
  | "home_page___carouselImages___home_page___createdAt"
  | "home_page___carouselImages___home_page___updatedAt"
  | "home_page___carouselImages___home_page___children"
  | "home_page___carouselImages___about_us_page"
  | "home_page___carouselImages___about_us_page___contentful_id"
  | "home_page___carouselImages___about_us_page___id"
  | "home_page___carouselImages___about_us_page___node_locale"
  | "home_page___carouselImages___about_us_page___slug"
  | "home_page___carouselImages___about_us_page___ourTeam"
  | "home_page___carouselImages___about_us_page___spaceId"
  | "home_page___carouselImages___about_us_page___createdAt"
  | "home_page___carouselImages___about_us_page___updatedAt"
  | "home_page___carouselImages___about_us_page___children"
  | "home_page___carouselImages___spaceId"
  | "home_page___carouselImages___createdAt"
  | "home_page___carouselImages___updatedAt"
  | "home_page___carouselImages___sys___type"
  | "home_page___carouselImages___sys___revision"
  | "home_page___carouselImages___parent___id"
  | "home_page___carouselImages___parent___children"
  | "home_page___carouselImages___children"
  | "home_page___carouselImages___children___id"
  | "home_page___carouselImages___children___children"
  | "home_page___carouselImages___internal___content"
  | "home_page___carouselImages___internal___contentDigest"
  | "home_page___carouselImages___internal___description"
  | "home_page___carouselImages___internal___fieldOwners"
  | "home_page___carouselImages___internal___ignoreType"
  | "home_page___carouselImages___internal___mediaType"
  | "home_page___carouselImages___internal___owner"
  | "home_page___carouselImages___internal___type"
  | "home_page___spaceId"
  | "home_page___createdAt"
  | "home_page___updatedAt"
  | "home_page___sys___type"
  | "home_page___sys___revision"
  | "home_page___parent___id"
  | "home_page___parent___parent___id"
  | "home_page___parent___parent___children"
  | "home_page___parent___children"
  | "home_page___parent___children___id"
  | "home_page___parent___children___children"
  | "home_page___parent___internal___content"
  | "home_page___parent___internal___contentDigest"
  | "home_page___parent___internal___description"
  | "home_page___parent___internal___fieldOwners"
  | "home_page___parent___internal___ignoreType"
  | "home_page___parent___internal___mediaType"
  | "home_page___parent___internal___owner"
  | "home_page___parent___internal___type"
  | "home_page___children"
  | "home_page___children___id"
  | "home_page___children___parent___id"
  | "home_page___children___parent___children"
  | "home_page___children___children"
  | "home_page___children___children___id"
  | "home_page___children___children___children"
  | "home_page___children___internal___content"
  | "home_page___children___internal___contentDigest"
  | "home_page___children___internal___description"
  | "home_page___children___internal___fieldOwners"
  | "home_page___children___internal___ignoreType"
  | "home_page___children___internal___mediaType"
  | "home_page___children___internal___owner"
  | "home_page___children___internal___type"
  | "home_page___internal___content"
  | "home_page___internal___contentDigest"
  | "home_page___internal___description"
  | "home_page___internal___fieldOwners"
  | "home_page___internal___ignoreType"
  | "home_page___internal___mediaType"
  | "home_page___internal___owner"
  | "home_page___internal___type"
  | "about_us_page"
  | "about_us_page___contentful_id"
  | "about_us_page___id"
  | "about_us_page___node_locale"
  | "about_us_page___slug"
  | "about_us_page___aboutUsBanner___contentful_id"
  | "about_us_page___aboutUsBanner___id"
  | "about_us_page___aboutUsBanner___node_locale"
  | "about_us_page___aboutUsBanner___heading"
  | "about_us_page___aboutUsBanner___subHeader"
  | "about_us_page___aboutUsBanner___backgroundImage___contentful_id"
  | "about_us_page___aboutUsBanner___backgroundImage___id"
  | "about_us_page___aboutUsBanner___backgroundImage___spaceId"
  | "about_us_page___aboutUsBanner___backgroundImage___createdAt"
  | "about_us_page___aboutUsBanner___backgroundImage___updatedAt"
  | "about_us_page___aboutUsBanner___backgroundImage___title"
  | "about_us_page___aboutUsBanner___backgroundImage___description"
  | "about_us_page___aboutUsBanner___backgroundImage___node_locale"
  | "about_us_page___aboutUsBanner___backgroundImage___gatsbyImageData"
  | "about_us_page___aboutUsBanner___backgroundImage___children"
  | "about_us_page___aboutUsBanner___community_page"
  | "about_us_page___aboutUsBanner___community_page___contentful_id"
  | "about_us_page___aboutUsBanner___community_page___id"
  | "about_us_page___aboutUsBanner___community_page___node_locale"
  | "about_us_page___aboutUsBanner___community_page___slug"
  | "about_us_page___aboutUsBanner___community_page___newsCards"
  | "about_us_page___aboutUsBanner___community_page___blogCards"
  | "about_us_page___aboutUsBanner___community_page___communityCards"
  | "about_us_page___aboutUsBanner___community_page___spaceId"
  | "about_us_page___aboutUsBanner___community_page___createdAt"
  | "about_us_page___aboutUsBanner___community_page___updatedAt"
  | "about_us_page___aboutUsBanner___community_page___children"
  | "about_us_page___aboutUsBanner___spaceId"
  | "about_us_page___aboutUsBanner___createdAt"
  | "about_us_page___aboutUsBanner___updatedAt"
  | "about_us_page___aboutUsBanner___sys___type"
  | "about_us_page___aboutUsBanner___sys___revision"
  | "about_us_page___aboutUsBanner___services_page"
  | "about_us_page___aboutUsBanner___services_page___contentful_id"
  | "about_us_page___aboutUsBanner___services_page___id"
  | "about_us_page___aboutUsBanner___services_page___node_locale"
  | "about_us_page___aboutUsBanner___services_page___slug"
  | "about_us_page___aboutUsBanner___services_page___serviceCards"
  | "about_us_page___aboutUsBanner___services_page___spaceId"
  | "about_us_page___aboutUsBanner___services_page___createdAt"
  | "about_us_page___aboutUsBanner___services_page___updatedAt"
  | "about_us_page___aboutUsBanner___services_page___children"
  | "about_us_page___aboutUsBanner___home_page"
  | "about_us_page___aboutUsBanner___home_page___contentful_id"
  | "about_us_page___aboutUsBanner___home_page___id"
  | "about_us_page___aboutUsBanner___home_page___node_locale"
  | "about_us_page___aboutUsBanner___home_page___slug"
  | "about_us_page___aboutUsBanner___home_page___testimonialSlides"
  | "about_us_page___aboutUsBanner___home_page___spaceId"
  | "about_us_page___aboutUsBanner___home_page___createdAt"
  | "about_us_page___aboutUsBanner___home_page___updatedAt"
  | "about_us_page___aboutUsBanner___home_page___children"
  | "about_us_page___aboutUsBanner___contact_page"
  | "about_us_page___aboutUsBanner___contact_page___contentful_id"
  | "about_us_page___aboutUsBanner___contact_page___id"
  | "about_us_page___aboutUsBanner___contact_page___node_locale"
  | "about_us_page___aboutUsBanner___contact_page___slug"
  | "about_us_page___aboutUsBanner___contact_page___spaceId"
  | "about_us_page___aboutUsBanner___contact_page___createdAt"
  | "about_us_page___aboutUsBanner___contact_page___updatedAt"
  | "about_us_page___aboutUsBanner___contact_page___children"
  | "about_us_page___aboutUsBanner___about_us_page"
  | "about_us_page___aboutUsBanner___about_us_page___contentful_id"
  | "about_us_page___aboutUsBanner___about_us_page___id"
  | "about_us_page___aboutUsBanner___about_us_page___node_locale"
  | "about_us_page___aboutUsBanner___about_us_page___slug"
  | "about_us_page___aboutUsBanner___about_us_page___ourTeam"
  | "about_us_page___aboutUsBanner___about_us_page___spaceId"
  | "about_us_page___aboutUsBanner___about_us_page___createdAt"
  | "about_us_page___aboutUsBanner___about_us_page___updatedAt"
  | "about_us_page___aboutUsBanner___about_us_page___children"
  | "about_us_page___aboutUsBanner___parent___id"
  | "about_us_page___aboutUsBanner___parent___children"
  | "about_us_page___aboutUsBanner___children"
  | "about_us_page___aboutUsBanner___children___id"
  | "about_us_page___aboutUsBanner___children___children"
  | "about_us_page___aboutUsBanner___internal___content"
  | "about_us_page___aboutUsBanner___internal___contentDigest"
  | "about_us_page___aboutUsBanner___internal___description"
  | "about_us_page___aboutUsBanner___internal___fieldOwners"
  | "about_us_page___aboutUsBanner___internal___ignoreType"
  | "about_us_page___aboutUsBanner___internal___mediaType"
  | "about_us_page___aboutUsBanner___internal___owner"
  | "about_us_page___aboutUsBanner___internal___type"
  | "about_us_page___whatWeDo___contentful_id"
  | "about_us_page___whatWeDo___id"
  | "about_us_page___whatWeDo___node_locale"
  | "about_us_page___whatWeDo___image___contentful_id"
  | "about_us_page___whatWeDo___image___id"
  | "about_us_page___whatWeDo___image___spaceId"
  | "about_us_page___whatWeDo___image___createdAt"
  | "about_us_page___whatWeDo___image___updatedAt"
  | "about_us_page___whatWeDo___image___title"
  | "about_us_page___whatWeDo___image___description"
  | "about_us_page___whatWeDo___image___node_locale"
  | "about_us_page___whatWeDo___image___gatsbyImageData"
  | "about_us_page___whatWeDo___image___children"
  | "about_us_page___whatWeDo___about_us_page"
  | "about_us_page___whatWeDo___about_us_page___contentful_id"
  | "about_us_page___whatWeDo___about_us_page___id"
  | "about_us_page___whatWeDo___about_us_page___node_locale"
  | "about_us_page___whatWeDo___about_us_page___slug"
  | "about_us_page___whatWeDo___about_us_page___ourTeam"
  | "about_us_page___whatWeDo___about_us_page___spaceId"
  | "about_us_page___whatWeDo___about_us_page___createdAt"
  | "about_us_page___whatWeDo___about_us_page___updatedAt"
  | "about_us_page___whatWeDo___about_us_page___children"
  | "about_us_page___whatWeDo___text___id"
  | "about_us_page___whatWeDo___text___children"
  | "about_us_page___whatWeDo___text___text"
  | "about_us_page___whatWeDo___spaceId"
  | "about_us_page___whatWeDo___createdAt"
  | "about_us_page___whatWeDo___updatedAt"
  | "about_us_page___whatWeDo___sys___type"
  | "about_us_page___whatWeDo___sys___revision"
  | "about_us_page___whatWeDo___home_page"
  | "about_us_page___whatWeDo___home_page___contentful_id"
  | "about_us_page___whatWeDo___home_page___id"
  | "about_us_page___whatWeDo___home_page___node_locale"
  | "about_us_page___whatWeDo___home_page___slug"
  | "about_us_page___whatWeDo___home_page___testimonialSlides"
  | "about_us_page___whatWeDo___home_page___spaceId"
  | "about_us_page___whatWeDo___home_page___createdAt"
  | "about_us_page___whatWeDo___home_page___updatedAt"
  | "about_us_page___whatWeDo___home_page___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___parent___id"
  | "about_us_page___whatWeDo___parent___children"
  | "about_us_page___whatWeDo___children"
  | "about_us_page___whatWeDo___children___id"
  | "about_us_page___whatWeDo___children___children"
  | "about_us_page___whatWeDo___internal___content"
  | "about_us_page___whatWeDo___internal___contentDigest"
  | "about_us_page___whatWeDo___internal___description"
  | "about_us_page___whatWeDo___internal___fieldOwners"
  | "about_us_page___whatWeDo___internal___ignoreType"
  | "about_us_page___whatWeDo___internal___mediaType"
  | "about_us_page___whatWeDo___internal___owner"
  | "about_us_page___whatWeDo___internal___type"
  | "about_us_page___carouselImages___contentful_id"
  | "about_us_page___carouselImages___id"
  | "about_us_page___carouselImages___node_locale"
  | "about_us_page___carouselImages___images"
  | "about_us_page___carouselImages___images___contentful_id"
  | "about_us_page___carouselImages___images___id"
  | "about_us_page___carouselImages___images___spaceId"
  | "about_us_page___carouselImages___images___createdAt"
  | "about_us_page___carouselImages___images___updatedAt"
  | "about_us_page___carouselImages___images___title"
  | "about_us_page___carouselImages___images___description"
  | "about_us_page___carouselImages___images___node_locale"
  | "about_us_page___carouselImages___images___gatsbyImageData"
  | "about_us_page___carouselImages___images___children"
  | "about_us_page___carouselImages___home_page"
  | "about_us_page___carouselImages___home_page___contentful_id"
  | "about_us_page___carouselImages___home_page___id"
  | "about_us_page___carouselImages___home_page___node_locale"
  | "about_us_page___carouselImages___home_page___slug"
  | "about_us_page___carouselImages___home_page___testimonialSlides"
  | "about_us_page___carouselImages___home_page___spaceId"
  | "about_us_page___carouselImages___home_page___createdAt"
  | "about_us_page___carouselImages___home_page___updatedAt"
  | "about_us_page___carouselImages___home_page___children"
  | "about_us_page___carouselImages___about_us_page"
  | "about_us_page___carouselImages___about_us_page___contentful_id"
  | "about_us_page___carouselImages___about_us_page___id"
  | "about_us_page___carouselImages___about_us_page___node_locale"
  | "about_us_page___carouselImages___about_us_page___slug"
  | "about_us_page___carouselImages___about_us_page___ourTeam"
  | "about_us_page___carouselImages___about_us_page___spaceId"
  | "about_us_page___carouselImages___about_us_page___createdAt"
  | "about_us_page___carouselImages___about_us_page___updatedAt"
  | "about_us_page___carouselImages___about_us_page___children"
  | "about_us_page___carouselImages___spaceId"
  | "about_us_page___carouselImages___createdAt"
  | "about_us_page___carouselImages___updatedAt"
  | "about_us_page___carouselImages___sys___type"
  | "about_us_page___carouselImages___sys___revision"
  | "about_us_page___carouselImages___parent___id"
  | "about_us_page___carouselImages___parent___children"
  | "about_us_page___carouselImages___children"
  | "about_us_page___carouselImages___children___id"
  | "about_us_page___carouselImages___children___children"
  | "about_us_page___carouselImages___internal___content"
  | "about_us_page___carouselImages___internal___contentDigest"
  | "about_us_page___carouselImages___internal___description"
  | "about_us_page___carouselImages___internal___fieldOwners"
  | "about_us_page___carouselImages___internal___ignoreType"
  | "about_us_page___carouselImages___internal___mediaType"
  | "about_us_page___carouselImages___internal___owner"
  | "about_us_page___carouselImages___internal___type"
  | "about_us_page___ourTeam"
  | "about_us_page___ourTeam___contentful_id"
  | "about_us_page___ourTeam___id"
  | "about_us_page___ourTeam___node_locale"
  | "about_us_page___ourTeam___name"
  | "about_us_page___ourTeam___jobTitle"
  | "about_us_page___ourTeam___cardSize"
  | "about_us_page___ourTeam___employeeImage___contentful_id"
  | "about_us_page___ourTeam___employeeImage___id"
  | "about_us_page___ourTeam___employeeImage___spaceId"
  | "about_us_page___ourTeam___employeeImage___createdAt"
  | "about_us_page___ourTeam___employeeImage___updatedAt"
  | "about_us_page___ourTeam___employeeImage___title"
  | "about_us_page___ourTeam___employeeImage___description"
  | "about_us_page___ourTeam___employeeImage___node_locale"
  | "about_us_page___ourTeam___employeeImage___gatsbyImageData"
  | "about_us_page___ourTeam___employeeImage___children"
  | "about_us_page___ourTeam___about_us_page"
  | "about_us_page___ourTeam___about_us_page___contentful_id"
  | "about_us_page___ourTeam___about_us_page___id"
  | "about_us_page___ourTeam___about_us_page___node_locale"
  | "about_us_page___ourTeam___about_us_page___slug"
  | "about_us_page___ourTeam___about_us_page___ourTeam"
  | "about_us_page___ourTeam___about_us_page___spaceId"
  | "about_us_page___ourTeam___about_us_page___createdAt"
  | "about_us_page___ourTeam___about_us_page___updatedAt"
  | "about_us_page___ourTeam___about_us_page___children"
  | "about_us_page___ourTeam___description___id"
  | "about_us_page___ourTeam___description___children"
  | "about_us_page___ourTeam___description___description"
  | "about_us_page___ourTeam___spaceId"
  | "about_us_page___ourTeam___createdAt"
  | "about_us_page___ourTeam___updatedAt"
  | "about_us_page___ourTeam___sys___type"
  | "about_us_page___ourTeam___sys___revision"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___parent___id"
  | "about_us_page___ourTeam___parent___children"
  | "about_us_page___ourTeam___children"
  | "about_us_page___ourTeam___children___id"
  | "about_us_page___ourTeam___children___children"
  | "about_us_page___ourTeam___internal___content"
  | "about_us_page___ourTeam___internal___contentDigest"
  | "about_us_page___ourTeam___internal___description"
  | "about_us_page___ourTeam___internal___fieldOwners"
  | "about_us_page___ourTeam___internal___ignoreType"
  | "about_us_page___ourTeam___internal___mediaType"
  | "about_us_page___ourTeam___internal___owner"
  | "about_us_page___ourTeam___internal___type"
  | "about_us_page___spaceId"
  | "about_us_page___createdAt"
  | "about_us_page___updatedAt"
  | "about_us_page___sys___type"
  | "about_us_page___sys___revision"
  | "about_us_page___parent___id"
  | "about_us_page___parent___parent___id"
  | "about_us_page___parent___parent___children"
  | "about_us_page___parent___children"
  | "about_us_page___parent___children___id"
  | "about_us_page___parent___children___children"
  | "about_us_page___parent___internal___content"
  | "about_us_page___parent___internal___contentDigest"
  | "about_us_page___parent___internal___description"
  | "about_us_page___parent___internal___fieldOwners"
  | "about_us_page___parent___internal___ignoreType"
  | "about_us_page___parent___internal___mediaType"
  | "about_us_page___parent___internal___owner"
  | "about_us_page___parent___internal___type"
  | "about_us_page___children"
  | "about_us_page___children___id"
  | "about_us_page___children___parent___id"
  | "about_us_page___children___parent___children"
  | "about_us_page___children___children"
  | "about_us_page___children___children___id"
  | "about_us_page___children___children___children"
  | "about_us_page___children___internal___content"
  | "about_us_page___children___internal___contentDigest"
  | "about_us_page___children___internal___description"
  | "about_us_page___children___internal___fieldOwners"
  | "about_us_page___children___internal___ignoreType"
  | "about_us_page___children___internal___mediaType"
  | "about_us_page___children___internal___owner"
  | "about_us_page___children___internal___type"
  | "about_us_page___internal___content"
  | "about_us_page___internal___contentDigest"
  | "about_us_page___internal___description"
  | "about_us_page___internal___fieldOwners"
  | "about_us_page___internal___ignoreType"
  | "about_us_page___internal___mediaType"
  | "about_us_page___internal___owner"
  | "about_us_page___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulCarouselImagesGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulCarouselImagesEdge>
  nodes: Array<ContentfulCarouselImages>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulCarouselImagesSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCarouselImagesFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulEmployeeCardConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulEmployeeCardEdge>
  nodes: Array<ContentfulEmployeeCard>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulEmployeeCardGroupConnection>
}

export type ContentfulEmployeeCardConnectionDistinctArgs = {
  field: ContentfulEmployeeCardFieldsEnum
}

export type ContentfulEmployeeCardConnectionMaxArgs = {
  field: ContentfulEmployeeCardFieldsEnum
}

export type ContentfulEmployeeCardConnectionMinArgs = {
  field: ContentfulEmployeeCardFieldsEnum
}

export type ContentfulEmployeeCardConnectionSumArgs = {
  field: ContentfulEmployeeCardFieldsEnum
}

export type ContentfulEmployeeCardConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulEmployeeCardFieldsEnum
}

export type ContentfulEmployeeCardEdge = {
  next?: Maybe<ContentfulEmployeeCard>
  node: ContentfulEmployeeCard
  previous?: Maybe<ContentfulEmployeeCard>
}

export type ContentfulEmployeeCardFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "name"
  | "jobTitle"
  | "cardSize"
  | "employeeImage___contentful_id"
  | "employeeImage___id"
  | "employeeImage___spaceId"
  | "employeeImage___createdAt"
  | "employeeImage___updatedAt"
  | "employeeImage___file___url"
  | "employeeImage___file___details___size"
  | "employeeImage___file___fileName"
  | "employeeImage___file___contentType"
  | "employeeImage___title"
  | "employeeImage___description"
  | "employeeImage___node_locale"
  | "employeeImage___sys___type"
  | "employeeImage___sys___revision"
  | "employeeImage___fixed___base64"
  | "employeeImage___fixed___tracedSVG"
  | "employeeImage___fixed___aspectRatio"
  | "employeeImage___fixed___width"
  | "employeeImage___fixed___height"
  | "employeeImage___fixed___src"
  | "employeeImage___fixed___srcSet"
  | "employeeImage___fixed___srcWebp"
  | "employeeImage___fixed___srcSetWebp"
  | "employeeImage___fluid___base64"
  | "employeeImage___fluid___tracedSVG"
  | "employeeImage___fluid___aspectRatio"
  | "employeeImage___fluid___src"
  | "employeeImage___fluid___srcSet"
  | "employeeImage___fluid___srcWebp"
  | "employeeImage___fluid___srcSetWebp"
  | "employeeImage___fluid___sizes"
  | "employeeImage___gatsbyImageData"
  | "employeeImage___resize___base64"
  | "employeeImage___resize___tracedSVG"
  | "employeeImage___resize___src"
  | "employeeImage___resize___width"
  | "employeeImage___resize___height"
  | "employeeImage___resize___aspectRatio"
  | "employeeImage___parent___id"
  | "employeeImage___parent___parent___id"
  | "employeeImage___parent___parent___children"
  | "employeeImage___parent___children"
  | "employeeImage___parent___children___id"
  | "employeeImage___parent___children___children"
  | "employeeImage___parent___internal___content"
  | "employeeImage___parent___internal___contentDigest"
  | "employeeImage___parent___internal___description"
  | "employeeImage___parent___internal___fieldOwners"
  | "employeeImage___parent___internal___ignoreType"
  | "employeeImage___parent___internal___mediaType"
  | "employeeImage___parent___internal___owner"
  | "employeeImage___parent___internal___type"
  | "employeeImage___children"
  | "employeeImage___children___id"
  | "employeeImage___children___parent___id"
  | "employeeImage___children___parent___children"
  | "employeeImage___children___children"
  | "employeeImage___children___children___id"
  | "employeeImage___children___children___children"
  | "employeeImage___children___internal___content"
  | "employeeImage___children___internal___contentDigest"
  | "employeeImage___children___internal___description"
  | "employeeImage___children___internal___fieldOwners"
  | "employeeImage___children___internal___ignoreType"
  | "employeeImage___children___internal___mediaType"
  | "employeeImage___children___internal___owner"
  | "employeeImage___children___internal___type"
  | "employeeImage___internal___content"
  | "employeeImage___internal___contentDigest"
  | "employeeImage___internal___description"
  | "employeeImage___internal___fieldOwners"
  | "employeeImage___internal___ignoreType"
  | "employeeImage___internal___mediaType"
  | "employeeImage___internal___owner"
  | "employeeImage___internal___type"
  | "about_us_page"
  | "about_us_page___contentful_id"
  | "about_us_page___id"
  | "about_us_page___node_locale"
  | "about_us_page___slug"
  | "about_us_page___aboutUsBanner___contentful_id"
  | "about_us_page___aboutUsBanner___id"
  | "about_us_page___aboutUsBanner___node_locale"
  | "about_us_page___aboutUsBanner___heading"
  | "about_us_page___aboutUsBanner___subHeader"
  | "about_us_page___aboutUsBanner___backgroundImage___contentful_id"
  | "about_us_page___aboutUsBanner___backgroundImage___id"
  | "about_us_page___aboutUsBanner___backgroundImage___spaceId"
  | "about_us_page___aboutUsBanner___backgroundImage___createdAt"
  | "about_us_page___aboutUsBanner___backgroundImage___updatedAt"
  | "about_us_page___aboutUsBanner___backgroundImage___title"
  | "about_us_page___aboutUsBanner___backgroundImage___description"
  | "about_us_page___aboutUsBanner___backgroundImage___node_locale"
  | "about_us_page___aboutUsBanner___backgroundImage___gatsbyImageData"
  | "about_us_page___aboutUsBanner___backgroundImage___children"
  | "about_us_page___aboutUsBanner___community_page"
  | "about_us_page___aboutUsBanner___community_page___contentful_id"
  | "about_us_page___aboutUsBanner___community_page___id"
  | "about_us_page___aboutUsBanner___community_page___node_locale"
  | "about_us_page___aboutUsBanner___community_page___slug"
  | "about_us_page___aboutUsBanner___community_page___newsCards"
  | "about_us_page___aboutUsBanner___community_page___blogCards"
  | "about_us_page___aboutUsBanner___community_page___communityCards"
  | "about_us_page___aboutUsBanner___community_page___spaceId"
  | "about_us_page___aboutUsBanner___community_page___createdAt"
  | "about_us_page___aboutUsBanner___community_page___updatedAt"
  | "about_us_page___aboutUsBanner___community_page___children"
  | "about_us_page___aboutUsBanner___spaceId"
  | "about_us_page___aboutUsBanner___createdAt"
  | "about_us_page___aboutUsBanner___updatedAt"
  | "about_us_page___aboutUsBanner___sys___type"
  | "about_us_page___aboutUsBanner___sys___revision"
  | "about_us_page___aboutUsBanner___services_page"
  | "about_us_page___aboutUsBanner___services_page___contentful_id"
  | "about_us_page___aboutUsBanner___services_page___id"
  | "about_us_page___aboutUsBanner___services_page___node_locale"
  | "about_us_page___aboutUsBanner___services_page___slug"
  | "about_us_page___aboutUsBanner___services_page___serviceCards"
  | "about_us_page___aboutUsBanner___services_page___spaceId"
  | "about_us_page___aboutUsBanner___services_page___createdAt"
  | "about_us_page___aboutUsBanner___services_page___updatedAt"
  | "about_us_page___aboutUsBanner___services_page___children"
  | "about_us_page___aboutUsBanner___home_page"
  | "about_us_page___aboutUsBanner___home_page___contentful_id"
  | "about_us_page___aboutUsBanner___home_page___id"
  | "about_us_page___aboutUsBanner___home_page___node_locale"
  | "about_us_page___aboutUsBanner___home_page___slug"
  | "about_us_page___aboutUsBanner___home_page___testimonialSlides"
  | "about_us_page___aboutUsBanner___home_page___spaceId"
  | "about_us_page___aboutUsBanner___home_page___createdAt"
  | "about_us_page___aboutUsBanner___home_page___updatedAt"
  | "about_us_page___aboutUsBanner___home_page___children"
  | "about_us_page___aboutUsBanner___contact_page"
  | "about_us_page___aboutUsBanner___contact_page___contentful_id"
  | "about_us_page___aboutUsBanner___contact_page___id"
  | "about_us_page___aboutUsBanner___contact_page___node_locale"
  | "about_us_page___aboutUsBanner___contact_page___slug"
  | "about_us_page___aboutUsBanner___contact_page___spaceId"
  | "about_us_page___aboutUsBanner___contact_page___createdAt"
  | "about_us_page___aboutUsBanner___contact_page___updatedAt"
  | "about_us_page___aboutUsBanner___contact_page___children"
  | "about_us_page___aboutUsBanner___about_us_page"
  | "about_us_page___aboutUsBanner___about_us_page___contentful_id"
  | "about_us_page___aboutUsBanner___about_us_page___id"
  | "about_us_page___aboutUsBanner___about_us_page___node_locale"
  | "about_us_page___aboutUsBanner___about_us_page___slug"
  | "about_us_page___aboutUsBanner___about_us_page___ourTeam"
  | "about_us_page___aboutUsBanner___about_us_page___spaceId"
  | "about_us_page___aboutUsBanner___about_us_page___createdAt"
  | "about_us_page___aboutUsBanner___about_us_page___updatedAt"
  | "about_us_page___aboutUsBanner___about_us_page___children"
  | "about_us_page___aboutUsBanner___parent___id"
  | "about_us_page___aboutUsBanner___parent___children"
  | "about_us_page___aboutUsBanner___children"
  | "about_us_page___aboutUsBanner___children___id"
  | "about_us_page___aboutUsBanner___children___children"
  | "about_us_page___aboutUsBanner___internal___content"
  | "about_us_page___aboutUsBanner___internal___contentDigest"
  | "about_us_page___aboutUsBanner___internal___description"
  | "about_us_page___aboutUsBanner___internal___fieldOwners"
  | "about_us_page___aboutUsBanner___internal___ignoreType"
  | "about_us_page___aboutUsBanner___internal___mediaType"
  | "about_us_page___aboutUsBanner___internal___owner"
  | "about_us_page___aboutUsBanner___internal___type"
  | "about_us_page___whatWeDo___contentful_id"
  | "about_us_page___whatWeDo___id"
  | "about_us_page___whatWeDo___node_locale"
  | "about_us_page___whatWeDo___image___contentful_id"
  | "about_us_page___whatWeDo___image___id"
  | "about_us_page___whatWeDo___image___spaceId"
  | "about_us_page___whatWeDo___image___createdAt"
  | "about_us_page___whatWeDo___image___updatedAt"
  | "about_us_page___whatWeDo___image___title"
  | "about_us_page___whatWeDo___image___description"
  | "about_us_page___whatWeDo___image___node_locale"
  | "about_us_page___whatWeDo___image___gatsbyImageData"
  | "about_us_page___whatWeDo___image___children"
  | "about_us_page___whatWeDo___about_us_page"
  | "about_us_page___whatWeDo___about_us_page___contentful_id"
  | "about_us_page___whatWeDo___about_us_page___id"
  | "about_us_page___whatWeDo___about_us_page___node_locale"
  | "about_us_page___whatWeDo___about_us_page___slug"
  | "about_us_page___whatWeDo___about_us_page___ourTeam"
  | "about_us_page___whatWeDo___about_us_page___spaceId"
  | "about_us_page___whatWeDo___about_us_page___createdAt"
  | "about_us_page___whatWeDo___about_us_page___updatedAt"
  | "about_us_page___whatWeDo___about_us_page___children"
  | "about_us_page___whatWeDo___text___id"
  | "about_us_page___whatWeDo___text___children"
  | "about_us_page___whatWeDo___text___text"
  | "about_us_page___whatWeDo___spaceId"
  | "about_us_page___whatWeDo___createdAt"
  | "about_us_page___whatWeDo___updatedAt"
  | "about_us_page___whatWeDo___sys___type"
  | "about_us_page___whatWeDo___sys___revision"
  | "about_us_page___whatWeDo___home_page"
  | "about_us_page___whatWeDo___home_page___contentful_id"
  | "about_us_page___whatWeDo___home_page___id"
  | "about_us_page___whatWeDo___home_page___node_locale"
  | "about_us_page___whatWeDo___home_page___slug"
  | "about_us_page___whatWeDo___home_page___testimonialSlides"
  | "about_us_page___whatWeDo___home_page___spaceId"
  | "about_us_page___whatWeDo___home_page___createdAt"
  | "about_us_page___whatWeDo___home_page___updatedAt"
  | "about_us_page___whatWeDo___home_page___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___id"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___children"
  | "about_us_page___whatWeDo___childContentfulTextAndImageTextTextNode___text"
  | "about_us_page___whatWeDo___parent___id"
  | "about_us_page___whatWeDo___parent___children"
  | "about_us_page___whatWeDo___children"
  | "about_us_page___whatWeDo___children___id"
  | "about_us_page___whatWeDo___children___children"
  | "about_us_page___whatWeDo___internal___content"
  | "about_us_page___whatWeDo___internal___contentDigest"
  | "about_us_page___whatWeDo___internal___description"
  | "about_us_page___whatWeDo___internal___fieldOwners"
  | "about_us_page___whatWeDo___internal___ignoreType"
  | "about_us_page___whatWeDo___internal___mediaType"
  | "about_us_page___whatWeDo___internal___owner"
  | "about_us_page___whatWeDo___internal___type"
  | "about_us_page___carouselImages___contentful_id"
  | "about_us_page___carouselImages___id"
  | "about_us_page___carouselImages___node_locale"
  | "about_us_page___carouselImages___images"
  | "about_us_page___carouselImages___images___contentful_id"
  | "about_us_page___carouselImages___images___id"
  | "about_us_page___carouselImages___images___spaceId"
  | "about_us_page___carouselImages___images___createdAt"
  | "about_us_page___carouselImages___images___updatedAt"
  | "about_us_page___carouselImages___images___title"
  | "about_us_page___carouselImages___images___description"
  | "about_us_page___carouselImages___images___node_locale"
  | "about_us_page___carouselImages___images___gatsbyImageData"
  | "about_us_page___carouselImages___images___children"
  | "about_us_page___carouselImages___home_page"
  | "about_us_page___carouselImages___home_page___contentful_id"
  | "about_us_page___carouselImages___home_page___id"
  | "about_us_page___carouselImages___home_page___node_locale"
  | "about_us_page___carouselImages___home_page___slug"
  | "about_us_page___carouselImages___home_page___testimonialSlides"
  | "about_us_page___carouselImages___home_page___spaceId"
  | "about_us_page___carouselImages___home_page___createdAt"
  | "about_us_page___carouselImages___home_page___updatedAt"
  | "about_us_page___carouselImages___home_page___children"
  | "about_us_page___carouselImages___about_us_page"
  | "about_us_page___carouselImages___about_us_page___contentful_id"
  | "about_us_page___carouselImages___about_us_page___id"
  | "about_us_page___carouselImages___about_us_page___node_locale"
  | "about_us_page___carouselImages___about_us_page___slug"
  | "about_us_page___carouselImages___about_us_page___ourTeam"
  | "about_us_page___carouselImages___about_us_page___spaceId"
  | "about_us_page___carouselImages___about_us_page___createdAt"
  | "about_us_page___carouselImages___about_us_page___updatedAt"
  | "about_us_page___carouselImages___about_us_page___children"
  | "about_us_page___carouselImages___spaceId"
  | "about_us_page___carouselImages___createdAt"
  | "about_us_page___carouselImages___updatedAt"
  | "about_us_page___carouselImages___sys___type"
  | "about_us_page___carouselImages___sys___revision"
  | "about_us_page___carouselImages___parent___id"
  | "about_us_page___carouselImages___parent___children"
  | "about_us_page___carouselImages___children"
  | "about_us_page___carouselImages___children___id"
  | "about_us_page___carouselImages___children___children"
  | "about_us_page___carouselImages___internal___content"
  | "about_us_page___carouselImages___internal___contentDigest"
  | "about_us_page___carouselImages___internal___description"
  | "about_us_page___carouselImages___internal___fieldOwners"
  | "about_us_page___carouselImages___internal___ignoreType"
  | "about_us_page___carouselImages___internal___mediaType"
  | "about_us_page___carouselImages___internal___owner"
  | "about_us_page___carouselImages___internal___type"
  | "about_us_page___ourTeam"
  | "about_us_page___ourTeam___contentful_id"
  | "about_us_page___ourTeam___id"
  | "about_us_page___ourTeam___node_locale"
  | "about_us_page___ourTeam___name"
  | "about_us_page___ourTeam___jobTitle"
  | "about_us_page___ourTeam___cardSize"
  | "about_us_page___ourTeam___employeeImage___contentful_id"
  | "about_us_page___ourTeam___employeeImage___id"
  | "about_us_page___ourTeam___employeeImage___spaceId"
  | "about_us_page___ourTeam___employeeImage___createdAt"
  | "about_us_page___ourTeam___employeeImage___updatedAt"
  | "about_us_page___ourTeam___employeeImage___title"
  | "about_us_page___ourTeam___employeeImage___description"
  | "about_us_page___ourTeam___employeeImage___node_locale"
  | "about_us_page___ourTeam___employeeImage___gatsbyImageData"
  | "about_us_page___ourTeam___employeeImage___children"
  | "about_us_page___ourTeam___about_us_page"
  | "about_us_page___ourTeam___about_us_page___contentful_id"
  | "about_us_page___ourTeam___about_us_page___id"
  | "about_us_page___ourTeam___about_us_page___node_locale"
  | "about_us_page___ourTeam___about_us_page___slug"
  | "about_us_page___ourTeam___about_us_page___ourTeam"
  | "about_us_page___ourTeam___about_us_page___spaceId"
  | "about_us_page___ourTeam___about_us_page___createdAt"
  | "about_us_page___ourTeam___about_us_page___updatedAt"
  | "about_us_page___ourTeam___about_us_page___children"
  | "about_us_page___ourTeam___description___id"
  | "about_us_page___ourTeam___description___children"
  | "about_us_page___ourTeam___description___description"
  | "about_us_page___ourTeam___spaceId"
  | "about_us_page___ourTeam___createdAt"
  | "about_us_page___ourTeam___updatedAt"
  | "about_us_page___ourTeam___sys___type"
  | "about_us_page___ourTeam___sys___revision"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___id"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___children"
  | "about_us_page___ourTeam___childContentfulEmployeeCardDescriptionTextNode___description"
  | "about_us_page___ourTeam___parent___id"
  | "about_us_page___ourTeam___parent___children"
  | "about_us_page___ourTeam___children"
  | "about_us_page___ourTeam___children___id"
  | "about_us_page___ourTeam___children___children"
  | "about_us_page___ourTeam___internal___content"
  | "about_us_page___ourTeam___internal___contentDigest"
  | "about_us_page___ourTeam___internal___description"
  | "about_us_page___ourTeam___internal___fieldOwners"
  | "about_us_page___ourTeam___internal___ignoreType"
  | "about_us_page___ourTeam___internal___mediaType"
  | "about_us_page___ourTeam___internal___owner"
  | "about_us_page___ourTeam___internal___type"
  | "about_us_page___spaceId"
  | "about_us_page___createdAt"
  | "about_us_page___updatedAt"
  | "about_us_page___sys___type"
  | "about_us_page___sys___revision"
  | "about_us_page___parent___id"
  | "about_us_page___parent___parent___id"
  | "about_us_page___parent___parent___children"
  | "about_us_page___parent___children"
  | "about_us_page___parent___children___id"
  | "about_us_page___parent___children___children"
  | "about_us_page___parent___internal___content"
  | "about_us_page___parent___internal___contentDigest"
  | "about_us_page___parent___internal___description"
  | "about_us_page___parent___internal___fieldOwners"
  | "about_us_page___parent___internal___ignoreType"
  | "about_us_page___parent___internal___mediaType"
  | "about_us_page___parent___internal___owner"
  | "about_us_page___parent___internal___type"
  | "about_us_page___children"
  | "about_us_page___children___id"
  | "about_us_page___children___parent___id"
  | "about_us_page___children___parent___children"
  | "about_us_page___children___children"
  | "about_us_page___children___children___id"
  | "about_us_page___children___children___children"
  | "about_us_page___children___internal___content"
  | "about_us_page___children___internal___contentDigest"
  | "about_us_page___children___internal___description"
  | "about_us_page___children___internal___fieldOwners"
  | "about_us_page___children___internal___ignoreType"
  | "about_us_page___children___internal___mediaType"
  | "about_us_page___children___internal___owner"
  | "about_us_page___children___internal___type"
  | "about_us_page___internal___content"
  | "about_us_page___internal___contentDigest"
  | "about_us_page___internal___description"
  | "about_us_page___internal___fieldOwners"
  | "about_us_page___internal___ignoreType"
  | "about_us_page___internal___mediaType"
  | "about_us_page___internal___owner"
  | "about_us_page___internal___type"
  | "description___id"
  | "description___parent___id"
  | "description___parent___parent___id"
  | "description___parent___parent___children"
  | "description___parent___children"
  | "description___parent___children___id"
  | "description___parent___children___children"
  | "description___parent___internal___content"
  | "description___parent___internal___contentDigest"
  | "description___parent___internal___description"
  | "description___parent___internal___fieldOwners"
  | "description___parent___internal___ignoreType"
  | "description___parent___internal___mediaType"
  | "description___parent___internal___owner"
  | "description___parent___internal___type"
  | "description___children"
  | "description___children___id"
  | "description___children___parent___id"
  | "description___children___parent___children"
  | "description___children___children"
  | "description___children___children___id"
  | "description___children___children___children"
  | "description___children___internal___content"
  | "description___children___internal___contentDigest"
  | "description___children___internal___description"
  | "description___children___internal___fieldOwners"
  | "description___children___internal___ignoreType"
  | "description___children___internal___mediaType"
  | "description___children___internal___owner"
  | "description___children___internal___type"
  | "description___internal___content"
  | "description___internal___contentDigest"
  | "description___internal___description"
  | "description___internal___fieldOwners"
  | "description___internal___ignoreType"
  | "description___internal___mediaType"
  | "description___internal___owner"
  | "description___internal___type"
  | "description___description"
  | "description___sys___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode"
  | "childrenContentfulEmployeeCardDescriptionTextNode___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___parent___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___parent___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___children___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___children___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___content"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___contentDigest"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___description"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___fieldOwners"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___ignoreType"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___mediaType"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___owner"
  | "childrenContentfulEmployeeCardDescriptionTextNode___parent___internal___type"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___parent___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___parent___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___children___id"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___children___children"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___content"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___contentDigest"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___description"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___fieldOwners"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___ignoreType"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___mediaType"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___owner"
  | "childrenContentfulEmployeeCardDescriptionTextNode___children___internal___type"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___content"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___contentDigest"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___description"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___fieldOwners"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___ignoreType"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___mediaType"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___owner"
  | "childrenContentfulEmployeeCardDescriptionTextNode___internal___type"
  | "childrenContentfulEmployeeCardDescriptionTextNode___description"
  | "childrenContentfulEmployeeCardDescriptionTextNode___sys___type"
  | "childContentfulEmployeeCardDescriptionTextNode___id"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___id"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___parent___id"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___parent___children"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___children"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___children___id"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___children___children"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___content"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___contentDigest"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___description"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___fieldOwners"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___ignoreType"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___mediaType"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___owner"
  | "childContentfulEmployeeCardDescriptionTextNode___parent___internal___type"
  | "childContentfulEmployeeCardDescriptionTextNode___children"
  | "childContentfulEmployeeCardDescriptionTextNode___children___id"
  | "childContentfulEmployeeCardDescriptionTextNode___children___parent___id"
  | "childContentfulEmployeeCardDescriptionTextNode___children___parent___children"
  | "childContentfulEmployeeCardDescriptionTextNode___children___children"
  | "childContentfulEmployeeCardDescriptionTextNode___children___children___id"
  | "childContentfulEmployeeCardDescriptionTextNode___children___children___children"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___content"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___contentDigest"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___description"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___fieldOwners"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___ignoreType"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___mediaType"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___owner"
  | "childContentfulEmployeeCardDescriptionTextNode___children___internal___type"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___content"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___contentDigest"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___description"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___fieldOwners"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___ignoreType"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___mediaType"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___owner"
  | "childContentfulEmployeeCardDescriptionTextNode___internal___type"
  | "childContentfulEmployeeCardDescriptionTextNode___description"
  | "childContentfulEmployeeCardDescriptionTextNode___sys___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulEmployeeCardGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulEmployeeCardEdge>
  nodes: Array<ContentfulEmployeeCard>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulEmployeeCardSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEmployeeCardFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulHomePageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulHomePageEdge>
  nodes: Array<ContentfulHomePage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulHomePageGroupConnection>
}

export type ContentfulHomePageConnectionDistinctArgs = {
  field: ContentfulHomePageFieldsEnum
}

export type ContentfulHomePageConnectionMaxArgs = {
  field: ContentfulHomePageFieldsEnum
}

export type ContentfulHomePageConnectionMinArgs = {
  field: ContentfulHomePageFieldsEnum
}

export type ContentfulHomePageConnectionSumArgs = {
  field: ContentfulHomePageFieldsEnum
}

export type ContentfulHomePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulHomePageFieldsEnum
}

export type ContentfulHomePageEdge = {
  next?: Maybe<ContentfulHomePage>
  node: ContentfulHomePage
  previous?: Maybe<ContentfulHomePage>
}

export type ContentfulHomePageFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "slug"
  | "homeBanner___contentful_id"
  | "homeBanner___id"
  | "homeBanner___node_locale"
  | "homeBanner___heading"
  | "homeBanner___subHeader"
  | "homeBanner___backgroundImage___contentful_id"
  | "homeBanner___backgroundImage___id"
  | "homeBanner___backgroundImage___spaceId"
  | "homeBanner___backgroundImage___createdAt"
  | "homeBanner___backgroundImage___updatedAt"
  | "homeBanner___backgroundImage___file___url"
  | "homeBanner___backgroundImage___file___fileName"
  | "homeBanner___backgroundImage___file___contentType"
  | "homeBanner___backgroundImage___title"
  | "homeBanner___backgroundImage___description"
  | "homeBanner___backgroundImage___node_locale"
  | "homeBanner___backgroundImage___sys___type"
  | "homeBanner___backgroundImage___sys___revision"
  | "homeBanner___backgroundImage___fixed___base64"
  | "homeBanner___backgroundImage___fixed___tracedSVG"
  | "homeBanner___backgroundImage___fixed___aspectRatio"
  | "homeBanner___backgroundImage___fixed___width"
  | "homeBanner___backgroundImage___fixed___height"
  | "homeBanner___backgroundImage___fixed___src"
  | "homeBanner___backgroundImage___fixed___srcSet"
  | "homeBanner___backgroundImage___fixed___srcWebp"
  | "homeBanner___backgroundImage___fixed___srcSetWebp"
  | "homeBanner___backgroundImage___fluid___base64"
  | "homeBanner___backgroundImage___fluid___tracedSVG"
  | "homeBanner___backgroundImage___fluid___aspectRatio"
  | "homeBanner___backgroundImage___fluid___src"
  | "homeBanner___backgroundImage___fluid___srcSet"
  | "homeBanner___backgroundImage___fluid___srcWebp"
  | "homeBanner___backgroundImage___fluid___srcSetWebp"
  | "homeBanner___backgroundImage___fluid___sizes"
  | "homeBanner___backgroundImage___gatsbyImageData"
  | "homeBanner___backgroundImage___resize___base64"
  | "homeBanner___backgroundImage___resize___tracedSVG"
  | "homeBanner___backgroundImage___resize___src"
  | "homeBanner___backgroundImage___resize___width"
  | "homeBanner___backgroundImage___resize___height"
  | "homeBanner___backgroundImage___resize___aspectRatio"
  | "homeBanner___backgroundImage___parent___id"
  | "homeBanner___backgroundImage___parent___children"
  | "homeBanner___backgroundImage___children"
  | "homeBanner___backgroundImage___children___id"
  | "homeBanner___backgroundImage___children___children"
  | "homeBanner___backgroundImage___internal___content"
  | "homeBanner___backgroundImage___internal___contentDigest"
  | "homeBanner___backgroundImage___internal___description"
  | "homeBanner___backgroundImage___internal___fieldOwners"
  | "homeBanner___backgroundImage___internal___ignoreType"
  | "homeBanner___backgroundImage___internal___mediaType"
  | "homeBanner___backgroundImage___internal___owner"
  | "homeBanner___backgroundImage___internal___type"
  | "homeBanner___community_page"
  | "homeBanner___community_page___contentful_id"
  | "homeBanner___community_page___id"
  | "homeBanner___community_page___node_locale"
  | "homeBanner___community_page___slug"
  | "homeBanner___community_page___communityBanner___contentful_id"
  | "homeBanner___community_page___communityBanner___id"
  | "homeBanner___community_page___communityBanner___node_locale"
  | "homeBanner___community_page___communityBanner___heading"
  | "homeBanner___community_page___communityBanner___subHeader"
  | "homeBanner___community_page___communityBanner___community_page"
  | "homeBanner___community_page___communityBanner___spaceId"
  | "homeBanner___community_page___communityBanner___createdAt"
  | "homeBanner___community_page___communityBanner___updatedAt"
  | "homeBanner___community_page___communityBanner___services_page"
  | "homeBanner___community_page___communityBanner___home_page"
  | "homeBanner___community_page___communityBanner___contact_page"
  | "homeBanner___community_page___communityBanner___about_us_page"
  | "homeBanner___community_page___communityBanner___children"
  | "homeBanner___community_page___newsCards"
  | "homeBanner___community_page___newsCards___contentful_id"
  | "homeBanner___community_page___newsCards___id"
  | "homeBanner___community_page___newsCards___node_locale"
  | "homeBanner___community_page___newsCards___title"
  | "homeBanner___community_page___newsCards___community_page"
  | "homeBanner___community_page___newsCards___spaceId"
  | "homeBanner___community_page___newsCards___createdAt"
  | "homeBanner___community_page___newsCards___updatedAt"
  | "homeBanner___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "homeBanner___community_page___newsCards___children"
  | "homeBanner___community_page___blogCards"
  | "homeBanner___community_page___blogCards___contentful_id"
  | "homeBanner___community_page___blogCards___id"
  | "homeBanner___community_page___blogCards___node_locale"
  | "homeBanner___community_page___blogCards___title"
  | "homeBanner___community_page___blogCards___community_page"
  | "homeBanner___community_page___blogCards___spaceId"
  | "homeBanner___community_page___blogCards___createdAt"
  | "homeBanner___community_page___blogCards___updatedAt"
  | "homeBanner___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "homeBanner___community_page___blogCards___children"
  | "homeBanner___community_page___communityCards"
  | "homeBanner___community_page___communityCards___contentful_id"
  | "homeBanner___community_page___communityCards___id"
  | "homeBanner___community_page___communityCards___node_locale"
  | "homeBanner___community_page___communityCards___title"
  | "homeBanner___community_page___communityCards___community_page"
  | "homeBanner___community_page___communityCards___spaceId"
  | "homeBanner___community_page___communityCards___createdAt"
  | "homeBanner___community_page___communityCards___updatedAt"
  | "homeBanner___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "homeBanner___community_page___communityCards___children"
  | "homeBanner___community_page___spaceId"
  | "homeBanner___community_page___createdAt"
  | "homeBanner___community_page___updatedAt"
  | "homeBanner___community_page___sys___type"
  | "homeBanner___community_page___sys___revision"
  | "homeBanner___community_page___parent___id"
  | "homeBanner___community_page___parent___children"
  | "homeBanner___community_page___children"
  | "homeBanner___community_page___children___id"
  | "homeBanner___community_page___children___children"
  | "homeBanner___community_page___internal___content"
  | "homeBanner___community_page___internal___contentDigest"
  | "homeBanner___community_page___internal___description"
  | "homeBanner___community_page___internal___fieldOwners"
  | "homeBanner___community_page___internal___ignoreType"
  | "homeBanner___community_page___internal___mediaType"
  | "homeBanner___community_page___internal___owner"
  | "homeBanner___community_page___internal___type"
  | "homeBanner___spaceId"
  | "homeBanner___createdAt"
  | "homeBanner___updatedAt"
  | "homeBanner___sys___type"
  | "homeBanner___sys___revision"
  | "homeBanner___services_page"
  | "homeBanner___services_page___contentful_id"
  | "homeBanner___services_page___id"
  | "homeBanner___services_page___node_locale"
  | "homeBanner___services_page___slug"
  | "homeBanner___services_page___servicesBanner___contentful_id"
  | "homeBanner___services_page___servicesBanner___id"
  | "homeBanner___services_page___servicesBanner___node_locale"
  | "homeBanner___services_page___servicesBanner___heading"
  | "homeBanner___services_page___servicesBanner___subHeader"
  | "homeBanner___services_page___servicesBanner___community_page"
  | "homeBanner___services_page___servicesBanner___spaceId"
  | "homeBanner___services_page___servicesBanner___createdAt"
  | "homeBanner___services_page___servicesBanner___updatedAt"
  | "homeBanner___services_page___servicesBanner___services_page"
  | "homeBanner___services_page___servicesBanner___home_page"
  | "homeBanner___services_page___servicesBanner___contact_page"
  | "homeBanner___services_page___servicesBanner___about_us_page"
  | "homeBanner___services_page___servicesBanner___children"
  | "homeBanner___services_page___serviceCards"
  | "homeBanner___services_page___serviceCards___contentful_id"
  | "homeBanner___services_page___serviceCards___id"
  | "homeBanner___services_page___serviceCards___node_locale"
  | "homeBanner___services_page___serviceCards___title"
  | "homeBanner___services_page___serviceCards___internalLink"
  | "homeBanner___services_page___serviceCards___stack"
  | "homeBanner___services_page___serviceCards___spaceId"
  | "homeBanner___services_page___serviceCards___createdAt"
  | "homeBanner___services_page___serviceCards___updatedAt"
  | "homeBanner___services_page___serviceCards___services_page"
  | "homeBanner___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "homeBanner___services_page___serviceCards___children"
  | "homeBanner___services_page___spaceId"
  | "homeBanner___services_page___createdAt"
  | "homeBanner___services_page___updatedAt"
  | "homeBanner___services_page___sys___type"
  | "homeBanner___services_page___sys___revision"
  | "homeBanner___services_page___parent___id"
  | "homeBanner___services_page___parent___children"
  | "homeBanner___services_page___children"
  | "homeBanner___services_page___children___id"
  | "homeBanner___services_page___children___children"
  | "homeBanner___services_page___internal___content"
  | "homeBanner___services_page___internal___contentDigest"
  | "homeBanner___services_page___internal___description"
  | "homeBanner___services_page___internal___fieldOwners"
  | "homeBanner___services_page___internal___ignoreType"
  | "homeBanner___services_page___internal___mediaType"
  | "homeBanner___services_page___internal___owner"
  | "homeBanner___services_page___internal___type"
  | "homeBanner___home_page"
  | "homeBanner___home_page___contentful_id"
  | "homeBanner___home_page___id"
  | "homeBanner___home_page___node_locale"
  | "homeBanner___home_page___slug"
  | "homeBanner___home_page___homeBanner___contentful_id"
  | "homeBanner___home_page___homeBanner___id"
  | "homeBanner___home_page___homeBanner___node_locale"
  | "homeBanner___home_page___homeBanner___heading"
  | "homeBanner___home_page___homeBanner___subHeader"
  | "homeBanner___home_page___homeBanner___community_page"
  | "homeBanner___home_page___homeBanner___spaceId"
  | "homeBanner___home_page___homeBanner___createdAt"
  | "homeBanner___home_page___homeBanner___updatedAt"
  | "homeBanner___home_page___homeBanner___services_page"
  | "homeBanner___home_page___homeBanner___home_page"
  | "homeBanner___home_page___homeBanner___contact_page"
  | "homeBanner___home_page___homeBanner___about_us_page"
  | "homeBanner___home_page___homeBanner___children"
  | "homeBanner___home_page___belowHero___contentful_id"
  | "homeBanner___home_page___belowHero___id"
  | "homeBanner___home_page___belowHero___node_locale"
  | "homeBanner___home_page___belowHero___about_us_page"
  | "homeBanner___home_page___belowHero___spaceId"
  | "homeBanner___home_page___belowHero___createdAt"
  | "homeBanner___home_page___belowHero___updatedAt"
  | "homeBanner___home_page___belowHero___home_page"
  | "homeBanner___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "homeBanner___home_page___belowHero___children"
  | "homeBanner___home_page___ctaStack___contentful_id"
  | "homeBanner___home_page___ctaStack___id"
  | "homeBanner___home_page___ctaStack___node_locale"
  | "homeBanner___home_page___ctaStack___cards"
  | "homeBanner___home_page___ctaStack___home_page"
  | "homeBanner___home_page___ctaStack___spaceId"
  | "homeBanner___home_page___ctaStack___createdAt"
  | "homeBanner___home_page___ctaStack___updatedAt"
  | "homeBanner___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "homeBanner___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "homeBanner___home_page___ctaStack___children"
  | "homeBanner___home_page___howWeHelpStack___contentful_id"
  | "homeBanner___home_page___howWeHelpStack___id"
  | "homeBanner___home_page___howWeHelpStack___node_locale"
  | "homeBanner___home_page___howWeHelpStack___cards"
  | "homeBanner___home_page___howWeHelpStack___home_page"
  | "homeBanner___home_page___howWeHelpStack___spaceId"
  | "homeBanner___home_page___howWeHelpStack___createdAt"
  | "homeBanner___home_page___howWeHelpStack___updatedAt"
  | "homeBanner___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "homeBanner___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "homeBanner___home_page___howWeHelpStack___children"
  | "homeBanner___home_page___testimonialSlides"
  | "homeBanner___home_page___testimonialSlides___contentful_id"
  | "homeBanner___home_page___testimonialSlides___id"
  | "homeBanner___home_page___testimonialSlides___node_locale"
  | "homeBanner___home_page___testimonialSlides___name"
  | "homeBanner___home_page___testimonialSlides___jobTitle"
  | "homeBanner___home_page___testimonialSlides___companyName"
  | "homeBanner___home_page___testimonialSlides___home_page"
  | "homeBanner___home_page___testimonialSlides___spaceId"
  | "homeBanner___home_page___testimonialSlides___createdAt"
  | "homeBanner___home_page___testimonialSlides___updatedAt"
  | "homeBanner___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "homeBanner___home_page___testimonialSlides___children"
  | "homeBanner___home_page___carouselImages___contentful_id"
  | "homeBanner___home_page___carouselImages___id"
  | "homeBanner___home_page___carouselImages___node_locale"
  | "homeBanner___home_page___carouselImages___images"
  | "homeBanner___home_page___carouselImages___home_page"
  | "homeBanner___home_page___carouselImages___about_us_page"
  | "homeBanner___home_page___carouselImages___spaceId"
  | "homeBanner___home_page___carouselImages___createdAt"
  | "homeBanner___home_page___carouselImages___updatedAt"
  | "homeBanner___home_page___carouselImages___children"
  | "homeBanner___home_page___spaceId"
  | "homeBanner___home_page___createdAt"
  | "homeBanner___home_page___updatedAt"
  | "homeBanner___home_page___sys___type"
  | "homeBanner___home_page___sys___revision"
  | "homeBanner___home_page___parent___id"
  | "homeBanner___home_page___parent___children"
  | "homeBanner___home_page___children"
  | "homeBanner___home_page___children___id"
  | "homeBanner___home_page___children___children"
  | "homeBanner___home_page___internal___content"
  | "homeBanner___home_page___internal___contentDigest"
  | "homeBanner___home_page___internal___description"
  | "homeBanner___home_page___internal___fieldOwners"
  | "homeBanner___home_page___internal___ignoreType"
  | "homeBanner___home_page___internal___mediaType"
  | "homeBanner___home_page___internal___owner"
  | "homeBanner___home_page___internal___type"
  | "homeBanner___contact_page"
  | "homeBanner___contact_page___contentful_id"
  | "homeBanner___contact_page___id"
  | "homeBanner___contact_page___node_locale"
  | "homeBanner___contact_page___slug"
  | "homeBanner___contact_page___contactBanner___contentful_id"
  | "homeBanner___contact_page___contactBanner___id"
  | "homeBanner___contact_page___contactBanner___node_locale"
  | "homeBanner___contact_page___contactBanner___heading"
  | "homeBanner___contact_page___contactBanner___subHeader"
  | "homeBanner___contact_page___contactBanner___community_page"
  | "homeBanner___contact_page___contactBanner___spaceId"
  | "homeBanner___contact_page___contactBanner___createdAt"
  | "homeBanner___contact_page___contactBanner___updatedAt"
  | "homeBanner___contact_page___contactBanner___services_page"
  | "homeBanner___contact_page___contactBanner___home_page"
  | "homeBanner___contact_page___contactBanner___contact_page"
  | "homeBanner___contact_page___contactBanner___about_us_page"
  | "homeBanner___contact_page___contactBanner___children"
  | "homeBanner___contact_page___spaceId"
  | "homeBanner___contact_page___createdAt"
  | "homeBanner___contact_page___updatedAt"
  | "homeBanner___contact_page___sys___type"
  | "homeBanner___contact_page___sys___revision"
  | "homeBanner___contact_page___parent___id"
  | "homeBanner___contact_page___parent___children"
  | "homeBanner___contact_page___children"
  | "homeBanner___contact_page___children___id"
  | "homeBanner___contact_page___children___children"
  | "homeBanner___contact_page___internal___content"
  | "homeBanner___contact_page___internal___contentDigest"
  | "homeBanner___contact_page___internal___description"
  | "homeBanner___contact_page___internal___fieldOwners"
  | "homeBanner___contact_page___internal___ignoreType"
  | "homeBanner___contact_page___internal___mediaType"
  | "homeBanner___contact_page___internal___owner"
  | "homeBanner___contact_page___internal___type"
  | "homeBanner___about_us_page"
  | "homeBanner___about_us_page___contentful_id"
  | "homeBanner___about_us_page___id"
  | "homeBanner___about_us_page___node_locale"
  | "homeBanner___about_us_page___slug"
  | "homeBanner___about_us_page___aboutUsBanner___contentful_id"
  | "homeBanner___about_us_page___aboutUsBanner___id"
  | "homeBanner___about_us_page___aboutUsBanner___node_locale"
  | "homeBanner___about_us_page___aboutUsBanner___heading"
  | "homeBanner___about_us_page___aboutUsBanner___subHeader"
  | "homeBanner___about_us_page___aboutUsBanner___community_page"
  | "homeBanner___about_us_page___aboutUsBanner___spaceId"
  | "homeBanner___about_us_page___aboutUsBanner___createdAt"
  | "homeBanner___about_us_page___aboutUsBanner___updatedAt"
  | "homeBanner___about_us_page___aboutUsBanner___services_page"
  | "homeBanner___about_us_page___aboutUsBanner___home_page"
  | "homeBanner___about_us_page___aboutUsBanner___contact_page"
  | "homeBanner___about_us_page___aboutUsBanner___about_us_page"
  | "homeBanner___about_us_page___aboutUsBanner___children"
  | "homeBanner___about_us_page___whatWeDo___contentful_id"
  | "homeBanner___about_us_page___whatWeDo___id"
  | "homeBanner___about_us_page___whatWeDo___node_locale"
  | "homeBanner___about_us_page___whatWeDo___about_us_page"
  | "homeBanner___about_us_page___whatWeDo___spaceId"
  | "homeBanner___about_us_page___whatWeDo___createdAt"
  | "homeBanner___about_us_page___whatWeDo___updatedAt"
  | "homeBanner___about_us_page___whatWeDo___home_page"
  | "homeBanner___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "homeBanner___about_us_page___whatWeDo___children"
  | "homeBanner___about_us_page___carouselImages___contentful_id"
  | "homeBanner___about_us_page___carouselImages___id"
  | "homeBanner___about_us_page___carouselImages___node_locale"
  | "homeBanner___about_us_page___carouselImages___images"
  | "homeBanner___about_us_page___carouselImages___home_page"
  | "homeBanner___about_us_page___carouselImages___about_us_page"
  | "homeBanner___about_us_page___carouselImages___spaceId"
  | "homeBanner___about_us_page___carouselImages___createdAt"
  | "homeBanner___about_us_page___carouselImages___updatedAt"
  | "homeBanner___about_us_page___carouselImages___children"
  | "homeBanner___about_us_page___ourTeam"
  | "homeBanner___about_us_page___ourTeam___contentful_id"
  | "homeBanner___about_us_page___ourTeam___id"
  | "homeBanner___about_us_page___ourTeam___node_locale"
  | "homeBanner___about_us_page___ourTeam___name"
  | "homeBanner___about_us_page___ourTeam___jobTitle"
  | "homeBanner___about_us_page___ourTeam___cardSize"
  | "homeBanner___about_us_page___ourTeam___about_us_page"
  | "homeBanner___about_us_page___ourTeam___spaceId"
  | "homeBanner___about_us_page___ourTeam___createdAt"
  | "homeBanner___about_us_page___ourTeam___updatedAt"
  | "homeBanner___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "homeBanner___about_us_page___ourTeam___children"
  | "homeBanner___about_us_page___spaceId"
  | "homeBanner___about_us_page___createdAt"
  | "homeBanner___about_us_page___updatedAt"
  | "homeBanner___about_us_page___sys___type"
  | "homeBanner___about_us_page___sys___revision"
  | "homeBanner___about_us_page___parent___id"
  | "homeBanner___about_us_page___parent___children"
  | "homeBanner___about_us_page___children"
  | "homeBanner___about_us_page___children___id"
  | "homeBanner___about_us_page___children___children"
  | "homeBanner___about_us_page___internal___content"
  | "homeBanner___about_us_page___internal___contentDigest"
  | "homeBanner___about_us_page___internal___description"
  | "homeBanner___about_us_page___internal___fieldOwners"
  | "homeBanner___about_us_page___internal___ignoreType"
  | "homeBanner___about_us_page___internal___mediaType"
  | "homeBanner___about_us_page___internal___owner"
  | "homeBanner___about_us_page___internal___type"
  | "homeBanner___parent___id"
  | "homeBanner___parent___parent___id"
  | "homeBanner___parent___parent___children"
  | "homeBanner___parent___children"
  | "homeBanner___parent___children___id"
  | "homeBanner___parent___children___children"
  | "homeBanner___parent___internal___content"
  | "homeBanner___parent___internal___contentDigest"
  | "homeBanner___parent___internal___description"
  | "homeBanner___parent___internal___fieldOwners"
  | "homeBanner___parent___internal___ignoreType"
  | "homeBanner___parent___internal___mediaType"
  | "homeBanner___parent___internal___owner"
  | "homeBanner___parent___internal___type"
  | "homeBanner___children"
  | "homeBanner___children___id"
  | "homeBanner___children___parent___id"
  | "homeBanner___children___parent___children"
  | "homeBanner___children___children"
  | "homeBanner___children___children___id"
  | "homeBanner___children___children___children"
  | "homeBanner___children___internal___content"
  | "homeBanner___children___internal___contentDigest"
  | "homeBanner___children___internal___description"
  | "homeBanner___children___internal___fieldOwners"
  | "homeBanner___children___internal___ignoreType"
  | "homeBanner___children___internal___mediaType"
  | "homeBanner___children___internal___owner"
  | "homeBanner___children___internal___type"
  | "homeBanner___internal___content"
  | "homeBanner___internal___contentDigest"
  | "homeBanner___internal___description"
  | "homeBanner___internal___fieldOwners"
  | "homeBanner___internal___ignoreType"
  | "homeBanner___internal___mediaType"
  | "homeBanner___internal___owner"
  | "homeBanner___internal___type"
  | "belowHero___contentful_id"
  | "belowHero___id"
  | "belowHero___node_locale"
  | "belowHero___image___contentful_id"
  | "belowHero___image___id"
  | "belowHero___image___spaceId"
  | "belowHero___image___createdAt"
  | "belowHero___image___updatedAt"
  | "belowHero___image___file___url"
  | "belowHero___image___file___fileName"
  | "belowHero___image___file___contentType"
  | "belowHero___image___title"
  | "belowHero___image___description"
  | "belowHero___image___node_locale"
  | "belowHero___image___sys___type"
  | "belowHero___image___sys___revision"
  | "belowHero___image___fixed___base64"
  | "belowHero___image___fixed___tracedSVG"
  | "belowHero___image___fixed___aspectRatio"
  | "belowHero___image___fixed___width"
  | "belowHero___image___fixed___height"
  | "belowHero___image___fixed___src"
  | "belowHero___image___fixed___srcSet"
  | "belowHero___image___fixed___srcWebp"
  | "belowHero___image___fixed___srcSetWebp"
  | "belowHero___image___fluid___base64"
  | "belowHero___image___fluid___tracedSVG"
  | "belowHero___image___fluid___aspectRatio"
  | "belowHero___image___fluid___src"
  | "belowHero___image___fluid___srcSet"
  | "belowHero___image___fluid___srcWebp"
  | "belowHero___image___fluid___srcSetWebp"
  | "belowHero___image___fluid___sizes"
  | "belowHero___image___gatsbyImageData"
  | "belowHero___image___resize___base64"
  | "belowHero___image___resize___tracedSVG"
  | "belowHero___image___resize___src"
  | "belowHero___image___resize___width"
  | "belowHero___image___resize___height"
  | "belowHero___image___resize___aspectRatio"
  | "belowHero___image___parent___id"
  | "belowHero___image___parent___children"
  | "belowHero___image___children"
  | "belowHero___image___children___id"
  | "belowHero___image___children___children"
  | "belowHero___image___internal___content"
  | "belowHero___image___internal___contentDigest"
  | "belowHero___image___internal___description"
  | "belowHero___image___internal___fieldOwners"
  | "belowHero___image___internal___ignoreType"
  | "belowHero___image___internal___mediaType"
  | "belowHero___image___internal___owner"
  | "belowHero___image___internal___type"
  | "belowHero___about_us_page"
  | "belowHero___about_us_page___contentful_id"
  | "belowHero___about_us_page___id"
  | "belowHero___about_us_page___node_locale"
  | "belowHero___about_us_page___slug"
  | "belowHero___about_us_page___aboutUsBanner___contentful_id"
  | "belowHero___about_us_page___aboutUsBanner___id"
  | "belowHero___about_us_page___aboutUsBanner___node_locale"
  | "belowHero___about_us_page___aboutUsBanner___heading"
  | "belowHero___about_us_page___aboutUsBanner___subHeader"
  | "belowHero___about_us_page___aboutUsBanner___community_page"
  | "belowHero___about_us_page___aboutUsBanner___spaceId"
  | "belowHero___about_us_page___aboutUsBanner___createdAt"
  | "belowHero___about_us_page___aboutUsBanner___updatedAt"
  | "belowHero___about_us_page___aboutUsBanner___services_page"
  | "belowHero___about_us_page___aboutUsBanner___home_page"
  | "belowHero___about_us_page___aboutUsBanner___contact_page"
  | "belowHero___about_us_page___aboutUsBanner___about_us_page"
  | "belowHero___about_us_page___aboutUsBanner___children"
  | "belowHero___about_us_page___whatWeDo___contentful_id"
  | "belowHero___about_us_page___whatWeDo___id"
  | "belowHero___about_us_page___whatWeDo___node_locale"
  | "belowHero___about_us_page___whatWeDo___about_us_page"
  | "belowHero___about_us_page___whatWeDo___spaceId"
  | "belowHero___about_us_page___whatWeDo___createdAt"
  | "belowHero___about_us_page___whatWeDo___updatedAt"
  | "belowHero___about_us_page___whatWeDo___home_page"
  | "belowHero___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "belowHero___about_us_page___whatWeDo___children"
  | "belowHero___about_us_page___carouselImages___contentful_id"
  | "belowHero___about_us_page___carouselImages___id"
  | "belowHero___about_us_page___carouselImages___node_locale"
  | "belowHero___about_us_page___carouselImages___images"
  | "belowHero___about_us_page___carouselImages___home_page"
  | "belowHero___about_us_page___carouselImages___about_us_page"
  | "belowHero___about_us_page___carouselImages___spaceId"
  | "belowHero___about_us_page___carouselImages___createdAt"
  | "belowHero___about_us_page___carouselImages___updatedAt"
  | "belowHero___about_us_page___carouselImages___children"
  | "belowHero___about_us_page___ourTeam"
  | "belowHero___about_us_page___ourTeam___contentful_id"
  | "belowHero___about_us_page___ourTeam___id"
  | "belowHero___about_us_page___ourTeam___node_locale"
  | "belowHero___about_us_page___ourTeam___name"
  | "belowHero___about_us_page___ourTeam___jobTitle"
  | "belowHero___about_us_page___ourTeam___cardSize"
  | "belowHero___about_us_page___ourTeam___about_us_page"
  | "belowHero___about_us_page___ourTeam___spaceId"
  | "belowHero___about_us_page___ourTeam___createdAt"
  | "belowHero___about_us_page___ourTeam___updatedAt"
  | "belowHero___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "belowHero___about_us_page___ourTeam___children"
  | "belowHero___about_us_page___spaceId"
  | "belowHero___about_us_page___createdAt"
  | "belowHero___about_us_page___updatedAt"
  | "belowHero___about_us_page___sys___type"
  | "belowHero___about_us_page___sys___revision"
  | "belowHero___about_us_page___parent___id"
  | "belowHero___about_us_page___parent___children"
  | "belowHero___about_us_page___children"
  | "belowHero___about_us_page___children___id"
  | "belowHero___about_us_page___children___children"
  | "belowHero___about_us_page___internal___content"
  | "belowHero___about_us_page___internal___contentDigest"
  | "belowHero___about_us_page___internal___description"
  | "belowHero___about_us_page___internal___fieldOwners"
  | "belowHero___about_us_page___internal___ignoreType"
  | "belowHero___about_us_page___internal___mediaType"
  | "belowHero___about_us_page___internal___owner"
  | "belowHero___about_us_page___internal___type"
  | "belowHero___text___id"
  | "belowHero___text___parent___id"
  | "belowHero___text___parent___children"
  | "belowHero___text___children"
  | "belowHero___text___children___id"
  | "belowHero___text___children___children"
  | "belowHero___text___internal___content"
  | "belowHero___text___internal___contentDigest"
  | "belowHero___text___internal___description"
  | "belowHero___text___internal___fieldOwners"
  | "belowHero___text___internal___ignoreType"
  | "belowHero___text___internal___mediaType"
  | "belowHero___text___internal___owner"
  | "belowHero___text___internal___type"
  | "belowHero___text___text"
  | "belowHero___text___sys___type"
  | "belowHero___spaceId"
  | "belowHero___createdAt"
  | "belowHero___updatedAt"
  | "belowHero___sys___type"
  | "belowHero___sys___revision"
  | "belowHero___home_page"
  | "belowHero___home_page___contentful_id"
  | "belowHero___home_page___id"
  | "belowHero___home_page___node_locale"
  | "belowHero___home_page___slug"
  | "belowHero___home_page___homeBanner___contentful_id"
  | "belowHero___home_page___homeBanner___id"
  | "belowHero___home_page___homeBanner___node_locale"
  | "belowHero___home_page___homeBanner___heading"
  | "belowHero___home_page___homeBanner___subHeader"
  | "belowHero___home_page___homeBanner___community_page"
  | "belowHero___home_page___homeBanner___spaceId"
  | "belowHero___home_page___homeBanner___createdAt"
  | "belowHero___home_page___homeBanner___updatedAt"
  | "belowHero___home_page___homeBanner___services_page"
  | "belowHero___home_page___homeBanner___home_page"
  | "belowHero___home_page___homeBanner___contact_page"
  | "belowHero___home_page___homeBanner___about_us_page"
  | "belowHero___home_page___homeBanner___children"
  | "belowHero___home_page___belowHero___contentful_id"
  | "belowHero___home_page___belowHero___id"
  | "belowHero___home_page___belowHero___node_locale"
  | "belowHero___home_page___belowHero___about_us_page"
  | "belowHero___home_page___belowHero___spaceId"
  | "belowHero___home_page___belowHero___createdAt"
  | "belowHero___home_page___belowHero___updatedAt"
  | "belowHero___home_page___belowHero___home_page"
  | "belowHero___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "belowHero___home_page___belowHero___children"
  | "belowHero___home_page___ctaStack___contentful_id"
  | "belowHero___home_page___ctaStack___id"
  | "belowHero___home_page___ctaStack___node_locale"
  | "belowHero___home_page___ctaStack___cards"
  | "belowHero___home_page___ctaStack___home_page"
  | "belowHero___home_page___ctaStack___spaceId"
  | "belowHero___home_page___ctaStack___createdAt"
  | "belowHero___home_page___ctaStack___updatedAt"
  | "belowHero___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "belowHero___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "belowHero___home_page___ctaStack___children"
  | "belowHero___home_page___howWeHelpStack___contentful_id"
  | "belowHero___home_page___howWeHelpStack___id"
  | "belowHero___home_page___howWeHelpStack___node_locale"
  | "belowHero___home_page___howWeHelpStack___cards"
  | "belowHero___home_page___howWeHelpStack___home_page"
  | "belowHero___home_page___howWeHelpStack___spaceId"
  | "belowHero___home_page___howWeHelpStack___createdAt"
  | "belowHero___home_page___howWeHelpStack___updatedAt"
  | "belowHero___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "belowHero___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "belowHero___home_page___howWeHelpStack___children"
  | "belowHero___home_page___testimonialSlides"
  | "belowHero___home_page___testimonialSlides___contentful_id"
  | "belowHero___home_page___testimonialSlides___id"
  | "belowHero___home_page___testimonialSlides___node_locale"
  | "belowHero___home_page___testimonialSlides___name"
  | "belowHero___home_page___testimonialSlides___jobTitle"
  | "belowHero___home_page___testimonialSlides___companyName"
  | "belowHero___home_page___testimonialSlides___home_page"
  | "belowHero___home_page___testimonialSlides___spaceId"
  | "belowHero___home_page___testimonialSlides___createdAt"
  | "belowHero___home_page___testimonialSlides___updatedAt"
  | "belowHero___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "belowHero___home_page___testimonialSlides___children"
  | "belowHero___home_page___carouselImages___contentful_id"
  | "belowHero___home_page___carouselImages___id"
  | "belowHero___home_page___carouselImages___node_locale"
  | "belowHero___home_page___carouselImages___images"
  | "belowHero___home_page___carouselImages___home_page"
  | "belowHero___home_page___carouselImages___about_us_page"
  | "belowHero___home_page___carouselImages___spaceId"
  | "belowHero___home_page___carouselImages___createdAt"
  | "belowHero___home_page___carouselImages___updatedAt"
  | "belowHero___home_page___carouselImages___children"
  | "belowHero___home_page___spaceId"
  | "belowHero___home_page___createdAt"
  | "belowHero___home_page___updatedAt"
  | "belowHero___home_page___sys___type"
  | "belowHero___home_page___sys___revision"
  | "belowHero___home_page___parent___id"
  | "belowHero___home_page___parent___children"
  | "belowHero___home_page___children"
  | "belowHero___home_page___children___id"
  | "belowHero___home_page___children___children"
  | "belowHero___home_page___internal___content"
  | "belowHero___home_page___internal___contentDigest"
  | "belowHero___home_page___internal___description"
  | "belowHero___home_page___internal___fieldOwners"
  | "belowHero___home_page___internal___ignoreType"
  | "belowHero___home_page___internal___mediaType"
  | "belowHero___home_page___internal___owner"
  | "belowHero___home_page___internal___type"
  | "belowHero___childrenContentfulTextAndImageTextTextNode"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___id"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___parent___id"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___parent___children"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___children"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___children___id"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___children___children"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___content"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___contentDigest"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___description"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___fieldOwners"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___ignoreType"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___mediaType"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___owner"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___internal___type"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___text"
  | "belowHero___childrenContentfulTextAndImageTextTextNode___sys___type"
  | "belowHero___childContentfulTextAndImageTextTextNode___id"
  | "belowHero___childContentfulTextAndImageTextTextNode___parent___id"
  | "belowHero___childContentfulTextAndImageTextTextNode___parent___children"
  | "belowHero___childContentfulTextAndImageTextTextNode___children"
  | "belowHero___childContentfulTextAndImageTextTextNode___children___id"
  | "belowHero___childContentfulTextAndImageTextTextNode___children___children"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___content"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___contentDigest"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___description"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___fieldOwners"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___ignoreType"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___mediaType"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___owner"
  | "belowHero___childContentfulTextAndImageTextTextNode___internal___type"
  | "belowHero___childContentfulTextAndImageTextTextNode___text"
  | "belowHero___childContentfulTextAndImageTextTextNode___sys___type"
  | "belowHero___parent___id"
  | "belowHero___parent___parent___id"
  | "belowHero___parent___parent___children"
  | "belowHero___parent___children"
  | "belowHero___parent___children___id"
  | "belowHero___parent___children___children"
  | "belowHero___parent___internal___content"
  | "belowHero___parent___internal___contentDigest"
  | "belowHero___parent___internal___description"
  | "belowHero___parent___internal___fieldOwners"
  | "belowHero___parent___internal___ignoreType"
  | "belowHero___parent___internal___mediaType"
  | "belowHero___parent___internal___owner"
  | "belowHero___parent___internal___type"
  | "belowHero___children"
  | "belowHero___children___id"
  | "belowHero___children___parent___id"
  | "belowHero___children___parent___children"
  | "belowHero___children___children"
  | "belowHero___children___children___id"
  | "belowHero___children___children___children"
  | "belowHero___children___internal___content"
  | "belowHero___children___internal___contentDigest"
  | "belowHero___children___internal___description"
  | "belowHero___children___internal___fieldOwners"
  | "belowHero___children___internal___ignoreType"
  | "belowHero___children___internal___mediaType"
  | "belowHero___children___internal___owner"
  | "belowHero___children___internal___type"
  | "belowHero___internal___content"
  | "belowHero___internal___contentDigest"
  | "belowHero___internal___description"
  | "belowHero___internal___fieldOwners"
  | "belowHero___internal___ignoreType"
  | "belowHero___internal___mediaType"
  | "belowHero___internal___owner"
  | "belowHero___internal___type"
  | "ctaStack___contentful_id"
  | "ctaStack___id"
  | "ctaStack___node_locale"
  | "ctaStack___cards"
  | "ctaStack___cards___contentful_id"
  | "ctaStack___cards___id"
  | "ctaStack___cards___node_locale"
  | "ctaStack___cards___title"
  | "ctaStack___cards___internalLink"
  | "ctaStack___cards___icon___contentful_id"
  | "ctaStack___cards___icon___id"
  | "ctaStack___cards___icon___spaceId"
  | "ctaStack___cards___icon___createdAt"
  | "ctaStack___cards___icon___updatedAt"
  | "ctaStack___cards___icon___title"
  | "ctaStack___cards___icon___description"
  | "ctaStack___cards___icon___node_locale"
  | "ctaStack___cards___icon___gatsbyImageData"
  | "ctaStack___cards___icon___children"
  | "ctaStack___cards___stack"
  | "ctaStack___cards___stack___contentful_id"
  | "ctaStack___cards___stack___id"
  | "ctaStack___cards___stack___node_locale"
  | "ctaStack___cards___stack___cards"
  | "ctaStack___cards___stack___home_page"
  | "ctaStack___cards___stack___spaceId"
  | "ctaStack___cards___stack___createdAt"
  | "ctaStack___cards___stack___updatedAt"
  | "ctaStack___cards___stack___childrenContentfulStackTextTextNode"
  | "ctaStack___cards___stack___childrenContentfulStackText2TextNode"
  | "ctaStack___cards___stack___children"
  | "ctaStack___cards___description___id"
  | "ctaStack___cards___description___children"
  | "ctaStack___cards___description___description"
  | "ctaStack___cards___spaceId"
  | "ctaStack___cards___createdAt"
  | "ctaStack___cards___updatedAt"
  | "ctaStack___cards___sys___type"
  | "ctaStack___cards___sys___revision"
  | "ctaStack___cards___services_page"
  | "ctaStack___cards___services_page___contentful_id"
  | "ctaStack___cards___services_page___id"
  | "ctaStack___cards___services_page___node_locale"
  | "ctaStack___cards___services_page___slug"
  | "ctaStack___cards___services_page___serviceCards"
  | "ctaStack___cards___services_page___spaceId"
  | "ctaStack___cards___services_page___createdAt"
  | "ctaStack___cards___services_page___updatedAt"
  | "ctaStack___cards___services_page___children"
  | "ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "ctaStack___cards___childContentfulGeneralCardDescriptionTextNode___id"
  | "ctaStack___cards___childContentfulGeneralCardDescriptionTextNode___children"
  | "ctaStack___cards___childContentfulGeneralCardDescriptionTextNode___description"
  | "ctaStack___cards___parent___id"
  | "ctaStack___cards___parent___children"
  | "ctaStack___cards___children"
  | "ctaStack___cards___children___id"
  | "ctaStack___cards___children___children"
  | "ctaStack___cards___internal___content"
  | "ctaStack___cards___internal___contentDigest"
  | "ctaStack___cards___internal___description"
  | "ctaStack___cards___internal___fieldOwners"
  | "ctaStack___cards___internal___ignoreType"
  | "ctaStack___cards___internal___mediaType"
  | "ctaStack___cards___internal___owner"
  | "ctaStack___cards___internal___type"
  | "ctaStack___home_page"
  | "ctaStack___home_page___contentful_id"
  | "ctaStack___home_page___id"
  | "ctaStack___home_page___node_locale"
  | "ctaStack___home_page___slug"
  | "ctaStack___home_page___homeBanner___contentful_id"
  | "ctaStack___home_page___homeBanner___id"
  | "ctaStack___home_page___homeBanner___node_locale"
  | "ctaStack___home_page___homeBanner___heading"
  | "ctaStack___home_page___homeBanner___subHeader"
  | "ctaStack___home_page___homeBanner___community_page"
  | "ctaStack___home_page___homeBanner___spaceId"
  | "ctaStack___home_page___homeBanner___createdAt"
  | "ctaStack___home_page___homeBanner___updatedAt"
  | "ctaStack___home_page___homeBanner___services_page"
  | "ctaStack___home_page___homeBanner___home_page"
  | "ctaStack___home_page___homeBanner___contact_page"
  | "ctaStack___home_page___homeBanner___about_us_page"
  | "ctaStack___home_page___homeBanner___children"
  | "ctaStack___home_page___belowHero___contentful_id"
  | "ctaStack___home_page___belowHero___id"
  | "ctaStack___home_page___belowHero___node_locale"
  | "ctaStack___home_page___belowHero___about_us_page"
  | "ctaStack___home_page___belowHero___spaceId"
  | "ctaStack___home_page___belowHero___createdAt"
  | "ctaStack___home_page___belowHero___updatedAt"
  | "ctaStack___home_page___belowHero___home_page"
  | "ctaStack___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "ctaStack___home_page___belowHero___children"
  | "ctaStack___home_page___ctaStack___contentful_id"
  | "ctaStack___home_page___ctaStack___id"
  | "ctaStack___home_page___ctaStack___node_locale"
  | "ctaStack___home_page___ctaStack___cards"
  | "ctaStack___home_page___ctaStack___home_page"
  | "ctaStack___home_page___ctaStack___spaceId"
  | "ctaStack___home_page___ctaStack___createdAt"
  | "ctaStack___home_page___ctaStack___updatedAt"
  | "ctaStack___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "ctaStack___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "ctaStack___home_page___ctaStack___children"
  | "ctaStack___home_page___howWeHelpStack___contentful_id"
  | "ctaStack___home_page___howWeHelpStack___id"
  | "ctaStack___home_page___howWeHelpStack___node_locale"
  | "ctaStack___home_page___howWeHelpStack___cards"
  | "ctaStack___home_page___howWeHelpStack___home_page"
  | "ctaStack___home_page___howWeHelpStack___spaceId"
  | "ctaStack___home_page___howWeHelpStack___createdAt"
  | "ctaStack___home_page___howWeHelpStack___updatedAt"
  | "ctaStack___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "ctaStack___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "ctaStack___home_page___howWeHelpStack___children"
  | "ctaStack___home_page___testimonialSlides"
  | "ctaStack___home_page___testimonialSlides___contentful_id"
  | "ctaStack___home_page___testimonialSlides___id"
  | "ctaStack___home_page___testimonialSlides___node_locale"
  | "ctaStack___home_page___testimonialSlides___name"
  | "ctaStack___home_page___testimonialSlides___jobTitle"
  | "ctaStack___home_page___testimonialSlides___companyName"
  | "ctaStack___home_page___testimonialSlides___home_page"
  | "ctaStack___home_page___testimonialSlides___spaceId"
  | "ctaStack___home_page___testimonialSlides___createdAt"
  | "ctaStack___home_page___testimonialSlides___updatedAt"
  | "ctaStack___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "ctaStack___home_page___testimonialSlides___children"
  | "ctaStack___home_page___carouselImages___contentful_id"
  | "ctaStack___home_page___carouselImages___id"
  | "ctaStack___home_page___carouselImages___node_locale"
  | "ctaStack___home_page___carouselImages___images"
  | "ctaStack___home_page___carouselImages___home_page"
  | "ctaStack___home_page___carouselImages___about_us_page"
  | "ctaStack___home_page___carouselImages___spaceId"
  | "ctaStack___home_page___carouselImages___createdAt"
  | "ctaStack___home_page___carouselImages___updatedAt"
  | "ctaStack___home_page___carouselImages___children"
  | "ctaStack___home_page___spaceId"
  | "ctaStack___home_page___createdAt"
  | "ctaStack___home_page___updatedAt"
  | "ctaStack___home_page___sys___type"
  | "ctaStack___home_page___sys___revision"
  | "ctaStack___home_page___parent___id"
  | "ctaStack___home_page___parent___children"
  | "ctaStack___home_page___children"
  | "ctaStack___home_page___children___id"
  | "ctaStack___home_page___children___children"
  | "ctaStack___home_page___internal___content"
  | "ctaStack___home_page___internal___contentDigest"
  | "ctaStack___home_page___internal___description"
  | "ctaStack___home_page___internal___fieldOwners"
  | "ctaStack___home_page___internal___ignoreType"
  | "ctaStack___home_page___internal___mediaType"
  | "ctaStack___home_page___internal___owner"
  | "ctaStack___home_page___internal___type"
  | "ctaStack___text___id"
  | "ctaStack___text___parent___id"
  | "ctaStack___text___parent___children"
  | "ctaStack___text___children"
  | "ctaStack___text___children___id"
  | "ctaStack___text___children___children"
  | "ctaStack___text___internal___content"
  | "ctaStack___text___internal___contentDigest"
  | "ctaStack___text___internal___description"
  | "ctaStack___text___internal___fieldOwners"
  | "ctaStack___text___internal___ignoreType"
  | "ctaStack___text___internal___mediaType"
  | "ctaStack___text___internal___owner"
  | "ctaStack___text___internal___type"
  | "ctaStack___text___text"
  | "ctaStack___text___sys___type"
  | "ctaStack___text2___id"
  | "ctaStack___text2___parent___id"
  | "ctaStack___text2___parent___children"
  | "ctaStack___text2___children"
  | "ctaStack___text2___children___id"
  | "ctaStack___text2___children___children"
  | "ctaStack___text2___internal___content"
  | "ctaStack___text2___internal___contentDigest"
  | "ctaStack___text2___internal___description"
  | "ctaStack___text2___internal___fieldOwners"
  | "ctaStack___text2___internal___ignoreType"
  | "ctaStack___text2___internal___mediaType"
  | "ctaStack___text2___internal___owner"
  | "ctaStack___text2___internal___type"
  | "ctaStack___text2___text2"
  | "ctaStack___text2___sys___type"
  | "ctaStack___spaceId"
  | "ctaStack___createdAt"
  | "ctaStack___updatedAt"
  | "ctaStack___sys___type"
  | "ctaStack___sys___revision"
  | "ctaStack___childrenContentfulStackTextTextNode"
  | "ctaStack___childrenContentfulStackTextTextNode___id"
  | "ctaStack___childrenContentfulStackTextTextNode___parent___id"
  | "ctaStack___childrenContentfulStackTextTextNode___parent___children"
  | "ctaStack___childrenContentfulStackTextTextNode___children"
  | "ctaStack___childrenContentfulStackTextTextNode___children___id"
  | "ctaStack___childrenContentfulStackTextTextNode___children___children"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___content"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___contentDigest"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___description"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___fieldOwners"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___ignoreType"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___mediaType"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___owner"
  | "ctaStack___childrenContentfulStackTextTextNode___internal___type"
  | "ctaStack___childrenContentfulStackTextTextNode___text"
  | "ctaStack___childrenContentfulStackTextTextNode___sys___type"
  | "ctaStack___childContentfulStackTextTextNode___id"
  | "ctaStack___childContentfulStackTextTextNode___parent___id"
  | "ctaStack___childContentfulStackTextTextNode___parent___children"
  | "ctaStack___childContentfulStackTextTextNode___children"
  | "ctaStack___childContentfulStackTextTextNode___children___id"
  | "ctaStack___childContentfulStackTextTextNode___children___children"
  | "ctaStack___childContentfulStackTextTextNode___internal___content"
  | "ctaStack___childContentfulStackTextTextNode___internal___contentDigest"
  | "ctaStack___childContentfulStackTextTextNode___internal___description"
  | "ctaStack___childContentfulStackTextTextNode___internal___fieldOwners"
  | "ctaStack___childContentfulStackTextTextNode___internal___ignoreType"
  | "ctaStack___childContentfulStackTextTextNode___internal___mediaType"
  | "ctaStack___childContentfulStackTextTextNode___internal___owner"
  | "ctaStack___childContentfulStackTextTextNode___internal___type"
  | "ctaStack___childContentfulStackTextTextNode___text"
  | "ctaStack___childContentfulStackTextTextNode___sys___type"
  | "ctaStack___childrenContentfulStackText2TextNode"
  | "ctaStack___childrenContentfulStackText2TextNode___id"
  | "ctaStack___childrenContentfulStackText2TextNode___parent___id"
  | "ctaStack___childrenContentfulStackText2TextNode___parent___children"
  | "ctaStack___childrenContentfulStackText2TextNode___children"
  | "ctaStack___childrenContentfulStackText2TextNode___children___id"
  | "ctaStack___childrenContentfulStackText2TextNode___children___children"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___content"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___contentDigest"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___description"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___fieldOwners"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___ignoreType"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___mediaType"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___owner"
  | "ctaStack___childrenContentfulStackText2TextNode___internal___type"
  | "ctaStack___childrenContentfulStackText2TextNode___text2"
  | "ctaStack___childrenContentfulStackText2TextNode___sys___type"
  | "ctaStack___childContentfulStackText2TextNode___id"
  | "ctaStack___childContentfulStackText2TextNode___parent___id"
  | "ctaStack___childContentfulStackText2TextNode___parent___children"
  | "ctaStack___childContentfulStackText2TextNode___children"
  | "ctaStack___childContentfulStackText2TextNode___children___id"
  | "ctaStack___childContentfulStackText2TextNode___children___children"
  | "ctaStack___childContentfulStackText2TextNode___internal___content"
  | "ctaStack___childContentfulStackText2TextNode___internal___contentDigest"
  | "ctaStack___childContentfulStackText2TextNode___internal___description"
  | "ctaStack___childContentfulStackText2TextNode___internal___fieldOwners"
  | "ctaStack___childContentfulStackText2TextNode___internal___ignoreType"
  | "ctaStack___childContentfulStackText2TextNode___internal___mediaType"
  | "ctaStack___childContentfulStackText2TextNode___internal___owner"
  | "ctaStack___childContentfulStackText2TextNode___internal___type"
  | "ctaStack___childContentfulStackText2TextNode___text2"
  | "ctaStack___childContentfulStackText2TextNode___sys___type"
  | "ctaStack___parent___id"
  | "ctaStack___parent___parent___id"
  | "ctaStack___parent___parent___children"
  | "ctaStack___parent___children"
  | "ctaStack___parent___children___id"
  | "ctaStack___parent___children___children"
  | "ctaStack___parent___internal___content"
  | "ctaStack___parent___internal___contentDigest"
  | "ctaStack___parent___internal___description"
  | "ctaStack___parent___internal___fieldOwners"
  | "ctaStack___parent___internal___ignoreType"
  | "ctaStack___parent___internal___mediaType"
  | "ctaStack___parent___internal___owner"
  | "ctaStack___parent___internal___type"
  | "ctaStack___children"
  | "ctaStack___children___id"
  | "ctaStack___children___parent___id"
  | "ctaStack___children___parent___children"
  | "ctaStack___children___children"
  | "ctaStack___children___children___id"
  | "ctaStack___children___children___children"
  | "ctaStack___children___internal___content"
  | "ctaStack___children___internal___contentDigest"
  | "ctaStack___children___internal___description"
  | "ctaStack___children___internal___fieldOwners"
  | "ctaStack___children___internal___ignoreType"
  | "ctaStack___children___internal___mediaType"
  | "ctaStack___children___internal___owner"
  | "ctaStack___children___internal___type"
  | "ctaStack___internal___content"
  | "ctaStack___internal___contentDigest"
  | "ctaStack___internal___description"
  | "ctaStack___internal___fieldOwners"
  | "ctaStack___internal___ignoreType"
  | "ctaStack___internal___mediaType"
  | "ctaStack___internal___owner"
  | "ctaStack___internal___type"
  | "howWeHelpStack___contentful_id"
  | "howWeHelpStack___id"
  | "howWeHelpStack___node_locale"
  | "howWeHelpStack___cards"
  | "howWeHelpStack___cards___contentful_id"
  | "howWeHelpStack___cards___id"
  | "howWeHelpStack___cards___node_locale"
  | "howWeHelpStack___cards___title"
  | "howWeHelpStack___cards___internalLink"
  | "howWeHelpStack___cards___icon___contentful_id"
  | "howWeHelpStack___cards___icon___id"
  | "howWeHelpStack___cards___icon___spaceId"
  | "howWeHelpStack___cards___icon___createdAt"
  | "howWeHelpStack___cards___icon___updatedAt"
  | "howWeHelpStack___cards___icon___title"
  | "howWeHelpStack___cards___icon___description"
  | "howWeHelpStack___cards___icon___node_locale"
  | "howWeHelpStack___cards___icon___gatsbyImageData"
  | "howWeHelpStack___cards___icon___children"
  | "howWeHelpStack___cards___stack"
  | "howWeHelpStack___cards___stack___contentful_id"
  | "howWeHelpStack___cards___stack___id"
  | "howWeHelpStack___cards___stack___node_locale"
  | "howWeHelpStack___cards___stack___cards"
  | "howWeHelpStack___cards___stack___home_page"
  | "howWeHelpStack___cards___stack___spaceId"
  | "howWeHelpStack___cards___stack___createdAt"
  | "howWeHelpStack___cards___stack___updatedAt"
  | "howWeHelpStack___cards___stack___childrenContentfulStackTextTextNode"
  | "howWeHelpStack___cards___stack___childrenContentfulStackText2TextNode"
  | "howWeHelpStack___cards___stack___children"
  | "howWeHelpStack___cards___description___id"
  | "howWeHelpStack___cards___description___children"
  | "howWeHelpStack___cards___description___description"
  | "howWeHelpStack___cards___spaceId"
  | "howWeHelpStack___cards___createdAt"
  | "howWeHelpStack___cards___updatedAt"
  | "howWeHelpStack___cards___sys___type"
  | "howWeHelpStack___cards___sys___revision"
  | "howWeHelpStack___cards___services_page"
  | "howWeHelpStack___cards___services_page___contentful_id"
  | "howWeHelpStack___cards___services_page___id"
  | "howWeHelpStack___cards___services_page___node_locale"
  | "howWeHelpStack___cards___services_page___slug"
  | "howWeHelpStack___cards___services_page___serviceCards"
  | "howWeHelpStack___cards___services_page___spaceId"
  | "howWeHelpStack___cards___services_page___createdAt"
  | "howWeHelpStack___cards___services_page___updatedAt"
  | "howWeHelpStack___cards___services_page___children"
  | "howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "howWeHelpStack___cards___childContentfulGeneralCardDescriptionTextNode___id"
  | "howWeHelpStack___cards___childContentfulGeneralCardDescriptionTextNode___children"
  | "howWeHelpStack___cards___childContentfulGeneralCardDescriptionTextNode___description"
  | "howWeHelpStack___cards___parent___id"
  | "howWeHelpStack___cards___parent___children"
  | "howWeHelpStack___cards___children"
  | "howWeHelpStack___cards___children___id"
  | "howWeHelpStack___cards___children___children"
  | "howWeHelpStack___cards___internal___content"
  | "howWeHelpStack___cards___internal___contentDigest"
  | "howWeHelpStack___cards___internal___description"
  | "howWeHelpStack___cards___internal___fieldOwners"
  | "howWeHelpStack___cards___internal___ignoreType"
  | "howWeHelpStack___cards___internal___mediaType"
  | "howWeHelpStack___cards___internal___owner"
  | "howWeHelpStack___cards___internal___type"
  | "howWeHelpStack___home_page"
  | "howWeHelpStack___home_page___contentful_id"
  | "howWeHelpStack___home_page___id"
  | "howWeHelpStack___home_page___node_locale"
  | "howWeHelpStack___home_page___slug"
  | "howWeHelpStack___home_page___homeBanner___contentful_id"
  | "howWeHelpStack___home_page___homeBanner___id"
  | "howWeHelpStack___home_page___homeBanner___node_locale"
  | "howWeHelpStack___home_page___homeBanner___heading"
  | "howWeHelpStack___home_page___homeBanner___subHeader"
  | "howWeHelpStack___home_page___homeBanner___community_page"
  | "howWeHelpStack___home_page___homeBanner___spaceId"
  | "howWeHelpStack___home_page___homeBanner___createdAt"
  | "howWeHelpStack___home_page___homeBanner___updatedAt"
  | "howWeHelpStack___home_page___homeBanner___services_page"
  | "howWeHelpStack___home_page___homeBanner___home_page"
  | "howWeHelpStack___home_page___homeBanner___contact_page"
  | "howWeHelpStack___home_page___homeBanner___about_us_page"
  | "howWeHelpStack___home_page___homeBanner___children"
  | "howWeHelpStack___home_page___belowHero___contentful_id"
  | "howWeHelpStack___home_page___belowHero___id"
  | "howWeHelpStack___home_page___belowHero___node_locale"
  | "howWeHelpStack___home_page___belowHero___about_us_page"
  | "howWeHelpStack___home_page___belowHero___spaceId"
  | "howWeHelpStack___home_page___belowHero___createdAt"
  | "howWeHelpStack___home_page___belowHero___updatedAt"
  | "howWeHelpStack___home_page___belowHero___home_page"
  | "howWeHelpStack___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "howWeHelpStack___home_page___belowHero___children"
  | "howWeHelpStack___home_page___ctaStack___contentful_id"
  | "howWeHelpStack___home_page___ctaStack___id"
  | "howWeHelpStack___home_page___ctaStack___node_locale"
  | "howWeHelpStack___home_page___ctaStack___cards"
  | "howWeHelpStack___home_page___ctaStack___home_page"
  | "howWeHelpStack___home_page___ctaStack___spaceId"
  | "howWeHelpStack___home_page___ctaStack___createdAt"
  | "howWeHelpStack___home_page___ctaStack___updatedAt"
  | "howWeHelpStack___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "howWeHelpStack___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "howWeHelpStack___home_page___ctaStack___children"
  | "howWeHelpStack___home_page___howWeHelpStack___contentful_id"
  | "howWeHelpStack___home_page___howWeHelpStack___id"
  | "howWeHelpStack___home_page___howWeHelpStack___node_locale"
  | "howWeHelpStack___home_page___howWeHelpStack___cards"
  | "howWeHelpStack___home_page___howWeHelpStack___home_page"
  | "howWeHelpStack___home_page___howWeHelpStack___spaceId"
  | "howWeHelpStack___home_page___howWeHelpStack___createdAt"
  | "howWeHelpStack___home_page___howWeHelpStack___updatedAt"
  | "howWeHelpStack___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "howWeHelpStack___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "howWeHelpStack___home_page___howWeHelpStack___children"
  | "howWeHelpStack___home_page___testimonialSlides"
  | "howWeHelpStack___home_page___testimonialSlides___contentful_id"
  | "howWeHelpStack___home_page___testimonialSlides___id"
  | "howWeHelpStack___home_page___testimonialSlides___node_locale"
  | "howWeHelpStack___home_page___testimonialSlides___name"
  | "howWeHelpStack___home_page___testimonialSlides___jobTitle"
  | "howWeHelpStack___home_page___testimonialSlides___companyName"
  | "howWeHelpStack___home_page___testimonialSlides___home_page"
  | "howWeHelpStack___home_page___testimonialSlides___spaceId"
  | "howWeHelpStack___home_page___testimonialSlides___createdAt"
  | "howWeHelpStack___home_page___testimonialSlides___updatedAt"
  | "howWeHelpStack___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "howWeHelpStack___home_page___testimonialSlides___children"
  | "howWeHelpStack___home_page___carouselImages___contentful_id"
  | "howWeHelpStack___home_page___carouselImages___id"
  | "howWeHelpStack___home_page___carouselImages___node_locale"
  | "howWeHelpStack___home_page___carouselImages___images"
  | "howWeHelpStack___home_page___carouselImages___home_page"
  | "howWeHelpStack___home_page___carouselImages___about_us_page"
  | "howWeHelpStack___home_page___carouselImages___spaceId"
  | "howWeHelpStack___home_page___carouselImages___createdAt"
  | "howWeHelpStack___home_page___carouselImages___updatedAt"
  | "howWeHelpStack___home_page___carouselImages___children"
  | "howWeHelpStack___home_page___spaceId"
  | "howWeHelpStack___home_page___createdAt"
  | "howWeHelpStack___home_page___updatedAt"
  | "howWeHelpStack___home_page___sys___type"
  | "howWeHelpStack___home_page___sys___revision"
  | "howWeHelpStack___home_page___parent___id"
  | "howWeHelpStack___home_page___parent___children"
  | "howWeHelpStack___home_page___children"
  | "howWeHelpStack___home_page___children___id"
  | "howWeHelpStack___home_page___children___children"
  | "howWeHelpStack___home_page___internal___content"
  | "howWeHelpStack___home_page___internal___contentDigest"
  | "howWeHelpStack___home_page___internal___description"
  | "howWeHelpStack___home_page___internal___fieldOwners"
  | "howWeHelpStack___home_page___internal___ignoreType"
  | "howWeHelpStack___home_page___internal___mediaType"
  | "howWeHelpStack___home_page___internal___owner"
  | "howWeHelpStack___home_page___internal___type"
  | "howWeHelpStack___text___id"
  | "howWeHelpStack___text___parent___id"
  | "howWeHelpStack___text___parent___children"
  | "howWeHelpStack___text___children"
  | "howWeHelpStack___text___children___id"
  | "howWeHelpStack___text___children___children"
  | "howWeHelpStack___text___internal___content"
  | "howWeHelpStack___text___internal___contentDigest"
  | "howWeHelpStack___text___internal___description"
  | "howWeHelpStack___text___internal___fieldOwners"
  | "howWeHelpStack___text___internal___ignoreType"
  | "howWeHelpStack___text___internal___mediaType"
  | "howWeHelpStack___text___internal___owner"
  | "howWeHelpStack___text___internal___type"
  | "howWeHelpStack___text___text"
  | "howWeHelpStack___text___sys___type"
  | "howWeHelpStack___text2___id"
  | "howWeHelpStack___text2___parent___id"
  | "howWeHelpStack___text2___parent___children"
  | "howWeHelpStack___text2___children"
  | "howWeHelpStack___text2___children___id"
  | "howWeHelpStack___text2___children___children"
  | "howWeHelpStack___text2___internal___content"
  | "howWeHelpStack___text2___internal___contentDigest"
  | "howWeHelpStack___text2___internal___description"
  | "howWeHelpStack___text2___internal___fieldOwners"
  | "howWeHelpStack___text2___internal___ignoreType"
  | "howWeHelpStack___text2___internal___mediaType"
  | "howWeHelpStack___text2___internal___owner"
  | "howWeHelpStack___text2___internal___type"
  | "howWeHelpStack___text2___text2"
  | "howWeHelpStack___text2___sys___type"
  | "howWeHelpStack___spaceId"
  | "howWeHelpStack___createdAt"
  | "howWeHelpStack___updatedAt"
  | "howWeHelpStack___sys___type"
  | "howWeHelpStack___sys___revision"
  | "howWeHelpStack___childrenContentfulStackTextTextNode"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___id"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___parent___id"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___parent___children"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___children"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___children___id"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___children___children"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___content"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___contentDigest"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___description"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___fieldOwners"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___ignoreType"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___mediaType"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___owner"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___internal___type"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___text"
  | "howWeHelpStack___childrenContentfulStackTextTextNode___sys___type"
  | "howWeHelpStack___childContentfulStackTextTextNode___id"
  | "howWeHelpStack___childContentfulStackTextTextNode___parent___id"
  | "howWeHelpStack___childContentfulStackTextTextNode___parent___children"
  | "howWeHelpStack___childContentfulStackTextTextNode___children"
  | "howWeHelpStack___childContentfulStackTextTextNode___children___id"
  | "howWeHelpStack___childContentfulStackTextTextNode___children___children"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___content"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___contentDigest"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___description"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___fieldOwners"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___ignoreType"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___mediaType"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___owner"
  | "howWeHelpStack___childContentfulStackTextTextNode___internal___type"
  | "howWeHelpStack___childContentfulStackTextTextNode___text"
  | "howWeHelpStack___childContentfulStackTextTextNode___sys___type"
  | "howWeHelpStack___childrenContentfulStackText2TextNode"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___id"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___parent___id"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___parent___children"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___children"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___children___id"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___children___children"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___content"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___contentDigest"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___description"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___fieldOwners"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___ignoreType"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___mediaType"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___owner"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___internal___type"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___text2"
  | "howWeHelpStack___childrenContentfulStackText2TextNode___sys___type"
  | "howWeHelpStack___childContentfulStackText2TextNode___id"
  | "howWeHelpStack___childContentfulStackText2TextNode___parent___id"
  | "howWeHelpStack___childContentfulStackText2TextNode___parent___children"
  | "howWeHelpStack___childContentfulStackText2TextNode___children"
  | "howWeHelpStack___childContentfulStackText2TextNode___children___id"
  | "howWeHelpStack___childContentfulStackText2TextNode___children___children"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___content"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___contentDigest"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___description"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___fieldOwners"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___ignoreType"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___mediaType"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___owner"
  | "howWeHelpStack___childContentfulStackText2TextNode___internal___type"
  | "howWeHelpStack___childContentfulStackText2TextNode___text2"
  | "howWeHelpStack___childContentfulStackText2TextNode___sys___type"
  | "howWeHelpStack___parent___id"
  | "howWeHelpStack___parent___parent___id"
  | "howWeHelpStack___parent___parent___children"
  | "howWeHelpStack___parent___children"
  | "howWeHelpStack___parent___children___id"
  | "howWeHelpStack___parent___children___children"
  | "howWeHelpStack___parent___internal___content"
  | "howWeHelpStack___parent___internal___contentDigest"
  | "howWeHelpStack___parent___internal___description"
  | "howWeHelpStack___parent___internal___fieldOwners"
  | "howWeHelpStack___parent___internal___ignoreType"
  | "howWeHelpStack___parent___internal___mediaType"
  | "howWeHelpStack___parent___internal___owner"
  | "howWeHelpStack___parent___internal___type"
  | "howWeHelpStack___children"
  | "howWeHelpStack___children___id"
  | "howWeHelpStack___children___parent___id"
  | "howWeHelpStack___children___parent___children"
  | "howWeHelpStack___children___children"
  | "howWeHelpStack___children___children___id"
  | "howWeHelpStack___children___children___children"
  | "howWeHelpStack___children___internal___content"
  | "howWeHelpStack___children___internal___contentDigest"
  | "howWeHelpStack___children___internal___description"
  | "howWeHelpStack___children___internal___fieldOwners"
  | "howWeHelpStack___children___internal___ignoreType"
  | "howWeHelpStack___children___internal___mediaType"
  | "howWeHelpStack___children___internal___owner"
  | "howWeHelpStack___children___internal___type"
  | "howWeHelpStack___internal___content"
  | "howWeHelpStack___internal___contentDigest"
  | "howWeHelpStack___internal___description"
  | "howWeHelpStack___internal___fieldOwners"
  | "howWeHelpStack___internal___ignoreType"
  | "howWeHelpStack___internal___mediaType"
  | "howWeHelpStack___internal___owner"
  | "howWeHelpStack___internal___type"
  | "testimonialSlides"
  | "testimonialSlides___contentful_id"
  | "testimonialSlides___id"
  | "testimonialSlides___node_locale"
  | "testimonialSlides___name"
  | "testimonialSlides___jobTitle"
  | "testimonialSlides___companyName"
  | "testimonialSlides___image___contentful_id"
  | "testimonialSlides___image___id"
  | "testimonialSlides___image___spaceId"
  | "testimonialSlides___image___createdAt"
  | "testimonialSlides___image___updatedAt"
  | "testimonialSlides___image___file___url"
  | "testimonialSlides___image___file___fileName"
  | "testimonialSlides___image___file___contentType"
  | "testimonialSlides___image___title"
  | "testimonialSlides___image___description"
  | "testimonialSlides___image___node_locale"
  | "testimonialSlides___image___sys___type"
  | "testimonialSlides___image___sys___revision"
  | "testimonialSlides___image___fixed___base64"
  | "testimonialSlides___image___fixed___tracedSVG"
  | "testimonialSlides___image___fixed___aspectRatio"
  | "testimonialSlides___image___fixed___width"
  | "testimonialSlides___image___fixed___height"
  | "testimonialSlides___image___fixed___src"
  | "testimonialSlides___image___fixed___srcSet"
  | "testimonialSlides___image___fixed___srcWebp"
  | "testimonialSlides___image___fixed___srcSetWebp"
  | "testimonialSlides___image___fluid___base64"
  | "testimonialSlides___image___fluid___tracedSVG"
  | "testimonialSlides___image___fluid___aspectRatio"
  | "testimonialSlides___image___fluid___src"
  | "testimonialSlides___image___fluid___srcSet"
  | "testimonialSlides___image___fluid___srcWebp"
  | "testimonialSlides___image___fluid___srcSetWebp"
  | "testimonialSlides___image___fluid___sizes"
  | "testimonialSlides___image___gatsbyImageData"
  | "testimonialSlides___image___resize___base64"
  | "testimonialSlides___image___resize___tracedSVG"
  | "testimonialSlides___image___resize___src"
  | "testimonialSlides___image___resize___width"
  | "testimonialSlides___image___resize___height"
  | "testimonialSlides___image___resize___aspectRatio"
  | "testimonialSlides___image___parent___id"
  | "testimonialSlides___image___parent___children"
  | "testimonialSlides___image___children"
  | "testimonialSlides___image___children___id"
  | "testimonialSlides___image___children___children"
  | "testimonialSlides___image___internal___content"
  | "testimonialSlides___image___internal___contentDigest"
  | "testimonialSlides___image___internal___description"
  | "testimonialSlides___image___internal___fieldOwners"
  | "testimonialSlides___image___internal___ignoreType"
  | "testimonialSlides___image___internal___mediaType"
  | "testimonialSlides___image___internal___owner"
  | "testimonialSlides___image___internal___type"
  | "testimonialSlides___home_page"
  | "testimonialSlides___home_page___contentful_id"
  | "testimonialSlides___home_page___id"
  | "testimonialSlides___home_page___node_locale"
  | "testimonialSlides___home_page___slug"
  | "testimonialSlides___home_page___homeBanner___contentful_id"
  | "testimonialSlides___home_page___homeBanner___id"
  | "testimonialSlides___home_page___homeBanner___node_locale"
  | "testimonialSlides___home_page___homeBanner___heading"
  | "testimonialSlides___home_page___homeBanner___subHeader"
  | "testimonialSlides___home_page___homeBanner___community_page"
  | "testimonialSlides___home_page___homeBanner___spaceId"
  | "testimonialSlides___home_page___homeBanner___createdAt"
  | "testimonialSlides___home_page___homeBanner___updatedAt"
  | "testimonialSlides___home_page___homeBanner___services_page"
  | "testimonialSlides___home_page___homeBanner___home_page"
  | "testimonialSlides___home_page___homeBanner___contact_page"
  | "testimonialSlides___home_page___homeBanner___about_us_page"
  | "testimonialSlides___home_page___homeBanner___children"
  | "testimonialSlides___home_page___belowHero___contentful_id"
  | "testimonialSlides___home_page___belowHero___id"
  | "testimonialSlides___home_page___belowHero___node_locale"
  | "testimonialSlides___home_page___belowHero___about_us_page"
  | "testimonialSlides___home_page___belowHero___spaceId"
  | "testimonialSlides___home_page___belowHero___createdAt"
  | "testimonialSlides___home_page___belowHero___updatedAt"
  | "testimonialSlides___home_page___belowHero___home_page"
  | "testimonialSlides___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "testimonialSlides___home_page___belowHero___children"
  | "testimonialSlides___home_page___ctaStack___contentful_id"
  | "testimonialSlides___home_page___ctaStack___id"
  | "testimonialSlides___home_page___ctaStack___node_locale"
  | "testimonialSlides___home_page___ctaStack___cards"
  | "testimonialSlides___home_page___ctaStack___home_page"
  | "testimonialSlides___home_page___ctaStack___spaceId"
  | "testimonialSlides___home_page___ctaStack___createdAt"
  | "testimonialSlides___home_page___ctaStack___updatedAt"
  | "testimonialSlides___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "testimonialSlides___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "testimonialSlides___home_page___ctaStack___children"
  | "testimonialSlides___home_page___howWeHelpStack___contentful_id"
  | "testimonialSlides___home_page___howWeHelpStack___id"
  | "testimonialSlides___home_page___howWeHelpStack___node_locale"
  | "testimonialSlides___home_page___howWeHelpStack___cards"
  | "testimonialSlides___home_page___howWeHelpStack___home_page"
  | "testimonialSlides___home_page___howWeHelpStack___spaceId"
  | "testimonialSlides___home_page___howWeHelpStack___createdAt"
  | "testimonialSlides___home_page___howWeHelpStack___updatedAt"
  | "testimonialSlides___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "testimonialSlides___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "testimonialSlides___home_page___howWeHelpStack___children"
  | "testimonialSlides___home_page___testimonialSlides"
  | "testimonialSlides___home_page___testimonialSlides___contentful_id"
  | "testimonialSlides___home_page___testimonialSlides___id"
  | "testimonialSlides___home_page___testimonialSlides___node_locale"
  | "testimonialSlides___home_page___testimonialSlides___name"
  | "testimonialSlides___home_page___testimonialSlides___jobTitle"
  | "testimonialSlides___home_page___testimonialSlides___companyName"
  | "testimonialSlides___home_page___testimonialSlides___home_page"
  | "testimonialSlides___home_page___testimonialSlides___spaceId"
  | "testimonialSlides___home_page___testimonialSlides___createdAt"
  | "testimonialSlides___home_page___testimonialSlides___updatedAt"
  | "testimonialSlides___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "testimonialSlides___home_page___testimonialSlides___children"
  | "testimonialSlides___home_page___carouselImages___contentful_id"
  | "testimonialSlides___home_page___carouselImages___id"
  | "testimonialSlides___home_page___carouselImages___node_locale"
  | "testimonialSlides___home_page___carouselImages___images"
  | "testimonialSlides___home_page___carouselImages___home_page"
  | "testimonialSlides___home_page___carouselImages___about_us_page"
  | "testimonialSlides___home_page___carouselImages___spaceId"
  | "testimonialSlides___home_page___carouselImages___createdAt"
  | "testimonialSlides___home_page___carouselImages___updatedAt"
  | "testimonialSlides___home_page___carouselImages___children"
  | "testimonialSlides___home_page___spaceId"
  | "testimonialSlides___home_page___createdAt"
  | "testimonialSlides___home_page___updatedAt"
  | "testimonialSlides___home_page___sys___type"
  | "testimonialSlides___home_page___sys___revision"
  | "testimonialSlides___home_page___parent___id"
  | "testimonialSlides___home_page___parent___children"
  | "testimonialSlides___home_page___children"
  | "testimonialSlides___home_page___children___id"
  | "testimonialSlides___home_page___children___children"
  | "testimonialSlides___home_page___internal___content"
  | "testimonialSlides___home_page___internal___contentDigest"
  | "testimonialSlides___home_page___internal___description"
  | "testimonialSlides___home_page___internal___fieldOwners"
  | "testimonialSlides___home_page___internal___ignoreType"
  | "testimonialSlides___home_page___internal___mediaType"
  | "testimonialSlides___home_page___internal___owner"
  | "testimonialSlides___home_page___internal___type"
  | "testimonialSlides___testimony___id"
  | "testimonialSlides___testimony___parent___id"
  | "testimonialSlides___testimony___parent___children"
  | "testimonialSlides___testimony___children"
  | "testimonialSlides___testimony___children___id"
  | "testimonialSlides___testimony___children___children"
  | "testimonialSlides___testimony___internal___content"
  | "testimonialSlides___testimony___internal___contentDigest"
  | "testimonialSlides___testimony___internal___description"
  | "testimonialSlides___testimony___internal___fieldOwners"
  | "testimonialSlides___testimony___internal___ignoreType"
  | "testimonialSlides___testimony___internal___mediaType"
  | "testimonialSlides___testimony___internal___owner"
  | "testimonialSlides___testimony___internal___type"
  | "testimonialSlides___testimony___testimony"
  | "testimonialSlides___testimony___sys___type"
  | "testimonialSlides___spaceId"
  | "testimonialSlides___createdAt"
  | "testimonialSlides___updatedAt"
  | "testimonialSlides___sys___type"
  | "testimonialSlides___sys___revision"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___parent___id"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___parent___children"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children___id"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children___children"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___content"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___contentDigest"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___description"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___fieldOwners"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___ignoreType"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___mediaType"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___owner"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___internal___type"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___sys___type"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___id"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___parent___id"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___parent___children"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children___id"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children___children"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___content"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___contentDigest"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___description"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___fieldOwners"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___ignoreType"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___mediaType"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___owner"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___internal___type"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___sys___type"
  | "testimonialSlides___parent___id"
  | "testimonialSlides___parent___parent___id"
  | "testimonialSlides___parent___parent___children"
  | "testimonialSlides___parent___children"
  | "testimonialSlides___parent___children___id"
  | "testimonialSlides___parent___children___children"
  | "testimonialSlides___parent___internal___content"
  | "testimonialSlides___parent___internal___contentDigest"
  | "testimonialSlides___parent___internal___description"
  | "testimonialSlides___parent___internal___fieldOwners"
  | "testimonialSlides___parent___internal___ignoreType"
  | "testimonialSlides___parent___internal___mediaType"
  | "testimonialSlides___parent___internal___owner"
  | "testimonialSlides___parent___internal___type"
  | "testimonialSlides___children"
  | "testimonialSlides___children___id"
  | "testimonialSlides___children___parent___id"
  | "testimonialSlides___children___parent___children"
  | "testimonialSlides___children___children"
  | "testimonialSlides___children___children___id"
  | "testimonialSlides___children___children___children"
  | "testimonialSlides___children___internal___content"
  | "testimonialSlides___children___internal___contentDigest"
  | "testimonialSlides___children___internal___description"
  | "testimonialSlides___children___internal___fieldOwners"
  | "testimonialSlides___children___internal___ignoreType"
  | "testimonialSlides___children___internal___mediaType"
  | "testimonialSlides___children___internal___owner"
  | "testimonialSlides___children___internal___type"
  | "testimonialSlides___internal___content"
  | "testimonialSlides___internal___contentDigest"
  | "testimonialSlides___internal___description"
  | "testimonialSlides___internal___fieldOwners"
  | "testimonialSlides___internal___ignoreType"
  | "testimonialSlides___internal___mediaType"
  | "testimonialSlides___internal___owner"
  | "testimonialSlides___internal___type"
  | "carouselImages___contentful_id"
  | "carouselImages___id"
  | "carouselImages___node_locale"
  | "carouselImages___images"
  | "carouselImages___images___contentful_id"
  | "carouselImages___images___id"
  | "carouselImages___images___spaceId"
  | "carouselImages___images___createdAt"
  | "carouselImages___images___updatedAt"
  | "carouselImages___images___file___url"
  | "carouselImages___images___file___fileName"
  | "carouselImages___images___file___contentType"
  | "carouselImages___images___title"
  | "carouselImages___images___description"
  | "carouselImages___images___node_locale"
  | "carouselImages___images___sys___type"
  | "carouselImages___images___sys___revision"
  | "carouselImages___images___fixed___base64"
  | "carouselImages___images___fixed___tracedSVG"
  | "carouselImages___images___fixed___aspectRatio"
  | "carouselImages___images___fixed___width"
  | "carouselImages___images___fixed___height"
  | "carouselImages___images___fixed___src"
  | "carouselImages___images___fixed___srcSet"
  | "carouselImages___images___fixed___srcWebp"
  | "carouselImages___images___fixed___srcSetWebp"
  | "carouselImages___images___fluid___base64"
  | "carouselImages___images___fluid___tracedSVG"
  | "carouselImages___images___fluid___aspectRatio"
  | "carouselImages___images___fluid___src"
  | "carouselImages___images___fluid___srcSet"
  | "carouselImages___images___fluid___srcWebp"
  | "carouselImages___images___fluid___srcSetWebp"
  | "carouselImages___images___fluid___sizes"
  | "carouselImages___images___gatsbyImageData"
  | "carouselImages___images___resize___base64"
  | "carouselImages___images___resize___tracedSVG"
  | "carouselImages___images___resize___src"
  | "carouselImages___images___resize___width"
  | "carouselImages___images___resize___height"
  | "carouselImages___images___resize___aspectRatio"
  | "carouselImages___images___parent___id"
  | "carouselImages___images___parent___children"
  | "carouselImages___images___children"
  | "carouselImages___images___children___id"
  | "carouselImages___images___children___children"
  | "carouselImages___images___internal___content"
  | "carouselImages___images___internal___contentDigest"
  | "carouselImages___images___internal___description"
  | "carouselImages___images___internal___fieldOwners"
  | "carouselImages___images___internal___ignoreType"
  | "carouselImages___images___internal___mediaType"
  | "carouselImages___images___internal___owner"
  | "carouselImages___images___internal___type"
  | "carouselImages___home_page"
  | "carouselImages___home_page___contentful_id"
  | "carouselImages___home_page___id"
  | "carouselImages___home_page___node_locale"
  | "carouselImages___home_page___slug"
  | "carouselImages___home_page___homeBanner___contentful_id"
  | "carouselImages___home_page___homeBanner___id"
  | "carouselImages___home_page___homeBanner___node_locale"
  | "carouselImages___home_page___homeBanner___heading"
  | "carouselImages___home_page___homeBanner___subHeader"
  | "carouselImages___home_page___homeBanner___community_page"
  | "carouselImages___home_page___homeBanner___spaceId"
  | "carouselImages___home_page___homeBanner___createdAt"
  | "carouselImages___home_page___homeBanner___updatedAt"
  | "carouselImages___home_page___homeBanner___services_page"
  | "carouselImages___home_page___homeBanner___home_page"
  | "carouselImages___home_page___homeBanner___contact_page"
  | "carouselImages___home_page___homeBanner___about_us_page"
  | "carouselImages___home_page___homeBanner___children"
  | "carouselImages___home_page___belowHero___contentful_id"
  | "carouselImages___home_page___belowHero___id"
  | "carouselImages___home_page___belowHero___node_locale"
  | "carouselImages___home_page___belowHero___about_us_page"
  | "carouselImages___home_page___belowHero___spaceId"
  | "carouselImages___home_page___belowHero___createdAt"
  | "carouselImages___home_page___belowHero___updatedAt"
  | "carouselImages___home_page___belowHero___home_page"
  | "carouselImages___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "carouselImages___home_page___belowHero___children"
  | "carouselImages___home_page___ctaStack___contentful_id"
  | "carouselImages___home_page___ctaStack___id"
  | "carouselImages___home_page___ctaStack___node_locale"
  | "carouselImages___home_page___ctaStack___cards"
  | "carouselImages___home_page___ctaStack___home_page"
  | "carouselImages___home_page___ctaStack___spaceId"
  | "carouselImages___home_page___ctaStack___createdAt"
  | "carouselImages___home_page___ctaStack___updatedAt"
  | "carouselImages___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "carouselImages___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "carouselImages___home_page___ctaStack___children"
  | "carouselImages___home_page___howWeHelpStack___contentful_id"
  | "carouselImages___home_page___howWeHelpStack___id"
  | "carouselImages___home_page___howWeHelpStack___node_locale"
  | "carouselImages___home_page___howWeHelpStack___cards"
  | "carouselImages___home_page___howWeHelpStack___home_page"
  | "carouselImages___home_page___howWeHelpStack___spaceId"
  | "carouselImages___home_page___howWeHelpStack___createdAt"
  | "carouselImages___home_page___howWeHelpStack___updatedAt"
  | "carouselImages___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "carouselImages___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "carouselImages___home_page___howWeHelpStack___children"
  | "carouselImages___home_page___testimonialSlides"
  | "carouselImages___home_page___testimonialSlides___contentful_id"
  | "carouselImages___home_page___testimonialSlides___id"
  | "carouselImages___home_page___testimonialSlides___node_locale"
  | "carouselImages___home_page___testimonialSlides___name"
  | "carouselImages___home_page___testimonialSlides___jobTitle"
  | "carouselImages___home_page___testimonialSlides___companyName"
  | "carouselImages___home_page___testimonialSlides___home_page"
  | "carouselImages___home_page___testimonialSlides___spaceId"
  | "carouselImages___home_page___testimonialSlides___createdAt"
  | "carouselImages___home_page___testimonialSlides___updatedAt"
  | "carouselImages___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "carouselImages___home_page___testimonialSlides___children"
  | "carouselImages___home_page___carouselImages___contentful_id"
  | "carouselImages___home_page___carouselImages___id"
  | "carouselImages___home_page___carouselImages___node_locale"
  | "carouselImages___home_page___carouselImages___images"
  | "carouselImages___home_page___carouselImages___home_page"
  | "carouselImages___home_page___carouselImages___about_us_page"
  | "carouselImages___home_page___carouselImages___spaceId"
  | "carouselImages___home_page___carouselImages___createdAt"
  | "carouselImages___home_page___carouselImages___updatedAt"
  | "carouselImages___home_page___carouselImages___children"
  | "carouselImages___home_page___spaceId"
  | "carouselImages___home_page___createdAt"
  | "carouselImages___home_page___updatedAt"
  | "carouselImages___home_page___sys___type"
  | "carouselImages___home_page___sys___revision"
  | "carouselImages___home_page___parent___id"
  | "carouselImages___home_page___parent___children"
  | "carouselImages___home_page___children"
  | "carouselImages___home_page___children___id"
  | "carouselImages___home_page___children___children"
  | "carouselImages___home_page___internal___content"
  | "carouselImages___home_page___internal___contentDigest"
  | "carouselImages___home_page___internal___description"
  | "carouselImages___home_page___internal___fieldOwners"
  | "carouselImages___home_page___internal___ignoreType"
  | "carouselImages___home_page___internal___mediaType"
  | "carouselImages___home_page___internal___owner"
  | "carouselImages___home_page___internal___type"
  | "carouselImages___about_us_page"
  | "carouselImages___about_us_page___contentful_id"
  | "carouselImages___about_us_page___id"
  | "carouselImages___about_us_page___node_locale"
  | "carouselImages___about_us_page___slug"
  | "carouselImages___about_us_page___aboutUsBanner___contentful_id"
  | "carouselImages___about_us_page___aboutUsBanner___id"
  | "carouselImages___about_us_page___aboutUsBanner___node_locale"
  | "carouselImages___about_us_page___aboutUsBanner___heading"
  | "carouselImages___about_us_page___aboutUsBanner___subHeader"
  | "carouselImages___about_us_page___aboutUsBanner___community_page"
  | "carouselImages___about_us_page___aboutUsBanner___spaceId"
  | "carouselImages___about_us_page___aboutUsBanner___createdAt"
  | "carouselImages___about_us_page___aboutUsBanner___updatedAt"
  | "carouselImages___about_us_page___aboutUsBanner___services_page"
  | "carouselImages___about_us_page___aboutUsBanner___home_page"
  | "carouselImages___about_us_page___aboutUsBanner___contact_page"
  | "carouselImages___about_us_page___aboutUsBanner___about_us_page"
  | "carouselImages___about_us_page___aboutUsBanner___children"
  | "carouselImages___about_us_page___whatWeDo___contentful_id"
  | "carouselImages___about_us_page___whatWeDo___id"
  | "carouselImages___about_us_page___whatWeDo___node_locale"
  | "carouselImages___about_us_page___whatWeDo___about_us_page"
  | "carouselImages___about_us_page___whatWeDo___spaceId"
  | "carouselImages___about_us_page___whatWeDo___createdAt"
  | "carouselImages___about_us_page___whatWeDo___updatedAt"
  | "carouselImages___about_us_page___whatWeDo___home_page"
  | "carouselImages___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "carouselImages___about_us_page___whatWeDo___children"
  | "carouselImages___about_us_page___carouselImages___contentful_id"
  | "carouselImages___about_us_page___carouselImages___id"
  | "carouselImages___about_us_page___carouselImages___node_locale"
  | "carouselImages___about_us_page___carouselImages___images"
  | "carouselImages___about_us_page___carouselImages___home_page"
  | "carouselImages___about_us_page___carouselImages___about_us_page"
  | "carouselImages___about_us_page___carouselImages___spaceId"
  | "carouselImages___about_us_page___carouselImages___createdAt"
  | "carouselImages___about_us_page___carouselImages___updatedAt"
  | "carouselImages___about_us_page___carouselImages___children"
  | "carouselImages___about_us_page___ourTeam"
  | "carouselImages___about_us_page___ourTeam___contentful_id"
  | "carouselImages___about_us_page___ourTeam___id"
  | "carouselImages___about_us_page___ourTeam___node_locale"
  | "carouselImages___about_us_page___ourTeam___name"
  | "carouselImages___about_us_page___ourTeam___jobTitle"
  | "carouselImages___about_us_page___ourTeam___cardSize"
  | "carouselImages___about_us_page___ourTeam___about_us_page"
  | "carouselImages___about_us_page___ourTeam___spaceId"
  | "carouselImages___about_us_page___ourTeam___createdAt"
  | "carouselImages___about_us_page___ourTeam___updatedAt"
  | "carouselImages___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "carouselImages___about_us_page___ourTeam___children"
  | "carouselImages___about_us_page___spaceId"
  | "carouselImages___about_us_page___createdAt"
  | "carouselImages___about_us_page___updatedAt"
  | "carouselImages___about_us_page___sys___type"
  | "carouselImages___about_us_page___sys___revision"
  | "carouselImages___about_us_page___parent___id"
  | "carouselImages___about_us_page___parent___children"
  | "carouselImages___about_us_page___children"
  | "carouselImages___about_us_page___children___id"
  | "carouselImages___about_us_page___children___children"
  | "carouselImages___about_us_page___internal___content"
  | "carouselImages___about_us_page___internal___contentDigest"
  | "carouselImages___about_us_page___internal___description"
  | "carouselImages___about_us_page___internal___fieldOwners"
  | "carouselImages___about_us_page___internal___ignoreType"
  | "carouselImages___about_us_page___internal___mediaType"
  | "carouselImages___about_us_page___internal___owner"
  | "carouselImages___about_us_page___internal___type"
  | "carouselImages___spaceId"
  | "carouselImages___createdAt"
  | "carouselImages___updatedAt"
  | "carouselImages___sys___type"
  | "carouselImages___sys___revision"
  | "carouselImages___parent___id"
  | "carouselImages___parent___parent___id"
  | "carouselImages___parent___parent___children"
  | "carouselImages___parent___children"
  | "carouselImages___parent___children___id"
  | "carouselImages___parent___children___children"
  | "carouselImages___parent___internal___content"
  | "carouselImages___parent___internal___contentDigest"
  | "carouselImages___parent___internal___description"
  | "carouselImages___parent___internal___fieldOwners"
  | "carouselImages___parent___internal___ignoreType"
  | "carouselImages___parent___internal___mediaType"
  | "carouselImages___parent___internal___owner"
  | "carouselImages___parent___internal___type"
  | "carouselImages___children"
  | "carouselImages___children___id"
  | "carouselImages___children___parent___id"
  | "carouselImages___children___parent___children"
  | "carouselImages___children___children"
  | "carouselImages___children___children___id"
  | "carouselImages___children___children___children"
  | "carouselImages___children___internal___content"
  | "carouselImages___children___internal___contentDigest"
  | "carouselImages___children___internal___description"
  | "carouselImages___children___internal___fieldOwners"
  | "carouselImages___children___internal___ignoreType"
  | "carouselImages___children___internal___mediaType"
  | "carouselImages___children___internal___owner"
  | "carouselImages___children___internal___type"
  | "carouselImages___internal___content"
  | "carouselImages___internal___contentDigest"
  | "carouselImages___internal___description"
  | "carouselImages___internal___fieldOwners"
  | "carouselImages___internal___ignoreType"
  | "carouselImages___internal___mediaType"
  | "carouselImages___internal___owner"
  | "carouselImages___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulHomePageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulHomePageEdge>
  nodes: Array<ContentfulHomePage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulHomePageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulStackConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulStackEdge>
  nodes: Array<ContentfulStack>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulStackGroupConnection>
}

export type ContentfulStackConnectionDistinctArgs = {
  field: ContentfulStackFieldsEnum
}

export type ContentfulStackConnectionMaxArgs = {
  field: ContentfulStackFieldsEnum
}

export type ContentfulStackConnectionMinArgs = {
  field: ContentfulStackFieldsEnum
}

export type ContentfulStackConnectionSumArgs = {
  field: ContentfulStackFieldsEnum
}

export type ContentfulStackConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulStackFieldsEnum
}

export type ContentfulStackEdge = {
  next?: Maybe<ContentfulStack>
  node: ContentfulStack
  previous?: Maybe<ContentfulStack>
}

export type ContentfulStackFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "cards"
  | "cards___contentful_id"
  | "cards___id"
  | "cards___node_locale"
  | "cards___title"
  | "cards___internalLink"
  | "cards___icon___contentful_id"
  | "cards___icon___id"
  | "cards___icon___spaceId"
  | "cards___icon___createdAt"
  | "cards___icon___updatedAt"
  | "cards___icon___file___url"
  | "cards___icon___file___fileName"
  | "cards___icon___file___contentType"
  | "cards___icon___title"
  | "cards___icon___description"
  | "cards___icon___node_locale"
  | "cards___icon___sys___type"
  | "cards___icon___sys___revision"
  | "cards___icon___fixed___base64"
  | "cards___icon___fixed___tracedSVG"
  | "cards___icon___fixed___aspectRatio"
  | "cards___icon___fixed___width"
  | "cards___icon___fixed___height"
  | "cards___icon___fixed___src"
  | "cards___icon___fixed___srcSet"
  | "cards___icon___fixed___srcWebp"
  | "cards___icon___fixed___srcSetWebp"
  | "cards___icon___fluid___base64"
  | "cards___icon___fluid___tracedSVG"
  | "cards___icon___fluid___aspectRatio"
  | "cards___icon___fluid___src"
  | "cards___icon___fluid___srcSet"
  | "cards___icon___fluid___srcWebp"
  | "cards___icon___fluid___srcSetWebp"
  | "cards___icon___fluid___sizes"
  | "cards___icon___gatsbyImageData"
  | "cards___icon___resize___base64"
  | "cards___icon___resize___tracedSVG"
  | "cards___icon___resize___src"
  | "cards___icon___resize___width"
  | "cards___icon___resize___height"
  | "cards___icon___resize___aspectRatio"
  | "cards___icon___parent___id"
  | "cards___icon___parent___children"
  | "cards___icon___children"
  | "cards___icon___children___id"
  | "cards___icon___children___children"
  | "cards___icon___internal___content"
  | "cards___icon___internal___contentDigest"
  | "cards___icon___internal___description"
  | "cards___icon___internal___fieldOwners"
  | "cards___icon___internal___ignoreType"
  | "cards___icon___internal___mediaType"
  | "cards___icon___internal___owner"
  | "cards___icon___internal___type"
  | "cards___stack"
  | "cards___stack___contentful_id"
  | "cards___stack___id"
  | "cards___stack___node_locale"
  | "cards___stack___cards"
  | "cards___stack___cards___contentful_id"
  | "cards___stack___cards___id"
  | "cards___stack___cards___node_locale"
  | "cards___stack___cards___title"
  | "cards___stack___cards___internalLink"
  | "cards___stack___cards___stack"
  | "cards___stack___cards___spaceId"
  | "cards___stack___cards___createdAt"
  | "cards___stack___cards___updatedAt"
  | "cards___stack___cards___services_page"
  | "cards___stack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "cards___stack___cards___children"
  | "cards___stack___home_page"
  | "cards___stack___home_page___contentful_id"
  | "cards___stack___home_page___id"
  | "cards___stack___home_page___node_locale"
  | "cards___stack___home_page___slug"
  | "cards___stack___home_page___testimonialSlides"
  | "cards___stack___home_page___spaceId"
  | "cards___stack___home_page___createdAt"
  | "cards___stack___home_page___updatedAt"
  | "cards___stack___home_page___children"
  | "cards___stack___text___id"
  | "cards___stack___text___children"
  | "cards___stack___text___text"
  | "cards___stack___text2___id"
  | "cards___stack___text2___children"
  | "cards___stack___text2___text2"
  | "cards___stack___spaceId"
  | "cards___stack___createdAt"
  | "cards___stack___updatedAt"
  | "cards___stack___sys___type"
  | "cards___stack___sys___revision"
  | "cards___stack___childrenContentfulStackTextTextNode"
  | "cards___stack___childrenContentfulStackTextTextNode___id"
  | "cards___stack___childrenContentfulStackTextTextNode___children"
  | "cards___stack___childrenContentfulStackTextTextNode___text"
  | "cards___stack___childContentfulStackTextTextNode___id"
  | "cards___stack___childContentfulStackTextTextNode___children"
  | "cards___stack___childContentfulStackTextTextNode___text"
  | "cards___stack___childrenContentfulStackText2TextNode"
  | "cards___stack___childrenContentfulStackText2TextNode___id"
  | "cards___stack___childrenContentfulStackText2TextNode___children"
  | "cards___stack___childrenContentfulStackText2TextNode___text2"
  | "cards___stack___childContentfulStackText2TextNode___id"
  | "cards___stack___childContentfulStackText2TextNode___children"
  | "cards___stack___childContentfulStackText2TextNode___text2"
  | "cards___stack___parent___id"
  | "cards___stack___parent___children"
  | "cards___stack___children"
  | "cards___stack___children___id"
  | "cards___stack___children___children"
  | "cards___stack___internal___content"
  | "cards___stack___internal___contentDigest"
  | "cards___stack___internal___description"
  | "cards___stack___internal___fieldOwners"
  | "cards___stack___internal___ignoreType"
  | "cards___stack___internal___mediaType"
  | "cards___stack___internal___owner"
  | "cards___stack___internal___type"
  | "cards___description___id"
  | "cards___description___parent___id"
  | "cards___description___parent___children"
  | "cards___description___children"
  | "cards___description___children___id"
  | "cards___description___children___children"
  | "cards___description___internal___content"
  | "cards___description___internal___contentDigest"
  | "cards___description___internal___description"
  | "cards___description___internal___fieldOwners"
  | "cards___description___internal___ignoreType"
  | "cards___description___internal___mediaType"
  | "cards___description___internal___owner"
  | "cards___description___internal___type"
  | "cards___description___description"
  | "cards___description___sys___type"
  | "cards___spaceId"
  | "cards___createdAt"
  | "cards___updatedAt"
  | "cards___sys___type"
  | "cards___sys___revision"
  | "cards___services_page"
  | "cards___services_page___contentful_id"
  | "cards___services_page___id"
  | "cards___services_page___node_locale"
  | "cards___services_page___slug"
  | "cards___services_page___servicesBanner___contentful_id"
  | "cards___services_page___servicesBanner___id"
  | "cards___services_page___servicesBanner___node_locale"
  | "cards___services_page___servicesBanner___heading"
  | "cards___services_page___servicesBanner___subHeader"
  | "cards___services_page___servicesBanner___community_page"
  | "cards___services_page___servicesBanner___spaceId"
  | "cards___services_page___servicesBanner___createdAt"
  | "cards___services_page___servicesBanner___updatedAt"
  | "cards___services_page___servicesBanner___services_page"
  | "cards___services_page___servicesBanner___home_page"
  | "cards___services_page___servicesBanner___contact_page"
  | "cards___services_page___servicesBanner___about_us_page"
  | "cards___services_page___servicesBanner___children"
  | "cards___services_page___serviceCards"
  | "cards___services_page___serviceCards___contentful_id"
  | "cards___services_page___serviceCards___id"
  | "cards___services_page___serviceCards___node_locale"
  | "cards___services_page___serviceCards___title"
  | "cards___services_page___serviceCards___internalLink"
  | "cards___services_page___serviceCards___stack"
  | "cards___services_page___serviceCards___spaceId"
  | "cards___services_page___serviceCards___createdAt"
  | "cards___services_page___serviceCards___updatedAt"
  | "cards___services_page___serviceCards___services_page"
  | "cards___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "cards___services_page___serviceCards___children"
  | "cards___services_page___spaceId"
  | "cards___services_page___createdAt"
  | "cards___services_page___updatedAt"
  | "cards___services_page___sys___type"
  | "cards___services_page___sys___revision"
  | "cards___services_page___parent___id"
  | "cards___services_page___parent___children"
  | "cards___services_page___children"
  | "cards___services_page___children___id"
  | "cards___services_page___children___children"
  | "cards___services_page___internal___content"
  | "cards___services_page___internal___contentDigest"
  | "cards___services_page___internal___description"
  | "cards___services_page___internal___fieldOwners"
  | "cards___services_page___internal___ignoreType"
  | "cards___services_page___internal___mediaType"
  | "cards___services_page___internal___owner"
  | "cards___services_page___internal___type"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___parent___id"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___parent___children"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___children___id"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___children___children"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___content"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___contentDigest"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___description"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___fieldOwners"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___ignoreType"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___mediaType"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___owner"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___internal___type"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "cards___childrenContentfulGeneralCardDescriptionTextNode___sys___type"
  | "cards___childContentfulGeneralCardDescriptionTextNode___id"
  | "cards___childContentfulGeneralCardDescriptionTextNode___parent___id"
  | "cards___childContentfulGeneralCardDescriptionTextNode___parent___children"
  | "cards___childContentfulGeneralCardDescriptionTextNode___children"
  | "cards___childContentfulGeneralCardDescriptionTextNode___children___id"
  | "cards___childContentfulGeneralCardDescriptionTextNode___children___children"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___content"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___contentDigest"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___description"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___fieldOwners"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___ignoreType"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___mediaType"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___owner"
  | "cards___childContentfulGeneralCardDescriptionTextNode___internal___type"
  | "cards___childContentfulGeneralCardDescriptionTextNode___description"
  | "cards___childContentfulGeneralCardDescriptionTextNode___sys___type"
  | "cards___parent___id"
  | "cards___parent___parent___id"
  | "cards___parent___parent___children"
  | "cards___parent___children"
  | "cards___parent___children___id"
  | "cards___parent___children___children"
  | "cards___parent___internal___content"
  | "cards___parent___internal___contentDigest"
  | "cards___parent___internal___description"
  | "cards___parent___internal___fieldOwners"
  | "cards___parent___internal___ignoreType"
  | "cards___parent___internal___mediaType"
  | "cards___parent___internal___owner"
  | "cards___parent___internal___type"
  | "cards___children"
  | "cards___children___id"
  | "cards___children___parent___id"
  | "cards___children___parent___children"
  | "cards___children___children"
  | "cards___children___children___id"
  | "cards___children___children___children"
  | "cards___children___internal___content"
  | "cards___children___internal___contentDigest"
  | "cards___children___internal___description"
  | "cards___children___internal___fieldOwners"
  | "cards___children___internal___ignoreType"
  | "cards___children___internal___mediaType"
  | "cards___children___internal___owner"
  | "cards___children___internal___type"
  | "cards___internal___content"
  | "cards___internal___contentDigest"
  | "cards___internal___description"
  | "cards___internal___fieldOwners"
  | "cards___internal___ignoreType"
  | "cards___internal___mediaType"
  | "cards___internal___owner"
  | "cards___internal___type"
  | "home_page"
  | "home_page___contentful_id"
  | "home_page___id"
  | "home_page___node_locale"
  | "home_page___slug"
  | "home_page___homeBanner___contentful_id"
  | "home_page___homeBanner___id"
  | "home_page___homeBanner___node_locale"
  | "home_page___homeBanner___heading"
  | "home_page___homeBanner___subHeader"
  | "home_page___homeBanner___backgroundImage___contentful_id"
  | "home_page___homeBanner___backgroundImage___id"
  | "home_page___homeBanner___backgroundImage___spaceId"
  | "home_page___homeBanner___backgroundImage___createdAt"
  | "home_page___homeBanner___backgroundImage___updatedAt"
  | "home_page___homeBanner___backgroundImage___title"
  | "home_page___homeBanner___backgroundImage___description"
  | "home_page___homeBanner___backgroundImage___node_locale"
  | "home_page___homeBanner___backgroundImage___gatsbyImageData"
  | "home_page___homeBanner___backgroundImage___children"
  | "home_page___homeBanner___community_page"
  | "home_page___homeBanner___community_page___contentful_id"
  | "home_page___homeBanner___community_page___id"
  | "home_page___homeBanner___community_page___node_locale"
  | "home_page___homeBanner___community_page___slug"
  | "home_page___homeBanner___community_page___newsCards"
  | "home_page___homeBanner___community_page___blogCards"
  | "home_page___homeBanner___community_page___communityCards"
  | "home_page___homeBanner___community_page___spaceId"
  | "home_page___homeBanner___community_page___createdAt"
  | "home_page___homeBanner___community_page___updatedAt"
  | "home_page___homeBanner___community_page___children"
  | "home_page___homeBanner___spaceId"
  | "home_page___homeBanner___createdAt"
  | "home_page___homeBanner___updatedAt"
  | "home_page___homeBanner___sys___type"
  | "home_page___homeBanner___sys___revision"
  | "home_page___homeBanner___services_page"
  | "home_page___homeBanner___services_page___contentful_id"
  | "home_page___homeBanner___services_page___id"
  | "home_page___homeBanner___services_page___node_locale"
  | "home_page___homeBanner___services_page___slug"
  | "home_page___homeBanner___services_page___serviceCards"
  | "home_page___homeBanner___services_page___spaceId"
  | "home_page___homeBanner___services_page___createdAt"
  | "home_page___homeBanner___services_page___updatedAt"
  | "home_page___homeBanner___services_page___children"
  | "home_page___homeBanner___home_page"
  | "home_page___homeBanner___home_page___contentful_id"
  | "home_page___homeBanner___home_page___id"
  | "home_page___homeBanner___home_page___node_locale"
  | "home_page___homeBanner___home_page___slug"
  | "home_page___homeBanner___home_page___testimonialSlides"
  | "home_page___homeBanner___home_page___spaceId"
  | "home_page___homeBanner___home_page___createdAt"
  | "home_page___homeBanner___home_page___updatedAt"
  | "home_page___homeBanner___home_page___children"
  | "home_page___homeBanner___contact_page"
  | "home_page___homeBanner___contact_page___contentful_id"
  | "home_page___homeBanner___contact_page___id"
  | "home_page___homeBanner___contact_page___node_locale"
  | "home_page___homeBanner___contact_page___slug"
  | "home_page___homeBanner___contact_page___spaceId"
  | "home_page___homeBanner___contact_page___createdAt"
  | "home_page___homeBanner___contact_page___updatedAt"
  | "home_page___homeBanner___contact_page___children"
  | "home_page___homeBanner___about_us_page"
  | "home_page___homeBanner___about_us_page___contentful_id"
  | "home_page___homeBanner___about_us_page___id"
  | "home_page___homeBanner___about_us_page___node_locale"
  | "home_page___homeBanner___about_us_page___slug"
  | "home_page___homeBanner___about_us_page___ourTeam"
  | "home_page___homeBanner___about_us_page___spaceId"
  | "home_page___homeBanner___about_us_page___createdAt"
  | "home_page___homeBanner___about_us_page___updatedAt"
  | "home_page___homeBanner___about_us_page___children"
  | "home_page___homeBanner___parent___id"
  | "home_page___homeBanner___parent___children"
  | "home_page___homeBanner___children"
  | "home_page___homeBanner___children___id"
  | "home_page___homeBanner___children___children"
  | "home_page___homeBanner___internal___content"
  | "home_page___homeBanner___internal___contentDigest"
  | "home_page___homeBanner___internal___description"
  | "home_page___homeBanner___internal___fieldOwners"
  | "home_page___homeBanner___internal___ignoreType"
  | "home_page___homeBanner___internal___mediaType"
  | "home_page___homeBanner___internal___owner"
  | "home_page___homeBanner___internal___type"
  | "home_page___belowHero___contentful_id"
  | "home_page___belowHero___id"
  | "home_page___belowHero___node_locale"
  | "home_page___belowHero___image___contentful_id"
  | "home_page___belowHero___image___id"
  | "home_page___belowHero___image___spaceId"
  | "home_page___belowHero___image___createdAt"
  | "home_page___belowHero___image___updatedAt"
  | "home_page___belowHero___image___title"
  | "home_page___belowHero___image___description"
  | "home_page___belowHero___image___node_locale"
  | "home_page___belowHero___image___gatsbyImageData"
  | "home_page___belowHero___image___children"
  | "home_page___belowHero___about_us_page"
  | "home_page___belowHero___about_us_page___contentful_id"
  | "home_page___belowHero___about_us_page___id"
  | "home_page___belowHero___about_us_page___node_locale"
  | "home_page___belowHero___about_us_page___slug"
  | "home_page___belowHero___about_us_page___ourTeam"
  | "home_page___belowHero___about_us_page___spaceId"
  | "home_page___belowHero___about_us_page___createdAt"
  | "home_page___belowHero___about_us_page___updatedAt"
  | "home_page___belowHero___about_us_page___children"
  | "home_page___belowHero___text___id"
  | "home_page___belowHero___text___children"
  | "home_page___belowHero___text___text"
  | "home_page___belowHero___spaceId"
  | "home_page___belowHero___createdAt"
  | "home_page___belowHero___updatedAt"
  | "home_page___belowHero___sys___type"
  | "home_page___belowHero___sys___revision"
  | "home_page___belowHero___home_page"
  | "home_page___belowHero___home_page___contentful_id"
  | "home_page___belowHero___home_page___id"
  | "home_page___belowHero___home_page___node_locale"
  | "home_page___belowHero___home_page___slug"
  | "home_page___belowHero___home_page___testimonialSlides"
  | "home_page___belowHero___home_page___spaceId"
  | "home_page___belowHero___home_page___createdAt"
  | "home_page___belowHero___home_page___updatedAt"
  | "home_page___belowHero___home_page___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childrenContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___id"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___children"
  | "home_page___belowHero___childContentfulTextAndImageTextTextNode___text"
  | "home_page___belowHero___parent___id"
  | "home_page___belowHero___parent___children"
  | "home_page___belowHero___children"
  | "home_page___belowHero___children___id"
  | "home_page___belowHero___children___children"
  | "home_page___belowHero___internal___content"
  | "home_page___belowHero___internal___contentDigest"
  | "home_page___belowHero___internal___description"
  | "home_page___belowHero___internal___fieldOwners"
  | "home_page___belowHero___internal___ignoreType"
  | "home_page___belowHero___internal___mediaType"
  | "home_page___belowHero___internal___owner"
  | "home_page___belowHero___internal___type"
  | "home_page___ctaStack___contentful_id"
  | "home_page___ctaStack___id"
  | "home_page___ctaStack___node_locale"
  | "home_page___ctaStack___cards"
  | "home_page___ctaStack___cards___contentful_id"
  | "home_page___ctaStack___cards___id"
  | "home_page___ctaStack___cards___node_locale"
  | "home_page___ctaStack___cards___title"
  | "home_page___ctaStack___cards___internalLink"
  | "home_page___ctaStack___cards___stack"
  | "home_page___ctaStack___cards___spaceId"
  | "home_page___ctaStack___cards___createdAt"
  | "home_page___ctaStack___cards___updatedAt"
  | "home_page___ctaStack___cards___services_page"
  | "home_page___ctaStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___ctaStack___cards___children"
  | "home_page___ctaStack___home_page"
  | "home_page___ctaStack___home_page___contentful_id"
  | "home_page___ctaStack___home_page___id"
  | "home_page___ctaStack___home_page___node_locale"
  | "home_page___ctaStack___home_page___slug"
  | "home_page___ctaStack___home_page___testimonialSlides"
  | "home_page___ctaStack___home_page___spaceId"
  | "home_page___ctaStack___home_page___createdAt"
  | "home_page___ctaStack___home_page___updatedAt"
  | "home_page___ctaStack___home_page___children"
  | "home_page___ctaStack___text___id"
  | "home_page___ctaStack___text___children"
  | "home_page___ctaStack___text___text"
  | "home_page___ctaStack___text2___id"
  | "home_page___ctaStack___text2___children"
  | "home_page___ctaStack___text2___text2"
  | "home_page___ctaStack___spaceId"
  | "home_page___ctaStack___createdAt"
  | "home_page___ctaStack___updatedAt"
  | "home_page___ctaStack___sys___type"
  | "home_page___ctaStack___sys___revision"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childrenContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childContentfulStackTextTextNode___id"
  | "home_page___ctaStack___childContentfulStackTextTextNode___children"
  | "home_page___ctaStack___childContentfulStackTextTextNode___text"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___childContentfulStackText2TextNode___id"
  | "home_page___ctaStack___childContentfulStackText2TextNode___children"
  | "home_page___ctaStack___childContentfulStackText2TextNode___text2"
  | "home_page___ctaStack___parent___id"
  | "home_page___ctaStack___parent___children"
  | "home_page___ctaStack___children"
  | "home_page___ctaStack___children___id"
  | "home_page___ctaStack___children___children"
  | "home_page___ctaStack___internal___content"
  | "home_page___ctaStack___internal___contentDigest"
  | "home_page___ctaStack___internal___description"
  | "home_page___ctaStack___internal___fieldOwners"
  | "home_page___ctaStack___internal___ignoreType"
  | "home_page___ctaStack___internal___mediaType"
  | "home_page___ctaStack___internal___owner"
  | "home_page___ctaStack___internal___type"
  | "home_page___howWeHelpStack___contentful_id"
  | "home_page___howWeHelpStack___id"
  | "home_page___howWeHelpStack___node_locale"
  | "home_page___howWeHelpStack___cards"
  | "home_page___howWeHelpStack___cards___contentful_id"
  | "home_page___howWeHelpStack___cards___id"
  | "home_page___howWeHelpStack___cards___node_locale"
  | "home_page___howWeHelpStack___cards___title"
  | "home_page___howWeHelpStack___cards___internalLink"
  | "home_page___howWeHelpStack___cards___stack"
  | "home_page___howWeHelpStack___cards___spaceId"
  | "home_page___howWeHelpStack___cards___createdAt"
  | "home_page___howWeHelpStack___cards___updatedAt"
  | "home_page___howWeHelpStack___cards___services_page"
  | "home_page___howWeHelpStack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "home_page___howWeHelpStack___cards___children"
  | "home_page___howWeHelpStack___home_page"
  | "home_page___howWeHelpStack___home_page___contentful_id"
  | "home_page___howWeHelpStack___home_page___id"
  | "home_page___howWeHelpStack___home_page___node_locale"
  | "home_page___howWeHelpStack___home_page___slug"
  | "home_page___howWeHelpStack___home_page___testimonialSlides"
  | "home_page___howWeHelpStack___home_page___spaceId"
  | "home_page___howWeHelpStack___home_page___createdAt"
  | "home_page___howWeHelpStack___home_page___updatedAt"
  | "home_page___howWeHelpStack___home_page___children"
  | "home_page___howWeHelpStack___text___id"
  | "home_page___howWeHelpStack___text___children"
  | "home_page___howWeHelpStack___text___text"
  | "home_page___howWeHelpStack___text2___id"
  | "home_page___howWeHelpStack___text2___children"
  | "home_page___howWeHelpStack___text2___text2"
  | "home_page___howWeHelpStack___spaceId"
  | "home_page___howWeHelpStack___createdAt"
  | "home_page___howWeHelpStack___updatedAt"
  | "home_page___howWeHelpStack___sys___type"
  | "home_page___howWeHelpStack___sys___revision"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackTextTextNode___text"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childrenContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___id"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___children"
  | "home_page___howWeHelpStack___childContentfulStackText2TextNode___text2"
  | "home_page___howWeHelpStack___parent___id"
  | "home_page___howWeHelpStack___parent___children"
  | "home_page___howWeHelpStack___children"
  | "home_page___howWeHelpStack___children___id"
  | "home_page___howWeHelpStack___children___children"
  | "home_page___howWeHelpStack___internal___content"
  | "home_page___howWeHelpStack___internal___contentDigest"
  | "home_page___howWeHelpStack___internal___description"
  | "home_page___howWeHelpStack___internal___fieldOwners"
  | "home_page___howWeHelpStack___internal___ignoreType"
  | "home_page___howWeHelpStack___internal___mediaType"
  | "home_page___howWeHelpStack___internal___owner"
  | "home_page___howWeHelpStack___internal___type"
  | "home_page___testimonialSlides"
  | "home_page___testimonialSlides___contentful_id"
  | "home_page___testimonialSlides___id"
  | "home_page___testimonialSlides___node_locale"
  | "home_page___testimonialSlides___name"
  | "home_page___testimonialSlides___jobTitle"
  | "home_page___testimonialSlides___companyName"
  | "home_page___testimonialSlides___image___contentful_id"
  | "home_page___testimonialSlides___image___id"
  | "home_page___testimonialSlides___image___spaceId"
  | "home_page___testimonialSlides___image___createdAt"
  | "home_page___testimonialSlides___image___updatedAt"
  | "home_page___testimonialSlides___image___title"
  | "home_page___testimonialSlides___image___description"
  | "home_page___testimonialSlides___image___node_locale"
  | "home_page___testimonialSlides___image___gatsbyImageData"
  | "home_page___testimonialSlides___image___children"
  | "home_page___testimonialSlides___home_page"
  | "home_page___testimonialSlides___home_page___contentful_id"
  | "home_page___testimonialSlides___home_page___id"
  | "home_page___testimonialSlides___home_page___node_locale"
  | "home_page___testimonialSlides___home_page___slug"
  | "home_page___testimonialSlides___home_page___testimonialSlides"
  | "home_page___testimonialSlides___home_page___spaceId"
  | "home_page___testimonialSlides___home_page___createdAt"
  | "home_page___testimonialSlides___home_page___updatedAt"
  | "home_page___testimonialSlides___home_page___children"
  | "home_page___testimonialSlides___testimony___id"
  | "home_page___testimonialSlides___testimony___children"
  | "home_page___testimonialSlides___testimony___testimony"
  | "home_page___testimonialSlides___spaceId"
  | "home_page___testimonialSlides___createdAt"
  | "home_page___testimonialSlides___updatedAt"
  | "home_page___testimonialSlides___sys___type"
  | "home_page___testimonialSlides___sys___revision"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___id"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___children"
  | "home_page___testimonialSlides___childContentfulTestimonialSlideTestimonyTextNode___testimony"
  | "home_page___testimonialSlides___parent___id"
  | "home_page___testimonialSlides___parent___children"
  | "home_page___testimonialSlides___children"
  | "home_page___testimonialSlides___children___id"
  | "home_page___testimonialSlides___children___children"
  | "home_page___testimonialSlides___internal___content"
  | "home_page___testimonialSlides___internal___contentDigest"
  | "home_page___testimonialSlides___internal___description"
  | "home_page___testimonialSlides___internal___fieldOwners"
  | "home_page___testimonialSlides___internal___ignoreType"
  | "home_page___testimonialSlides___internal___mediaType"
  | "home_page___testimonialSlides___internal___owner"
  | "home_page___testimonialSlides___internal___type"
  | "home_page___carouselImages___contentful_id"
  | "home_page___carouselImages___id"
  | "home_page___carouselImages___node_locale"
  | "home_page___carouselImages___images"
  | "home_page___carouselImages___images___contentful_id"
  | "home_page___carouselImages___images___id"
  | "home_page___carouselImages___images___spaceId"
  | "home_page___carouselImages___images___createdAt"
  | "home_page___carouselImages___images___updatedAt"
  | "home_page___carouselImages___images___title"
  | "home_page___carouselImages___images___description"
  | "home_page___carouselImages___images___node_locale"
  | "home_page___carouselImages___images___gatsbyImageData"
  | "home_page___carouselImages___images___children"
  | "home_page___carouselImages___home_page"
  | "home_page___carouselImages___home_page___contentful_id"
  | "home_page___carouselImages___home_page___id"
  | "home_page___carouselImages___home_page___node_locale"
  | "home_page___carouselImages___home_page___slug"
  | "home_page___carouselImages___home_page___testimonialSlides"
  | "home_page___carouselImages___home_page___spaceId"
  | "home_page___carouselImages___home_page___createdAt"
  | "home_page___carouselImages___home_page___updatedAt"
  | "home_page___carouselImages___home_page___children"
  | "home_page___carouselImages___about_us_page"
  | "home_page___carouselImages___about_us_page___contentful_id"
  | "home_page___carouselImages___about_us_page___id"
  | "home_page___carouselImages___about_us_page___node_locale"
  | "home_page___carouselImages___about_us_page___slug"
  | "home_page___carouselImages___about_us_page___ourTeam"
  | "home_page___carouselImages___about_us_page___spaceId"
  | "home_page___carouselImages___about_us_page___createdAt"
  | "home_page___carouselImages___about_us_page___updatedAt"
  | "home_page___carouselImages___about_us_page___children"
  | "home_page___carouselImages___spaceId"
  | "home_page___carouselImages___createdAt"
  | "home_page___carouselImages___updatedAt"
  | "home_page___carouselImages___sys___type"
  | "home_page___carouselImages___sys___revision"
  | "home_page___carouselImages___parent___id"
  | "home_page___carouselImages___parent___children"
  | "home_page___carouselImages___children"
  | "home_page___carouselImages___children___id"
  | "home_page___carouselImages___children___children"
  | "home_page___carouselImages___internal___content"
  | "home_page___carouselImages___internal___contentDigest"
  | "home_page___carouselImages___internal___description"
  | "home_page___carouselImages___internal___fieldOwners"
  | "home_page___carouselImages___internal___ignoreType"
  | "home_page___carouselImages___internal___mediaType"
  | "home_page___carouselImages___internal___owner"
  | "home_page___carouselImages___internal___type"
  | "home_page___spaceId"
  | "home_page___createdAt"
  | "home_page___updatedAt"
  | "home_page___sys___type"
  | "home_page___sys___revision"
  | "home_page___parent___id"
  | "home_page___parent___parent___id"
  | "home_page___parent___parent___children"
  | "home_page___parent___children"
  | "home_page___parent___children___id"
  | "home_page___parent___children___children"
  | "home_page___parent___internal___content"
  | "home_page___parent___internal___contentDigest"
  | "home_page___parent___internal___description"
  | "home_page___parent___internal___fieldOwners"
  | "home_page___parent___internal___ignoreType"
  | "home_page___parent___internal___mediaType"
  | "home_page___parent___internal___owner"
  | "home_page___parent___internal___type"
  | "home_page___children"
  | "home_page___children___id"
  | "home_page___children___parent___id"
  | "home_page___children___parent___children"
  | "home_page___children___children"
  | "home_page___children___children___id"
  | "home_page___children___children___children"
  | "home_page___children___internal___content"
  | "home_page___children___internal___contentDigest"
  | "home_page___children___internal___description"
  | "home_page___children___internal___fieldOwners"
  | "home_page___children___internal___ignoreType"
  | "home_page___children___internal___mediaType"
  | "home_page___children___internal___owner"
  | "home_page___children___internal___type"
  | "home_page___internal___content"
  | "home_page___internal___contentDigest"
  | "home_page___internal___description"
  | "home_page___internal___fieldOwners"
  | "home_page___internal___ignoreType"
  | "home_page___internal___mediaType"
  | "home_page___internal___owner"
  | "home_page___internal___type"
  | "text___id"
  | "text___parent___id"
  | "text___parent___parent___id"
  | "text___parent___parent___children"
  | "text___parent___children"
  | "text___parent___children___id"
  | "text___parent___children___children"
  | "text___parent___internal___content"
  | "text___parent___internal___contentDigest"
  | "text___parent___internal___description"
  | "text___parent___internal___fieldOwners"
  | "text___parent___internal___ignoreType"
  | "text___parent___internal___mediaType"
  | "text___parent___internal___owner"
  | "text___parent___internal___type"
  | "text___children"
  | "text___children___id"
  | "text___children___parent___id"
  | "text___children___parent___children"
  | "text___children___children"
  | "text___children___children___id"
  | "text___children___children___children"
  | "text___children___internal___content"
  | "text___children___internal___contentDigest"
  | "text___children___internal___description"
  | "text___children___internal___fieldOwners"
  | "text___children___internal___ignoreType"
  | "text___children___internal___mediaType"
  | "text___children___internal___owner"
  | "text___children___internal___type"
  | "text___internal___content"
  | "text___internal___contentDigest"
  | "text___internal___description"
  | "text___internal___fieldOwners"
  | "text___internal___ignoreType"
  | "text___internal___mediaType"
  | "text___internal___owner"
  | "text___internal___type"
  | "text___text"
  | "text___sys___type"
  | "text2___id"
  | "text2___parent___id"
  | "text2___parent___parent___id"
  | "text2___parent___parent___children"
  | "text2___parent___children"
  | "text2___parent___children___id"
  | "text2___parent___children___children"
  | "text2___parent___internal___content"
  | "text2___parent___internal___contentDigest"
  | "text2___parent___internal___description"
  | "text2___parent___internal___fieldOwners"
  | "text2___parent___internal___ignoreType"
  | "text2___parent___internal___mediaType"
  | "text2___parent___internal___owner"
  | "text2___parent___internal___type"
  | "text2___children"
  | "text2___children___id"
  | "text2___children___parent___id"
  | "text2___children___parent___children"
  | "text2___children___children"
  | "text2___children___children___id"
  | "text2___children___children___children"
  | "text2___children___internal___content"
  | "text2___children___internal___contentDigest"
  | "text2___children___internal___description"
  | "text2___children___internal___fieldOwners"
  | "text2___children___internal___ignoreType"
  | "text2___children___internal___mediaType"
  | "text2___children___internal___owner"
  | "text2___children___internal___type"
  | "text2___internal___content"
  | "text2___internal___contentDigest"
  | "text2___internal___description"
  | "text2___internal___fieldOwners"
  | "text2___internal___ignoreType"
  | "text2___internal___mediaType"
  | "text2___internal___owner"
  | "text2___internal___type"
  | "text2___text2"
  | "text2___sys___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "childrenContentfulStackTextTextNode"
  | "childrenContentfulStackTextTextNode___id"
  | "childrenContentfulStackTextTextNode___parent___id"
  | "childrenContentfulStackTextTextNode___parent___parent___id"
  | "childrenContentfulStackTextTextNode___parent___parent___children"
  | "childrenContentfulStackTextTextNode___parent___children"
  | "childrenContentfulStackTextTextNode___parent___children___id"
  | "childrenContentfulStackTextTextNode___parent___children___children"
  | "childrenContentfulStackTextTextNode___parent___internal___content"
  | "childrenContentfulStackTextTextNode___parent___internal___contentDigest"
  | "childrenContentfulStackTextTextNode___parent___internal___description"
  | "childrenContentfulStackTextTextNode___parent___internal___fieldOwners"
  | "childrenContentfulStackTextTextNode___parent___internal___ignoreType"
  | "childrenContentfulStackTextTextNode___parent___internal___mediaType"
  | "childrenContentfulStackTextTextNode___parent___internal___owner"
  | "childrenContentfulStackTextTextNode___parent___internal___type"
  | "childrenContentfulStackTextTextNode___children"
  | "childrenContentfulStackTextTextNode___children___id"
  | "childrenContentfulStackTextTextNode___children___parent___id"
  | "childrenContentfulStackTextTextNode___children___parent___children"
  | "childrenContentfulStackTextTextNode___children___children"
  | "childrenContentfulStackTextTextNode___children___children___id"
  | "childrenContentfulStackTextTextNode___children___children___children"
  | "childrenContentfulStackTextTextNode___children___internal___content"
  | "childrenContentfulStackTextTextNode___children___internal___contentDigest"
  | "childrenContentfulStackTextTextNode___children___internal___description"
  | "childrenContentfulStackTextTextNode___children___internal___fieldOwners"
  | "childrenContentfulStackTextTextNode___children___internal___ignoreType"
  | "childrenContentfulStackTextTextNode___children___internal___mediaType"
  | "childrenContentfulStackTextTextNode___children___internal___owner"
  | "childrenContentfulStackTextTextNode___children___internal___type"
  | "childrenContentfulStackTextTextNode___internal___content"
  | "childrenContentfulStackTextTextNode___internal___contentDigest"
  | "childrenContentfulStackTextTextNode___internal___description"
  | "childrenContentfulStackTextTextNode___internal___fieldOwners"
  | "childrenContentfulStackTextTextNode___internal___ignoreType"
  | "childrenContentfulStackTextTextNode___internal___mediaType"
  | "childrenContentfulStackTextTextNode___internal___owner"
  | "childrenContentfulStackTextTextNode___internal___type"
  | "childrenContentfulStackTextTextNode___text"
  | "childrenContentfulStackTextTextNode___sys___type"
  | "childContentfulStackTextTextNode___id"
  | "childContentfulStackTextTextNode___parent___id"
  | "childContentfulStackTextTextNode___parent___parent___id"
  | "childContentfulStackTextTextNode___parent___parent___children"
  | "childContentfulStackTextTextNode___parent___children"
  | "childContentfulStackTextTextNode___parent___children___id"
  | "childContentfulStackTextTextNode___parent___children___children"
  | "childContentfulStackTextTextNode___parent___internal___content"
  | "childContentfulStackTextTextNode___parent___internal___contentDigest"
  | "childContentfulStackTextTextNode___parent___internal___description"
  | "childContentfulStackTextTextNode___parent___internal___fieldOwners"
  | "childContentfulStackTextTextNode___parent___internal___ignoreType"
  | "childContentfulStackTextTextNode___parent___internal___mediaType"
  | "childContentfulStackTextTextNode___parent___internal___owner"
  | "childContentfulStackTextTextNode___parent___internal___type"
  | "childContentfulStackTextTextNode___children"
  | "childContentfulStackTextTextNode___children___id"
  | "childContentfulStackTextTextNode___children___parent___id"
  | "childContentfulStackTextTextNode___children___parent___children"
  | "childContentfulStackTextTextNode___children___children"
  | "childContentfulStackTextTextNode___children___children___id"
  | "childContentfulStackTextTextNode___children___children___children"
  | "childContentfulStackTextTextNode___children___internal___content"
  | "childContentfulStackTextTextNode___children___internal___contentDigest"
  | "childContentfulStackTextTextNode___children___internal___description"
  | "childContentfulStackTextTextNode___children___internal___fieldOwners"
  | "childContentfulStackTextTextNode___children___internal___ignoreType"
  | "childContentfulStackTextTextNode___children___internal___mediaType"
  | "childContentfulStackTextTextNode___children___internal___owner"
  | "childContentfulStackTextTextNode___children___internal___type"
  | "childContentfulStackTextTextNode___internal___content"
  | "childContentfulStackTextTextNode___internal___contentDigest"
  | "childContentfulStackTextTextNode___internal___description"
  | "childContentfulStackTextTextNode___internal___fieldOwners"
  | "childContentfulStackTextTextNode___internal___ignoreType"
  | "childContentfulStackTextTextNode___internal___mediaType"
  | "childContentfulStackTextTextNode___internal___owner"
  | "childContentfulStackTextTextNode___internal___type"
  | "childContentfulStackTextTextNode___text"
  | "childContentfulStackTextTextNode___sys___type"
  | "childrenContentfulStackText2TextNode"
  | "childrenContentfulStackText2TextNode___id"
  | "childrenContentfulStackText2TextNode___parent___id"
  | "childrenContentfulStackText2TextNode___parent___parent___id"
  | "childrenContentfulStackText2TextNode___parent___parent___children"
  | "childrenContentfulStackText2TextNode___parent___children"
  | "childrenContentfulStackText2TextNode___parent___children___id"
  | "childrenContentfulStackText2TextNode___parent___children___children"
  | "childrenContentfulStackText2TextNode___parent___internal___content"
  | "childrenContentfulStackText2TextNode___parent___internal___contentDigest"
  | "childrenContentfulStackText2TextNode___parent___internal___description"
  | "childrenContentfulStackText2TextNode___parent___internal___fieldOwners"
  | "childrenContentfulStackText2TextNode___parent___internal___ignoreType"
  | "childrenContentfulStackText2TextNode___parent___internal___mediaType"
  | "childrenContentfulStackText2TextNode___parent___internal___owner"
  | "childrenContentfulStackText2TextNode___parent___internal___type"
  | "childrenContentfulStackText2TextNode___children"
  | "childrenContentfulStackText2TextNode___children___id"
  | "childrenContentfulStackText2TextNode___children___parent___id"
  | "childrenContentfulStackText2TextNode___children___parent___children"
  | "childrenContentfulStackText2TextNode___children___children"
  | "childrenContentfulStackText2TextNode___children___children___id"
  | "childrenContentfulStackText2TextNode___children___children___children"
  | "childrenContentfulStackText2TextNode___children___internal___content"
  | "childrenContentfulStackText2TextNode___children___internal___contentDigest"
  | "childrenContentfulStackText2TextNode___children___internal___description"
  | "childrenContentfulStackText2TextNode___children___internal___fieldOwners"
  | "childrenContentfulStackText2TextNode___children___internal___ignoreType"
  | "childrenContentfulStackText2TextNode___children___internal___mediaType"
  | "childrenContentfulStackText2TextNode___children___internal___owner"
  | "childrenContentfulStackText2TextNode___children___internal___type"
  | "childrenContentfulStackText2TextNode___internal___content"
  | "childrenContentfulStackText2TextNode___internal___contentDigest"
  | "childrenContentfulStackText2TextNode___internal___description"
  | "childrenContentfulStackText2TextNode___internal___fieldOwners"
  | "childrenContentfulStackText2TextNode___internal___ignoreType"
  | "childrenContentfulStackText2TextNode___internal___mediaType"
  | "childrenContentfulStackText2TextNode___internal___owner"
  | "childrenContentfulStackText2TextNode___internal___type"
  | "childrenContentfulStackText2TextNode___text2"
  | "childrenContentfulStackText2TextNode___sys___type"
  | "childContentfulStackText2TextNode___id"
  | "childContentfulStackText2TextNode___parent___id"
  | "childContentfulStackText2TextNode___parent___parent___id"
  | "childContentfulStackText2TextNode___parent___parent___children"
  | "childContentfulStackText2TextNode___parent___children"
  | "childContentfulStackText2TextNode___parent___children___id"
  | "childContentfulStackText2TextNode___parent___children___children"
  | "childContentfulStackText2TextNode___parent___internal___content"
  | "childContentfulStackText2TextNode___parent___internal___contentDigest"
  | "childContentfulStackText2TextNode___parent___internal___description"
  | "childContentfulStackText2TextNode___parent___internal___fieldOwners"
  | "childContentfulStackText2TextNode___parent___internal___ignoreType"
  | "childContentfulStackText2TextNode___parent___internal___mediaType"
  | "childContentfulStackText2TextNode___parent___internal___owner"
  | "childContentfulStackText2TextNode___parent___internal___type"
  | "childContentfulStackText2TextNode___children"
  | "childContentfulStackText2TextNode___children___id"
  | "childContentfulStackText2TextNode___children___parent___id"
  | "childContentfulStackText2TextNode___children___parent___children"
  | "childContentfulStackText2TextNode___children___children"
  | "childContentfulStackText2TextNode___children___children___id"
  | "childContentfulStackText2TextNode___children___children___children"
  | "childContentfulStackText2TextNode___children___internal___content"
  | "childContentfulStackText2TextNode___children___internal___contentDigest"
  | "childContentfulStackText2TextNode___children___internal___description"
  | "childContentfulStackText2TextNode___children___internal___fieldOwners"
  | "childContentfulStackText2TextNode___children___internal___ignoreType"
  | "childContentfulStackText2TextNode___children___internal___mediaType"
  | "childContentfulStackText2TextNode___children___internal___owner"
  | "childContentfulStackText2TextNode___children___internal___type"
  | "childContentfulStackText2TextNode___internal___content"
  | "childContentfulStackText2TextNode___internal___contentDigest"
  | "childContentfulStackText2TextNode___internal___description"
  | "childContentfulStackText2TextNode___internal___fieldOwners"
  | "childContentfulStackText2TextNode___internal___ignoreType"
  | "childContentfulStackText2TextNode___internal___mediaType"
  | "childContentfulStackText2TextNode___internal___owner"
  | "childContentfulStackText2TextNode___internal___type"
  | "childContentfulStackText2TextNode___text2"
  | "childContentfulStackText2TextNode___sys___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulStackGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulStackEdge>
  nodes: Array<ContentfulStack>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulStackSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulStackFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulAboutUsPageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulAboutUsPageEdge>
  nodes: Array<ContentfulAboutUsPage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulAboutUsPageGroupConnection>
}

export type ContentfulAboutUsPageConnectionDistinctArgs = {
  field: ContentfulAboutUsPageFieldsEnum
}

export type ContentfulAboutUsPageConnectionMaxArgs = {
  field: ContentfulAboutUsPageFieldsEnum
}

export type ContentfulAboutUsPageConnectionMinArgs = {
  field: ContentfulAboutUsPageFieldsEnum
}

export type ContentfulAboutUsPageConnectionSumArgs = {
  field: ContentfulAboutUsPageFieldsEnum
}

export type ContentfulAboutUsPageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulAboutUsPageFieldsEnum
}

export type ContentfulAboutUsPageEdge = {
  next?: Maybe<ContentfulAboutUsPage>
  node: ContentfulAboutUsPage
  previous?: Maybe<ContentfulAboutUsPage>
}

export type ContentfulAboutUsPageFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "slug"
  | "aboutUsBanner___contentful_id"
  | "aboutUsBanner___id"
  | "aboutUsBanner___node_locale"
  | "aboutUsBanner___heading"
  | "aboutUsBanner___subHeader"
  | "aboutUsBanner___backgroundImage___contentful_id"
  | "aboutUsBanner___backgroundImage___id"
  | "aboutUsBanner___backgroundImage___spaceId"
  | "aboutUsBanner___backgroundImage___createdAt"
  | "aboutUsBanner___backgroundImage___updatedAt"
  | "aboutUsBanner___backgroundImage___file___url"
  | "aboutUsBanner___backgroundImage___file___fileName"
  | "aboutUsBanner___backgroundImage___file___contentType"
  | "aboutUsBanner___backgroundImage___title"
  | "aboutUsBanner___backgroundImage___description"
  | "aboutUsBanner___backgroundImage___node_locale"
  | "aboutUsBanner___backgroundImage___sys___type"
  | "aboutUsBanner___backgroundImage___sys___revision"
  | "aboutUsBanner___backgroundImage___fixed___base64"
  | "aboutUsBanner___backgroundImage___fixed___tracedSVG"
  | "aboutUsBanner___backgroundImage___fixed___aspectRatio"
  | "aboutUsBanner___backgroundImage___fixed___width"
  | "aboutUsBanner___backgroundImage___fixed___height"
  | "aboutUsBanner___backgroundImage___fixed___src"
  | "aboutUsBanner___backgroundImage___fixed___srcSet"
  | "aboutUsBanner___backgroundImage___fixed___srcWebp"
  | "aboutUsBanner___backgroundImage___fixed___srcSetWebp"
  | "aboutUsBanner___backgroundImage___fluid___base64"
  | "aboutUsBanner___backgroundImage___fluid___tracedSVG"
  | "aboutUsBanner___backgroundImage___fluid___aspectRatio"
  | "aboutUsBanner___backgroundImage___fluid___src"
  | "aboutUsBanner___backgroundImage___fluid___srcSet"
  | "aboutUsBanner___backgroundImage___fluid___srcWebp"
  | "aboutUsBanner___backgroundImage___fluid___srcSetWebp"
  | "aboutUsBanner___backgroundImage___fluid___sizes"
  | "aboutUsBanner___backgroundImage___gatsbyImageData"
  | "aboutUsBanner___backgroundImage___resize___base64"
  | "aboutUsBanner___backgroundImage___resize___tracedSVG"
  | "aboutUsBanner___backgroundImage___resize___src"
  | "aboutUsBanner___backgroundImage___resize___width"
  | "aboutUsBanner___backgroundImage___resize___height"
  | "aboutUsBanner___backgroundImage___resize___aspectRatio"
  | "aboutUsBanner___backgroundImage___parent___id"
  | "aboutUsBanner___backgroundImage___parent___children"
  | "aboutUsBanner___backgroundImage___children"
  | "aboutUsBanner___backgroundImage___children___id"
  | "aboutUsBanner___backgroundImage___children___children"
  | "aboutUsBanner___backgroundImage___internal___content"
  | "aboutUsBanner___backgroundImage___internal___contentDigest"
  | "aboutUsBanner___backgroundImage___internal___description"
  | "aboutUsBanner___backgroundImage___internal___fieldOwners"
  | "aboutUsBanner___backgroundImage___internal___ignoreType"
  | "aboutUsBanner___backgroundImage___internal___mediaType"
  | "aboutUsBanner___backgroundImage___internal___owner"
  | "aboutUsBanner___backgroundImage___internal___type"
  | "aboutUsBanner___community_page"
  | "aboutUsBanner___community_page___contentful_id"
  | "aboutUsBanner___community_page___id"
  | "aboutUsBanner___community_page___node_locale"
  | "aboutUsBanner___community_page___slug"
  | "aboutUsBanner___community_page___communityBanner___contentful_id"
  | "aboutUsBanner___community_page___communityBanner___id"
  | "aboutUsBanner___community_page___communityBanner___node_locale"
  | "aboutUsBanner___community_page___communityBanner___heading"
  | "aboutUsBanner___community_page___communityBanner___subHeader"
  | "aboutUsBanner___community_page___communityBanner___community_page"
  | "aboutUsBanner___community_page___communityBanner___spaceId"
  | "aboutUsBanner___community_page___communityBanner___createdAt"
  | "aboutUsBanner___community_page___communityBanner___updatedAt"
  | "aboutUsBanner___community_page___communityBanner___services_page"
  | "aboutUsBanner___community_page___communityBanner___home_page"
  | "aboutUsBanner___community_page___communityBanner___contact_page"
  | "aboutUsBanner___community_page___communityBanner___about_us_page"
  | "aboutUsBanner___community_page___communityBanner___children"
  | "aboutUsBanner___community_page___newsCards"
  | "aboutUsBanner___community_page___newsCards___contentful_id"
  | "aboutUsBanner___community_page___newsCards___id"
  | "aboutUsBanner___community_page___newsCards___node_locale"
  | "aboutUsBanner___community_page___newsCards___title"
  | "aboutUsBanner___community_page___newsCards___community_page"
  | "aboutUsBanner___community_page___newsCards___spaceId"
  | "aboutUsBanner___community_page___newsCards___createdAt"
  | "aboutUsBanner___community_page___newsCards___updatedAt"
  | "aboutUsBanner___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "aboutUsBanner___community_page___newsCards___children"
  | "aboutUsBanner___community_page___blogCards"
  | "aboutUsBanner___community_page___blogCards___contentful_id"
  | "aboutUsBanner___community_page___blogCards___id"
  | "aboutUsBanner___community_page___blogCards___node_locale"
  | "aboutUsBanner___community_page___blogCards___title"
  | "aboutUsBanner___community_page___blogCards___community_page"
  | "aboutUsBanner___community_page___blogCards___spaceId"
  | "aboutUsBanner___community_page___blogCards___createdAt"
  | "aboutUsBanner___community_page___blogCards___updatedAt"
  | "aboutUsBanner___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "aboutUsBanner___community_page___blogCards___children"
  | "aboutUsBanner___community_page___communityCards"
  | "aboutUsBanner___community_page___communityCards___contentful_id"
  | "aboutUsBanner___community_page___communityCards___id"
  | "aboutUsBanner___community_page___communityCards___node_locale"
  | "aboutUsBanner___community_page___communityCards___title"
  | "aboutUsBanner___community_page___communityCards___community_page"
  | "aboutUsBanner___community_page___communityCards___spaceId"
  | "aboutUsBanner___community_page___communityCards___createdAt"
  | "aboutUsBanner___community_page___communityCards___updatedAt"
  | "aboutUsBanner___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "aboutUsBanner___community_page___communityCards___children"
  | "aboutUsBanner___community_page___spaceId"
  | "aboutUsBanner___community_page___createdAt"
  | "aboutUsBanner___community_page___updatedAt"
  | "aboutUsBanner___community_page___sys___type"
  | "aboutUsBanner___community_page___sys___revision"
  | "aboutUsBanner___community_page___parent___id"
  | "aboutUsBanner___community_page___parent___children"
  | "aboutUsBanner___community_page___children"
  | "aboutUsBanner___community_page___children___id"
  | "aboutUsBanner___community_page___children___children"
  | "aboutUsBanner___community_page___internal___content"
  | "aboutUsBanner___community_page___internal___contentDigest"
  | "aboutUsBanner___community_page___internal___description"
  | "aboutUsBanner___community_page___internal___fieldOwners"
  | "aboutUsBanner___community_page___internal___ignoreType"
  | "aboutUsBanner___community_page___internal___mediaType"
  | "aboutUsBanner___community_page___internal___owner"
  | "aboutUsBanner___community_page___internal___type"
  | "aboutUsBanner___spaceId"
  | "aboutUsBanner___createdAt"
  | "aboutUsBanner___updatedAt"
  | "aboutUsBanner___sys___type"
  | "aboutUsBanner___sys___revision"
  | "aboutUsBanner___services_page"
  | "aboutUsBanner___services_page___contentful_id"
  | "aboutUsBanner___services_page___id"
  | "aboutUsBanner___services_page___node_locale"
  | "aboutUsBanner___services_page___slug"
  | "aboutUsBanner___services_page___servicesBanner___contentful_id"
  | "aboutUsBanner___services_page___servicesBanner___id"
  | "aboutUsBanner___services_page___servicesBanner___node_locale"
  | "aboutUsBanner___services_page___servicesBanner___heading"
  | "aboutUsBanner___services_page___servicesBanner___subHeader"
  | "aboutUsBanner___services_page___servicesBanner___community_page"
  | "aboutUsBanner___services_page___servicesBanner___spaceId"
  | "aboutUsBanner___services_page___servicesBanner___createdAt"
  | "aboutUsBanner___services_page___servicesBanner___updatedAt"
  | "aboutUsBanner___services_page___servicesBanner___services_page"
  | "aboutUsBanner___services_page___servicesBanner___home_page"
  | "aboutUsBanner___services_page___servicesBanner___contact_page"
  | "aboutUsBanner___services_page___servicesBanner___about_us_page"
  | "aboutUsBanner___services_page___servicesBanner___children"
  | "aboutUsBanner___services_page___serviceCards"
  | "aboutUsBanner___services_page___serviceCards___contentful_id"
  | "aboutUsBanner___services_page___serviceCards___id"
  | "aboutUsBanner___services_page___serviceCards___node_locale"
  | "aboutUsBanner___services_page___serviceCards___title"
  | "aboutUsBanner___services_page___serviceCards___internalLink"
  | "aboutUsBanner___services_page___serviceCards___stack"
  | "aboutUsBanner___services_page___serviceCards___spaceId"
  | "aboutUsBanner___services_page___serviceCards___createdAt"
  | "aboutUsBanner___services_page___serviceCards___updatedAt"
  | "aboutUsBanner___services_page___serviceCards___services_page"
  | "aboutUsBanner___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "aboutUsBanner___services_page___serviceCards___children"
  | "aboutUsBanner___services_page___spaceId"
  | "aboutUsBanner___services_page___createdAt"
  | "aboutUsBanner___services_page___updatedAt"
  | "aboutUsBanner___services_page___sys___type"
  | "aboutUsBanner___services_page___sys___revision"
  | "aboutUsBanner___services_page___parent___id"
  | "aboutUsBanner___services_page___parent___children"
  | "aboutUsBanner___services_page___children"
  | "aboutUsBanner___services_page___children___id"
  | "aboutUsBanner___services_page___children___children"
  | "aboutUsBanner___services_page___internal___content"
  | "aboutUsBanner___services_page___internal___contentDigest"
  | "aboutUsBanner___services_page___internal___description"
  | "aboutUsBanner___services_page___internal___fieldOwners"
  | "aboutUsBanner___services_page___internal___ignoreType"
  | "aboutUsBanner___services_page___internal___mediaType"
  | "aboutUsBanner___services_page___internal___owner"
  | "aboutUsBanner___services_page___internal___type"
  | "aboutUsBanner___home_page"
  | "aboutUsBanner___home_page___contentful_id"
  | "aboutUsBanner___home_page___id"
  | "aboutUsBanner___home_page___node_locale"
  | "aboutUsBanner___home_page___slug"
  | "aboutUsBanner___home_page___homeBanner___contentful_id"
  | "aboutUsBanner___home_page___homeBanner___id"
  | "aboutUsBanner___home_page___homeBanner___node_locale"
  | "aboutUsBanner___home_page___homeBanner___heading"
  | "aboutUsBanner___home_page___homeBanner___subHeader"
  | "aboutUsBanner___home_page___homeBanner___community_page"
  | "aboutUsBanner___home_page___homeBanner___spaceId"
  | "aboutUsBanner___home_page___homeBanner___createdAt"
  | "aboutUsBanner___home_page___homeBanner___updatedAt"
  | "aboutUsBanner___home_page___homeBanner___services_page"
  | "aboutUsBanner___home_page___homeBanner___home_page"
  | "aboutUsBanner___home_page___homeBanner___contact_page"
  | "aboutUsBanner___home_page___homeBanner___about_us_page"
  | "aboutUsBanner___home_page___homeBanner___children"
  | "aboutUsBanner___home_page___belowHero___contentful_id"
  | "aboutUsBanner___home_page___belowHero___id"
  | "aboutUsBanner___home_page___belowHero___node_locale"
  | "aboutUsBanner___home_page___belowHero___about_us_page"
  | "aboutUsBanner___home_page___belowHero___spaceId"
  | "aboutUsBanner___home_page___belowHero___createdAt"
  | "aboutUsBanner___home_page___belowHero___updatedAt"
  | "aboutUsBanner___home_page___belowHero___home_page"
  | "aboutUsBanner___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "aboutUsBanner___home_page___belowHero___children"
  | "aboutUsBanner___home_page___ctaStack___contentful_id"
  | "aboutUsBanner___home_page___ctaStack___id"
  | "aboutUsBanner___home_page___ctaStack___node_locale"
  | "aboutUsBanner___home_page___ctaStack___cards"
  | "aboutUsBanner___home_page___ctaStack___home_page"
  | "aboutUsBanner___home_page___ctaStack___spaceId"
  | "aboutUsBanner___home_page___ctaStack___createdAt"
  | "aboutUsBanner___home_page___ctaStack___updatedAt"
  | "aboutUsBanner___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "aboutUsBanner___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "aboutUsBanner___home_page___ctaStack___children"
  | "aboutUsBanner___home_page___howWeHelpStack___contentful_id"
  | "aboutUsBanner___home_page___howWeHelpStack___id"
  | "aboutUsBanner___home_page___howWeHelpStack___node_locale"
  | "aboutUsBanner___home_page___howWeHelpStack___cards"
  | "aboutUsBanner___home_page___howWeHelpStack___home_page"
  | "aboutUsBanner___home_page___howWeHelpStack___spaceId"
  | "aboutUsBanner___home_page___howWeHelpStack___createdAt"
  | "aboutUsBanner___home_page___howWeHelpStack___updatedAt"
  | "aboutUsBanner___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "aboutUsBanner___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "aboutUsBanner___home_page___howWeHelpStack___children"
  | "aboutUsBanner___home_page___testimonialSlides"
  | "aboutUsBanner___home_page___testimonialSlides___contentful_id"
  | "aboutUsBanner___home_page___testimonialSlides___id"
  | "aboutUsBanner___home_page___testimonialSlides___node_locale"
  | "aboutUsBanner___home_page___testimonialSlides___name"
  | "aboutUsBanner___home_page___testimonialSlides___jobTitle"
  | "aboutUsBanner___home_page___testimonialSlides___companyName"
  | "aboutUsBanner___home_page___testimonialSlides___home_page"
  | "aboutUsBanner___home_page___testimonialSlides___spaceId"
  | "aboutUsBanner___home_page___testimonialSlides___createdAt"
  | "aboutUsBanner___home_page___testimonialSlides___updatedAt"
  | "aboutUsBanner___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "aboutUsBanner___home_page___testimonialSlides___children"
  | "aboutUsBanner___home_page___carouselImages___contentful_id"
  | "aboutUsBanner___home_page___carouselImages___id"
  | "aboutUsBanner___home_page___carouselImages___node_locale"
  | "aboutUsBanner___home_page___carouselImages___images"
  | "aboutUsBanner___home_page___carouselImages___home_page"
  | "aboutUsBanner___home_page___carouselImages___about_us_page"
  | "aboutUsBanner___home_page___carouselImages___spaceId"
  | "aboutUsBanner___home_page___carouselImages___createdAt"
  | "aboutUsBanner___home_page___carouselImages___updatedAt"
  | "aboutUsBanner___home_page___carouselImages___children"
  | "aboutUsBanner___home_page___spaceId"
  | "aboutUsBanner___home_page___createdAt"
  | "aboutUsBanner___home_page___updatedAt"
  | "aboutUsBanner___home_page___sys___type"
  | "aboutUsBanner___home_page___sys___revision"
  | "aboutUsBanner___home_page___parent___id"
  | "aboutUsBanner___home_page___parent___children"
  | "aboutUsBanner___home_page___children"
  | "aboutUsBanner___home_page___children___id"
  | "aboutUsBanner___home_page___children___children"
  | "aboutUsBanner___home_page___internal___content"
  | "aboutUsBanner___home_page___internal___contentDigest"
  | "aboutUsBanner___home_page___internal___description"
  | "aboutUsBanner___home_page___internal___fieldOwners"
  | "aboutUsBanner___home_page___internal___ignoreType"
  | "aboutUsBanner___home_page___internal___mediaType"
  | "aboutUsBanner___home_page___internal___owner"
  | "aboutUsBanner___home_page___internal___type"
  | "aboutUsBanner___contact_page"
  | "aboutUsBanner___contact_page___contentful_id"
  | "aboutUsBanner___contact_page___id"
  | "aboutUsBanner___contact_page___node_locale"
  | "aboutUsBanner___contact_page___slug"
  | "aboutUsBanner___contact_page___contactBanner___contentful_id"
  | "aboutUsBanner___contact_page___contactBanner___id"
  | "aboutUsBanner___contact_page___contactBanner___node_locale"
  | "aboutUsBanner___contact_page___contactBanner___heading"
  | "aboutUsBanner___contact_page___contactBanner___subHeader"
  | "aboutUsBanner___contact_page___contactBanner___community_page"
  | "aboutUsBanner___contact_page___contactBanner___spaceId"
  | "aboutUsBanner___contact_page___contactBanner___createdAt"
  | "aboutUsBanner___contact_page___contactBanner___updatedAt"
  | "aboutUsBanner___contact_page___contactBanner___services_page"
  | "aboutUsBanner___contact_page___contactBanner___home_page"
  | "aboutUsBanner___contact_page___contactBanner___contact_page"
  | "aboutUsBanner___contact_page___contactBanner___about_us_page"
  | "aboutUsBanner___contact_page___contactBanner___children"
  | "aboutUsBanner___contact_page___spaceId"
  | "aboutUsBanner___contact_page___createdAt"
  | "aboutUsBanner___contact_page___updatedAt"
  | "aboutUsBanner___contact_page___sys___type"
  | "aboutUsBanner___contact_page___sys___revision"
  | "aboutUsBanner___contact_page___parent___id"
  | "aboutUsBanner___contact_page___parent___children"
  | "aboutUsBanner___contact_page___children"
  | "aboutUsBanner___contact_page___children___id"
  | "aboutUsBanner___contact_page___children___children"
  | "aboutUsBanner___contact_page___internal___content"
  | "aboutUsBanner___contact_page___internal___contentDigest"
  | "aboutUsBanner___contact_page___internal___description"
  | "aboutUsBanner___contact_page___internal___fieldOwners"
  | "aboutUsBanner___contact_page___internal___ignoreType"
  | "aboutUsBanner___contact_page___internal___mediaType"
  | "aboutUsBanner___contact_page___internal___owner"
  | "aboutUsBanner___contact_page___internal___type"
  | "aboutUsBanner___about_us_page"
  | "aboutUsBanner___about_us_page___contentful_id"
  | "aboutUsBanner___about_us_page___id"
  | "aboutUsBanner___about_us_page___node_locale"
  | "aboutUsBanner___about_us_page___slug"
  | "aboutUsBanner___about_us_page___aboutUsBanner___contentful_id"
  | "aboutUsBanner___about_us_page___aboutUsBanner___id"
  | "aboutUsBanner___about_us_page___aboutUsBanner___node_locale"
  | "aboutUsBanner___about_us_page___aboutUsBanner___heading"
  | "aboutUsBanner___about_us_page___aboutUsBanner___subHeader"
  | "aboutUsBanner___about_us_page___aboutUsBanner___community_page"
  | "aboutUsBanner___about_us_page___aboutUsBanner___spaceId"
  | "aboutUsBanner___about_us_page___aboutUsBanner___createdAt"
  | "aboutUsBanner___about_us_page___aboutUsBanner___updatedAt"
  | "aboutUsBanner___about_us_page___aboutUsBanner___services_page"
  | "aboutUsBanner___about_us_page___aboutUsBanner___home_page"
  | "aboutUsBanner___about_us_page___aboutUsBanner___contact_page"
  | "aboutUsBanner___about_us_page___aboutUsBanner___about_us_page"
  | "aboutUsBanner___about_us_page___aboutUsBanner___children"
  | "aboutUsBanner___about_us_page___whatWeDo___contentful_id"
  | "aboutUsBanner___about_us_page___whatWeDo___id"
  | "aboutUsBanner___about_us_page___whatWeDo___node_locale"
  | "aboutUsBanner___about_us_page___whatWeDo___about_us_page"
  | "aboutUsBanner___about_us_page___whatWeDo___spaceId"
  | "aboutUsBanner___about_us_page___whatWeDo___createdAt"
  | "aboutUsBanner___about_us_page___whatWeDo___updatedAt"
  | "aboutUsBanner___about_us_page___whatWeDo___home_page"
  | "aboutUsBanner___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "aboutUsBanner___about_us_page___whatWeDo___children"
  | "aboutUsBanner___about_us_page___carouselImages___contentful_id"
  | "aboutUsBanner___about_us_page___carouselImages___id"
  | "aboutUsBanner___about_us_page___carouselImages___node_locale"
  | "aboutUsBanner___about_us_page___carouselImages___images"
  | "aboutUsBanner___about_us_page___carouselImages___home_page"
  | "aboutUsBanner___about_us_page___carouselImages___about_us_page"
  | "aboutUsBanner___about_us_page___carouselImages___spaceId"
  | "aboutUsBanner___about_us_page___carouselImages___createdAt"
  | "aboutUsBanner___about_us_page___carouselImages___updatedAt"
  | "aboutUsBanner___about_us_page___carouselImages___children"
  | "aboutUsBanner___about_us_page___ourTeam"
  | "aboutUsBanner___about_us_page___ourTeam___contentful_id"
  | "aboutUsBanner___about_us_page___ourTeam___id"
  | "aboutUsBanner___about_us_page___ourTeam___node_locale"
  | "aboutUsBanner___about_us_page___ourTeam___name"
  | "aboutUsBanner___about_us_page___ourTeam___jobTitle"
  | "aboutUsBanner___about_us_page___ourTeam___cardSize"
  | "aboutUsBanner___about_us_page___ourTeam___about_us_page"
  | "aboutUsBanner___about_us_page___ourTeam___spaceId"
  | "aboutUsBanner___about_us_page___ourTeam___createdAt"
  | "aboutUsBanner___about_us_page___ourTeam___updatedAt"
  | "aboutUsBanner___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "aboutUsBanner___about_us_page___ourTeam___children"
  | "aboutUsBanner___about_us_page___spaceId"
  | "aboutUsBanner___about_us_page___createdAt"
  | "aboutUsBanner___about_us_page___updatedAt"
  | "aboutUsBanner___about_us_page___sys___type"
  | "aboutUsBanner___about_us_page___sys___revision"
  | "aboutUsBanner___about_us_page___parent___id"
  | "aboutUsBanner___about_us_page___parent___children"
  | "aboutUsBanner___about_us_page___children"
  | "aboutUsBanner___about_us_page___children___id"
  | "aboutUsBanner___about_us_page___children___children"
  | "aboutUsBanner___about_us_page___internal___content"
  | "aboutUsBanner___about_us_page___internal___contentDigest"
  | "aboutUsBanner___about_us_page___internal___description"
  | "aboutUsBanner___about_us_page___internal___fieldOwners"
  | "aboutUsBanner___about_us_page___internal___ignoreType"
  | "aboutUsBanner___about_us_page___internal___mediaType"
  | "aboutUsBanner___about_us_page___internal___owner"
  | "aboutUsBanner___about_us_page___internal___type"
  | "aboutUsBanner___parent___id"
  | "aboutUsBanner___parent___parent___id"
  | "aboutUsBanner___parent___parent___children"
  | "aboutUsBanner___parent___children"
  | "aboutUsBanner___parent___children___id"
  | "aboutUsBanner___parent___children___children"
  | "aboutUsBanner___parent___internal___content"
  | "aboutUsBanner___parent___internal___contentDigest"
  | "aboutUsBanner___parent___internal___description"
  | "aboutUsBanner___parent___internal___fieldOwners"
  | "aboutUsBanner___parent___internal___ignoreType"
  | "aboutUsBanner___parent___internal___mediaType"
  | "aboutUsBanner___parent___internal___owner"
  | "aboutUsBanner___parent___internal___type"
  | "aboutUsBanner___children"
  | "aboutUsBanner___children___id"
  | "aboutUsBanner___children___parent___id"
  | "aboutUsBanner___children___parent___children"
  | "aboutUsBanner___children___children"
  | "aboutUsBanner___children___children___id"
  | "aboutUsBanner___children___children___children"
  | "aboutUsBanner___children___internal___content"
  | "aboutUsBanner___children___internal___contentDigest"
  | "aboutUsBanner___children___internal___description"
  | "aboutUsBanner___children___internal___fieldOwners"
  | "aboutUsBanner___children___internal___ignoreType"
  | "aboutUsBanner___children___internal___mediaType"
  | "aboutUsBanner___children___internal___owner"
  | "aboutUsBanner___children___internal___type"
  | "aboutUsBanner___internal___content"
  | "aboutUsBanner___internal___contentDigest"
  | "aboutUsBanner___internal___description"
  | "aboutUsBanner___internal___fieldOwners"
  | "aboutUsBanner___internal___ignoreType"
  | "aboutUsBanner___internal___mediaType"
  | "aboutUsBanner___internal___owner"
  | "aboutUsBanner___internal___type"
  | "whatWeDo___contentful_id"
  | "whatWeDo___id"
  | "whatWeDo___node_locale"
  | "whatWeDo___image___contentful_id"
  | "whatWeDo___image___id"
  | "whatWeDo___image___spaceId"
  | "whatWeDo___image___createdAt"
  | "whatWeDo___image___updatedAt"
  | "whatWeDo___image___file___url"
  | "whatWeDo___image___file___fileName"
  | "whatWeDo___image___file___contentType"
  | "whatWeDo___image___title"
  | "whatWeDo___image___description"
  | "whatWeDo___image___node_locale"
  | "whatWeDo___image___sys___type"
  | "whatWeDo___image___sys___revision"
  | "whatWeDo___image___fixed___base64"
  | "whatWeDo___image___fixed___tracedSVG"
  | "whatWeDo___image___fixed___aspectRatio"
  | "whatWeDo___image___fixed___width"
  | "whatWeDo___image___fixed___height"
  | "whatWeDo___image___fixed___src"
  | "whatWeDo___image___fixed___srcSet"
  | "whatWeDo___image___fixed___srcWebp"
  | "whatWeDo___image___fixed___srcSetWebp"
  | "whatWeDo___image___fluid___base64"
  | "whatWeDo___image___fluid___tracedSVG"
  | "whatWeDo___image___fluid___aspectRatio"
  | "whatWeDo___image___fluid___src"
  | "whatWeDo___image___fluid___srcSet"
  | "whatWeDo___image___fluid___srcWebp"
  | "whatWeDo___image___fluid___srcSetWebp"
  | "whatWeDo___image___fluid___sizes"
  | "whatWeDo___image___gatsbyImageData"
  | "whatWeDo___image___resize___base64"
  | "whatWeDo___image___resize___tracedSVG"
  | "whatWeDo___image___resize___src"
  | "whatWeDo___image___resize___width"
  | "whatWeDo___image___resize___height"
  | "whatWeDo___image___resize___aspectRatio"
  | "whatWeDo___image___parent___id"
  | "whatWeDo___image___parent___children"
  | "whatWeDo___image___children"
  | "whatWeDo___image___children___id"
  | "whatWeDo___image___children___children"
  | "whatWeDo___image___internal___content"
  | "whatWeDo___image___internal___contentDigest"
  | "whatWeDo___image___internal___description"
  | "whatWeDo___image___internal___fieldOwners"
  | "whatWeDo___image___internal___ignoreType"
  | "whatWeDo___image___internal___mediaType"
  | "whatWeDo___image___internal___owner"
  | "whatWeDo___image___internal___type"
  | "whatWeDo___about_us_page"
  | "whatWeDo___about_us_page___contentful_id"
  | "whatWeDo___about_us_page___id"
  | "whatWeDo___about_us_page___node_locale"
  | "whatWeDo___about_us_page___slug"
  | "whatWeDo___about_us_page___aboutUsBanner___contentful_id"
  | "whatWeDo___about_us_page___aboutUsBanner___id"
  | "whatWeDo___about_us_page___aboutUsBanner___node_locale"
  | "whatWeDo___about_us_page___aboutUsBanner___heading"
  | "whatWeDo___about_us_page___aboutUsBanner___subHeader"
  | "whatWeDo___about_us_page___aboutUsBanner___community_page"
  | "whatWeDo___about_us_page___aboutUsBanner___spaceId"
  | "whatWeDo___about_us_page___aboutUsBanner___createdAt"
  | "whatWeDo___about_us_page___aboutUsBanner___updatedAt"
  | "whatWeDo___about_us_page___aboutUsBanner___services_page"
  | "whatWeDo___about_us_page___aboutUsBanner___home_page"
  | "whatWeDo___about_us_page___aboutUsBanner___contact_page"
  | "whatWeDo___about_us_page___aboutUsBanner___about_us_page"
  | "whatWeDo___about_us_page___aboutUsBanner___children"
  | "whatWeDo___about_us_page___whatWeDo___contentful_id"
  | "whatWeDo___about_us_page___whatWeDo___id"
  | "whatWeDo___about_us_page___whatWeDo___node_locale"
  | "whatWeDo___about_us_page___whatWeDo___about_us_page"
  | "whatWeDo___about_us_page___whatWeDo___spaceId"
  | "whatWeDo___about_us_page___whatWeDo___createdAt"
  | "whatWeDo___about_us_page___whatWeDo___updatedAt"
  | "whatWeDo___about_us_page___whatWeDo___home_page"
  | "whatWeDo___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "whatWeDo___about_us_page___whatWeDo___children"
  | "whatWeDo___about_us_page___carouselImages___contentful_id"
  | "whatWeDo___about_us_page___carouselImages___id"
  | "whatWeDo___about_us_page___carouselImages___node_locale"
  | "whatWeDo___about_us_page___carouselImages___images"
  | "whatWeDo___about_us_page___carouselImages___home_page"
  | "whatWeDo___about_us_page___carouselImages___about_us_page"
  | "whatWeDo___about_us_page___carouselImages___spaceId"
  | "whatWeDo___about_us_page___carouselImages___createdAt"
  | "whatWeDo___about_us_page___carouselImages___updatedAt"
  | "whatWeDo___about_us_page___carouselImages___children"
  | "whatWeDo___about_us_page___ourTeam"
  | "whatWeDo___about_us_page___ourTeam___contentful_id"
  | "whatWeDo___about_us_page___ourTeam___id"
  | "whatWeDo___about_us_page___ourTeam___node_locale"
  | "whatWeDo___about_us_page___ourTeam___name"
  | "whatWeDo___about_us_page___ourTeam___jobTitle"
  | "whatWeDo___about_us_page___ourTeam___cardSize"
  | "whatWeDo___about_us_page___ourTeam___about_us_page"
  | "whatWeDo___about_us_page___ourTeam___spaceId"
  | "whatWeDo___about_us_page___ourTeam___createdAt"
  | "whatWeDo___about_us_page___ourTeam___updatedAt"
  | "whatWeDo___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "whatWeDo___about_us_page___ourTeam___children"
  | "whatWeDo___about_us_page___spaceId"
  | "whatWeDo___about_us_page___createdAt"
  | "whatWeDo___about_us_page___updatedAt"
  | "whatWeDo___about_us_page___sys___type"
  | "whatWeDo___about_us_page___sys___revision"
  | "whatWeDo___about_us_page___parent___id"
  | "whatWeDo___about_us_page___parent___children"
  | "whatWeDo___about_us_page___children"
  | "whatWeDo___about_us_page___children___id"
  | "whatWeDo___about_us_page___children___children"
  | "whatWeDo___about_us_page___internal___content"
  | "whatWeDo___about_us_page___internal___contentDigest"
  | "whatWeDo___about_us_page___internal___description"
  | "whatWeDo___about_us_page___internal___fieldOwners"
  | "whatWeDo___about_us_page___internal___ignoreType"
  | "whatWeDo___about_us_page___internal___mediaType"
  | "whatWeDo___about_us_page___internal___owner"
  | "whatWeDo___about_us_page___internal___type"
  | "whatWeDo___text___id"
  | "whatWeDo___text___parent___id"
  | "whatWeDo___text___parent___children"
  | "whatWeDo___text___children"
  | "whatWeDo___text___children___id"
  | "whatWeDo___text___children___children"
  | "whatWeDo___text___internal___content"
  | "whatWeDo___text___internal___contentDigest"
  | "whatWeDo___text___internal___description"
  | "whatWeDo___text___internal___fieldOwners"
  | "whatWeDo___text___internal___ignoreType"
  | "whatWeDo___text___internal___mediaType"
  | "whatWeDo___text___internal___owner"
  | "whatWeDo___text___internal___type"
  | "whatWeDo___text___text"
  | "whatWeDo___text___sys___type"
  | "whatWeDo___spaceId"
  | "whatWeDo___createdAt"
  | "whatWeDo___updatedAt"
  | "whatWeDo___sys___type"
  | "whatWeDo___sys___revision"
  | "whatWeDo___home_page"
  | "whatWeDo___home_page___contentful_id"
  | "whatWeDo___home_page___id"
  | "whatWeDo___home_page___node_locale"
  | "whatWeDo___home_page___slug"
  | "whatWeDo___home_page___homeBanner___contentful_id"
  | "whatWeDo___home_page___homeBanner___id"
  | "whatWeDo___home_page___homeBanner___node_locale"
  | "whatWeDo___home_page___homeBanner___heading"
  | "whatWeDo___home_page___homeBanner___subHeader"
  | "whatWeDo___home_page___homeBanner___community_page"
  | "whatWeDo___home_page___homeBanner___spaceId"
  | "whatWeDo___home_page___homeBanner___createdAt"
  | "whatWeDo___home_page___homeBanner___updatedAt"
  | "whatWeDo___home_page___homeBanner___services_page"
  | "whatWeDo___home_page___homeBanner___home_page"
  | "whatWeDo___home_page___homeBanner___contact_page"
  | "whatWeDo___home_page___homeBanner___about_us_page"
  | "whatWeDo___home_page___homeBanner___children"
  | "whatWeDo___home_page___belowHero___contentful_id"
  | "whatWeDo___home_page___belowHero___id"
  | "whatWeDo___home_page___belowHero___node_locale"
  | "whatWeDo___home_page___belowHero___about_us_page"
  | "whatWeDo___home_page___belowHero___spaceId"
  | "whatWeDo___home_page___belowHero___createdAt"
  | "whatWeDo___home_page___belowHero___updatedAt"
  | "whatWeDo___home_page___belowHero___home_page"
  | "whatWeDo___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "whatWeDo___home_page___belowHero___children"
  | "whatWeDo___home_page___ctaStack___contentful_id"
  | "whatWeDo___home_page___ctaStack___id"
  | "whatWeDo___home_page___ctaStack___node_locale"
  | "whatWeDo___home_page___ctaStack___cards"
  | "whatWeDo___home_page___ctaStack___home_page"
  | "whatWeDo___home_page___ctaStack___spaceId"
  | "whatWeDo___home_page___ctaStack___createdAt"
  | "whatWeDo___home_page___ctaStack___updatedAt"
  | "whatWeDo___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "whatWeDo___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "whatWeDo___home_page___ctaStack___children"
  | "whatWeDo___home_page___howWeHelpStack___contentful_id"
  | "whatWeDo___home_page___howWeHelpStack___id"
  | "whatWeDo___home_page___howWeHelpStack___node_locale"
  | "whatWeDo___home_page___howWeHelpStack___cards"
  | "whatWeDo___home_page___howWeHelpStack___home_page"
  | "whatWeDo___home_page___howWeHelpStack___spaceId"
  | "whatWeDo___home_page___howWeHelpStack___createdAt"
  | "whatWeDo___home_page___howWeHelpStack___updatedAt"
  | "whatWeDo___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "whatWeDo___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "whatWeDo___home_page___howWeHelpStack___children"
  | "whatWeDo___home_page___testimonialSlides"
  | "whatWeDo___home_page___testimonialSlides___contentful_id"
  | "whatWeDo___home_page___testimonialSlides___id"
  | "whatWeDo___home_page___testimonialSlides___node_locale"
  | "whatWeDo___home_page___testimonialSlides___name"
  | "whatWeDo___home_page___testimonialSlides___jobTitle"
  | "whatWeDo___home_page___testimonialSlides___companyName"
  | "whatWeDo___home_page___testimonialSlides___home_page"
  | "whatWeDo___home_page___testimonialSlides___spaceId"
  | "whatWeDo___home_page___testimonialSlides___createdAt"
  | "whatWeDo___home_page___testimonialSlides___updatedAt"
  | "whatWeDo___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "whatWeDo___home_page___testimonialSlides___children"
  | "whatWeDo___home_page___carouselImages___contentful_id"
  | "whatWeDo___home_page___carouselImages___id"
  | "whatWeDo___home_page___carouselImages___node_locale"
  | "whatWeDo___home_page___carouselImages___images"
  | "whatWeDo___home_page___carouselImages___home_page"
  | "whatWeDo___home_page___carouselImages___about_us_page"
  | "whatWeDo___home_page___carouselImages___spaceId"
  | "whatWeDo___home_page___carouselImages___createdAt"
  | "whatWeDo___home_page___carouselImages___updatedAt"
  | "whatWeDo___home_page___carouselImages___children"
  | "whatWeDo___home_page___spaceId"
  | "whatWeDo___home_page___createdAt"
  | "whatWeDo___home_page___updatedAt"
  | "whatWeDo___home_page___sys___type"
  | "whatWeDo___home_page___sys___revision"
  | "whatWeDo___home_page___parent___id"
  | "whatWeDo___home_page___parent___children"
  | "whatWeDo___home_page___children"
  | "whatWeDo___home_page___children___id"
  | "whatWeDo___home_page___children___children"
  | "whatWeDo___home_page___internal___content"
  | "whatWeDo___home_page___internal___contentDigest"
  | "whatWeDo___home_page___internal___description"
  | "whatWeDo___home_page___internal___fieldOwners"
  | "whatWeDo___home_page___internal___ignoreType"
  | "whatWeDo___home_page___internal___mediaType"
  | "whatWeDo___home_page___internal___owner"
  | "whatWeDo___home_page___internal___type"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___id"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___parent___id"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___parent___children"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___children"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___children___id"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___children___children"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___content"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___contentDigest"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___description"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___fieldOwners"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___ignoreType"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___mediaType"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___owner"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___internal___type"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___text"
  | "whatWeDo___childrenContentfulTextAndImageTextTextNode___sys___type"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___id"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___parent___id"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___parent___children"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___children"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___children___id"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___children___children"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___content"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___contentDigest"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___description"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___fieldOwners"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___ignoreType"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___mediaType"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___owner"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___internal___type"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___text"
  | "whatWeDo___childContentfulTextAndImageTextTextNode___sys___type"
  | "whatWeDo___parent___id"
  | "whatWeDo___parent___parent___id"
  | "whatWeDo___parent___parent___children"
  | "whatWeDo___parent___children"
  | "whatWeDo___parent___children___id"
  | "whatWeDo___parent___children___children"
  | "whatWeDo___parent___internal___content"
  | "whatWeDo___parent___internal___contentDigest"
  | "whatWeDo___parent___internal___description"
  | "whatWeDo___parent___internal___fieldOwners"
  | "whatWeDo___parent___internal___ignoreType"
  | "whatWeDo___parent___internal___mediaType"
  | "whatWeDo___parent___internal___owner"
  | "whatWeDo___parent___internal___type"
  | "whatWeDo___children"
  | "whatWeDo___children___id"
  | "whatWeDo___children___parent___id"
  | "whatWeDo___children___parent___children"
  | "whatWeDo___children___children"
  | "whatWeDo___children___children___id"
  | "whatWeDo___children___children___children"
  | "whatWeDo___children___internal___content"
  | "whatWeDo___children___internal___contentDigest"
  | "whatWeDo___children___internal___description"
  | "whatWeDo___children___internal___fieldOwners"
  | "whatWeDo___children___internal___ignoreType"
  | "whatWeDo___children___internal___mediaType"
  | "whatWeDo___children___internal___owner"
  | "whatWeDo___children___internal___type"
  | "whatWeDo___internal___content"
  | "whatWeDo___internal___contentDigest"
  | "whatWeDo___internal___description"
  | "whatWeDo___internal___fieldOwners"
  | "whatWeDo___internal___ignoreType"
  | "whatWeDo___internal___mediaType"
  | "whatWeDo___internal___owner"
  | "whatWeDo___internal___type"
  | "carouselImages___contentful_id"
  | "carouselImages___id"
  | "carouselImages___node_locale"
  | "carouselImages___images"
  | "carouselImages___images___contentful_id"
  | "carouselImages___images___id"
  | "carouselImages___images___spaceId"
  | "carouselImages___images___createdAt"
  | "carouselImages___images___updatedAt"
  | "carouselImages___images___file___url"
  | "carouselImages___images___file___fileName"
  | "carouselImages___images___file___contentType"
  | "carouselImages___images___title"
  | "carouselImages___images___description"
  | "carouselImages___images___node_locale"
  | "carouselImages___images___sys___type"
  | "carouselImages___images___sys___revision"
  | "carouselImages___images___fixed___base64"
  | "carouselImages___images___fixed___tracedSVG"
  | "carouselImages___images___fixed___aspectRatio"
  | "carouselImages___images___fixed___width"
  | "carouselImages___images___fixed___height"
  | "carouselImages___images___fixed___src"
  | "carouselImages___images___fixed___srcSet"
  | "carouselImages___images___fixed___srcWebp"
  | "carouselImages___images___fixed___srcSetWebp"
  | "carouselImages___images___fluid___base64"
  | "carouselImages___images___fluid___tracedSVG"
  | "carouselImages___images___fluid___aspectRatio"
  | "carouselImages___images___fluid___src"
  | "carouselImages___images___fluid___srcSet"
  | "carouselImages___images___fluid___srcWebp"
  | "carouselImages___images___fluid___srcSetWebp"
  | "carouselImages___images___fluid___sizes"
  | "carouselImages___images___gatsbyImageData"
  | "carouselImages___images___resize___base64"
  | "carouselImages___images___resize___tracedSVG"
  | "carouselImages___images___resize___src"
  | "carouselImages___images___resize___width"
  | "carouselImages___images___resize___height"
  | "carouselImages___images___resize___aspectRatio"
  | "carouselImages___images___parent___id"
  | "carouselImages___images___parent___children"
  | "carouselImages___images___children"
  | "carouselImages___images___children___id"
  | "carouselImages___images___children___children"
  | "carouselImages___images___internal___content"
  | "carouselImages___images___internal___contentDigest"
  | "carouselImages___images___internal___description"
  | "carouselImages___images___internal___fieldOwners"
  | "carouselImages___images___internal___ignoreType"
  | "carouselImages___images___internal___mediaType"
  | "carouselImages___images___internal___owner"
  | "carouselImages___images___internal___type"
  | "carouselImages___home_page"
  | "carouselImages___home_page___contentful_id"
  | "carouselImages___home_page___id"
  | "carouselImages___home_page___node_locale"
  | "carouselImages___home_page___slug"
  | "carouselImages___home_page___homeBanner___contentful_id"
  | "carouselImages___home_page___homeBanner___id"
  | "carouselImages___home_page___homeBanner___node_locale"
  | "carouselImages___home_page___homeBanner___heading"
  | "carouselImages___home_page___homeBanner___subHeader"
  | "carouselImages___home_page___homeBanner___community_page"
  | "carouselImages___home_page___homeBanner___spaceId"
  | "carouselImages___home_page___homeBanner___createdAt"
  | "carouselImages___home_page___homeBanner___updatedAt"
  | "carouselImages___home_page___homeBanner___services_page"
  | "carouselImages___home_page___homeBanner___home_page"
  | "carouselImages___home_page___homeBanner___contact_page"
  | "carouselImages___home_page___homeBanner___about_us_page"
  | "carouselImages___home_page___homeBanner___children"
  | "carouselImages___home_page___belowHero___contentful_id"
  | "carouselImages___home_page___belowHero___id"
  | "carouselImages___home_page___belowHero___node_locale"
  | "carouselImages___home_page___belowHero___about_us_page"
  | "carouselImages___home_page___belowHero___spaceId"
  | "carouselImages___home_page___belowHero___createdAt"
  | "carouselImages___home_page___belowHero___updatedAt"
  | "carouselImages___home_page___belowHero___home_page"
  | "carouselImages___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "carouselImages___home_page___belowHero___children"
  | "carouselImages___home_page___ctaStack___contentful_id"
  | "carouselImages___home_page___ctaStack___id"
  | "carouselImages___home_page___ctaStack___node_locale"
  | "carouselImages___home_page___ctaStack___cards"
  | "carouselImages___home_page___ctaStack___home_page"
  | "carouselImages___home_page___ctaStack___spaceId"
  | "carouselImages___home_page___ctaStack___createdAt"
  | "carouselImages___home_page___ctaStack___updatedAt"
  | "carouselImages___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "carouselImages___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "carouselImages___home_page___ctaStack___children"
  | "carouselImages___home_page___howWeHelpStack___contentful_id"
  | "carouselImages___home_page___howWeHelpStack___id"
  | "carouselImages___home_page___howWeHelpStack___node_locale"
  | "carouselImages___home_page___howWeHelpStack___cards"
  | "carouselImages___home_page___howWeHelpStack___home_page"
  | "carouselImages___home_page___howWeHelpStack___spaceId"
  | "carouselImages___home_page___howWeHelpStack___createdAt"
  | "carouselImages___home_page___howWeHelpStack___updatedAt"
  | "carouselImages___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "carouselImages___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "carouselImages___home_page___howWeHelpStack___children"
  | "carouselImages___home_page___testimonialSlides"
  | "carouselImages___home_page___testimonialSlides___contentful_id"
  | "carouselImages___home_page___testimonialSlides___id"
  | "carouselImages___home_page___testimonialSlides___node_locale"
  | "carouselImages___home_page___testimonialSlides___name"
  | "carouselImages___home_page___testimonialSlides___jobTitle"
  | "carouselImages___home_page___testimonialSlides___companyName"
  | "carouselImages___home_page___testimonialSlides___home_page"
  | "carouselImages___home_page___testimonialSlides___spaceId"
  | "carouselImages___home_page___testimonialSlides___createdAt"
  | "carouselImages___home_page___testimonialSlides___updatedAt"
  | "carouselImages___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "carouselImages___home_page___testimonialSlides___children"
  | "carouselImages___home_page___carouselImages___contentful_id"
  | "carouselImages___home_page___carouselImages___id"
  | "carouselImages___home_page___carouselImages___node_locale"
  | "carouselImages___home_page___carouselImages___images"
  | "carouselImages___home_page___carouselImages___home_page"
  | "carouselImages___home_page___carouselImages___about_us_page"
  | "carouselImages___home_page___carouselImages___spaceId"
  | "carouselImages___home_page___carouselImages___createdAt"
  | "carouselImages___home_page___carouselImages___updatedAt"
  | "carouselImages___home_page___carouselImages___children"
  | "carouselImages___home_page___spaceId"
  | "carouselImages___home_page___createdAt"
  | "carouselImages___home_page___updatedAt"
  | "carouselImages___home_page___sys___type"
  | "carouselImages___home_page___sys___revision"
  | "carouselImages___home_page___parent___id"
  | "carouselImages___home_page___parent___children"
  | "carouselImages___home_page___children"
  | "carouselImages___home_page___children___id"
  | "carouselImages___home_page___children___children"
  | "carouselImages___home_page___internal___content"
  | "carouselImages___home_page___internal___contentDigest"
  | "carouselImages___home_page___internal___description"
  | "carouselImages___home_page___internal___fieldOwners"
  | "carouselImages___home_page___internal___ignoreType"
  | "carouselImages___home_page___internal___mediaType"
  | "carouselImages___home_page___internal___owner"
  | "carouselImages___home_page___internal___type"
  | "carouselImages___about_us_page"
  | "carouselImages___about_us_page___contentful_id"
  | "carouselImages___about_us_page___id"
  | "carouselImages___about_us_page___node_locale"
  | "carouselImages___about_us_page___slug"
  | "carouselImages___about_us_page___aboutUsBanner___contentful_id"
  | "carouselImages___about_us_page___aboutUsBanner___id"
  | "carouselImages___about_us_page___aboutUsBanner___node_locale"
  | "carouselImages___about_us_page___aboutUsBanner___heading"
  | "carouselImages___about_us_page___aboutUsBanner___subHeader"
  | "carouselImages___about_us_page___aboutUsBanner___community_page"
  | "carouselImages___about_us_page___aboutUsBanner___spaceId"
  | "carouselImages___about_us_page___aboutUsBanner___createdAt"
  | "carouselImages___about_us_page___aboutUsBanner___updatedAt"
  | "carouselImages___about_us_page___aboutUsBanner___services_page"
  | "carouselImages___about_us_page___aboutUsBanner___home_page"
  | "carouselImages___about_us_page___aboutUsBanner___contact_page"
  | "carouselImages___about_us_page___aboutUsBanner___about_us_page"
  | "carouselImages___about_us_page___aboutUsBanner___children"
  | "carouselImages___about_us_page___whatWeDo___contentful_id"
  | "carouselImages___about_us_page___whatWeDo___id"
  | "carouselImages___about_us_page___whatWeDo___node_locale"
  | "carouselImages___about_us_page___whatWeDo___about_us_page"
  | "carouselImages___about_us_page___whatWeDo___spaceId"
  | "carouselImages___about_us_page___whatWeDo___createdAt"
  | "carouselImages___about_us_page___whatWeDo___updatedAt"
  | "carouselImages___about_us_page___whatWeDo___home_page"
  | "carouselImages___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "carouselImages___about_us_page___whatWeDo___children"
  | "carouselImages___about_us_page___carouselImages___contentful_id"
  | "carouselImages___about_us_page___carouselImages___id"
  | "carouselImages___about_us_page___carouselImages___node_locale"
  | "carouselImages___about_us_page___carouselImages___images"
  | "carouselImages___about_us_page___carouselImages___home_page"
  | "carouselImages___about_us_page___carouselImages___about_us_page"
  | "carouselImages___about_us_page___carouselImages___spaceId"
  | "carouselImages___about_us_page___carouselImages___createdAt"
  | "carouselImages___about_us_page___carouselImages___updatedAt"
  | "carouselImages___about_us_page___carouselImages___children"
  | "carouselImages___about_us_page___ourTeam"
  | "carouselImages___about_us_page___ourTeam___contentful_id"
  | "carouselImages___about_us_page___ourTeam___id"
  | "carouselImages___about_us_page___ourTeam___node_locale"
  | "carouselImages___about_us_page___ourTeam___name"
  | "carouselImages___about_us_page___ourTeam___jobTitle"
  | "carouselImages___about_us_page___ourTeam___cardSize"
  | "carouselImages___about_us_page___ourTeam___about_us_page"
  | "carouselImages___about_us_page___ourTeam___spaceId"
  | "carouselImages___about_us_page___ourTeam___createdAt"
  | "carouselImages___about_us_page___ourTeam___updatedAt"
  | "carouselImages___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "carouselImages___about_us_page___ourTeam___children"
  | "carouselImages___about_us_page___spaceId"
  | "carouselImages___about_us_page___createdAt"
  | "carouselImages___about_us_page___updatedAt"
  | "carouselImages___about_us_page___sys___type"
  | "carouselImages___about_us_page___sys___revision"
  | "carouselImages___about_us_page___parent___id"
  | "carouselImages___about_us_page___parent___children"
  | "carouselImages___about_us_page___children"
  | "carouselImages___about_us_page___children___id"
  | "carouselImages___about_us_page___children___children"
  | "carouselImages___about_us_page___internal___content"
  | "carouselImages___about_us_page___internal___contentDigest"
  | "carouselImages___about_us_page___internal___description"
  | "carouselImages___about_us_page___internal___fieldOwners"
  | "carouselImages___about_us_page___internal___ignoreType"
  | "carouselImages___about_us_page___internal___mediaType"
  | "carouselImages___about_us_page___internal___owner"
  | "carouselImages___about_us_page___internal___type"
  | "carouselImages___spaceId"
  | "carouselImages___createdAt"
  | "carouselImages___updatedAt"
  | "carouselImages___sys___type"
  | "carouselImages___sys___revision"
  | "carouselImages___parent___id"
  | "carouselImages___parent___parent___id"
  | "carouselImages___parent___parent___children"
  | "carouselImages___parent___children"
  | "carouselImages___parent___children___id"
  | "carouselImages___parent___children___children"
  | "carouselImages___parent___internal___content"
  | "carouselImages___parent___internal___contentDigest"
  | "carouselImages___parent___internal___description"
  | "carouselImages___parent___internal___fieldOwners"
  | "carouselImages___parent___internal___ignoreType"
  | "carouselImages___parent___internal___mediaType"
  | "carouselImages___parent___internal___owner"
  | "carouselImages___parent___internal___type"
  | "carouselImages___children"
  | "carouselImages___children___id"
  | "carouselImages___children___parent___id"
  | "carouselImages___children___parent___children"
  | "carouselImages___children___children"
  | "carouselImages___children___children___id"
  | "carouselImages___children___children___children"
  | "carouselImages___children___internal___content"
  | "carouselImages___children___internal___contentDigest"
  | "carouselImages___children___internal___description"
  | "carouselImages___children___internal___fieldOwners"
  | "carouselImages___children___internal___ignoreType"
  | "carouselImages___children___internal___mediaType"
  | "carouselImages___children___internal___owner"
  | "carouselImages___children___internal___type"
  | "carouselImages___internal___content"
  | "carouselImages___internal___contentDigest"
  | "carouselImages___internal___description"
  | "carouselImages___internal___fieldOwners"
  | "carouselImages___internal___ignoreType"
  | "carouselImages___internal___mediaType"
  | "carouselImages___internal___owner"
  | "carouselImages___internal___type"
  | "ourTeam"
  | "ourTeam___contentful_id"
  | "ourTeam___id"
  | "ourTeam___node_locale"
  | "ourTeam___name"
  | "ourTeam___jobTitle"
  | "ourTeam___cardSize"
  | "ourTeam___employeeImage___contentful_id"
  | "ourTeam___employeeImage___id"
  | "ourTeam___employeeImage___spaceId"
  | "ourTeam___employeeImage___createdAt"
  | "ourTeam___employeeImage___updatedAt"
  | "ourTeam___employeeImage___file___url"
  | "ourTeam___employeeImage___file___fileName"
  | "ourTeam___employeeImage___file___contentType"
  | "ourTeam___employeeImage___title"
  | "ourTeam___employeeImage___description"
  | "ourTeam___employeeImage___node_locale"
  | "ourTeam___employeeImage___sys___type"
  | "ourTeam___employeeImage___sys___revision"
  | "ourTeam___employeeImage___fixed___base64"
  | "ourTeam___employeeImage___fixed___tracedSVG"
  | "ourTeam___employeeImage___fixed___aspectRatio"
  | "ourTeam___employeeImage___fixed___width"
  | "ourTeam___employeeImage___fixed___height"
  | "ourTeam___employeeImage___fixed___src"
  | "ourTeam___employeeImage___fixed___srcSet"
  | "ourTeam___employeeImage___fixed___srcWebp"
  | "ourTeam___employeeImage___fixed___srcSetWebp"
  | "ourTeam___employeeImage___fluid___base64"
  | "ourTeam___employeeImage___fluid___tracedSVG"
  | "ourTeam___employeeImage___fluid___aspectRatio"
  | "ourTeam___employeeImage___fluid___src"
  | "ourTeam___employeeImage___fluid___srcSet"
  | "ourTeam___employeeImage___fluid___srcWebp"
  | "ourTeam___employeeImage___fluid___srcSetWebp"
  | "ourTeam___employeeImage___fluid___sizes"
  | "ourTeam___employeeImage___gatsbyImageData"
  | "ourTeam___employeeImage___resize___base64"
  | "ourTeam___employeeImage___resize___tracedSVG"
  | "ourTeam___employeeImage___resize___src"
  | "ourTeam___employeeImage___resize___width"
  | "ourTeam___employeeImage___resize___height"
  | "ourTeam___employeeImage___resize___aspectRatio"
  | "ourTeam___employeeImage___parent___id"
  | "ourTeam___employeeImage___parent___children"
  | "ourTeam___employeeImage___children"
  | "ourTeam___employeeImage___children___id"
  | "ourTeam___employeeImage___children___children"
  | "ourTeam___employeeImage___internal___content"
  | "ourTeam___employeeImage___internal___contentDigest"
  | "ourTeam___employeeImage___internal___description"
  | "ourTeam___employeeImage___internal___fieldOwners"
  | "ourTeam___employeeImage___internal___ignoreType"
  | "ourTeam___employeeImage___internal___mediaType"
  | "ourTeam___employeeImage___internal___owner"
  | "ourTeam___employeeImage___internal___type"
  | "ourTeam___about_us_page"
  | "ourTeam___about_us_page___contentful_id"
  | "ourTeam___about_us_page___id"
  | "ourTeam___about_us_page___node_locale"
  | "ourTeam___about_us_page___slug"
  | "ourTeam___about_us_page___aboutUsBanner___contentful_id"
  | "ourTeam___about_us_page___aboutUsBanner___id"
  | "ourTeam___about_us_page___aboutUsBanner___node_locale"
  | "ourTeam___about_us_page___aboutUsBanner___heading"
  | "ourTeam___about_us_page___aboutUsBanner___subHeader"
  | "ourTeam___about_us_page___aboutUsBanner___community_page"
  | "ourTeam___about_us_page___aboutUsBanner___spaceId"
  | "ourTeam___about_us_page___aboutUsBanner___createdAt"
  | "ourTeam___about_us_page___aboutUsBanner___updatedAt"
  | "ourTeam___about_us_page___aboutUsBanner___services_page"
  | "ourTeam___about_us_page___aboutUsBanner___home_page"
  | "ourTeam___about_us_page___aboutUsBanner___contact_page"
  | "ourTeam___about_us_page___aboutUsBanner___about_us_page"
  | "ourTeam___about_us_page___aboutUsBanner___children"
  | "ourTeam___about_us_page___whatWeDo___contentful_id"
  | "ourTeam___about_us_page___whatWeDo___id"
  | "ourTeam___about_us_page___whatWeDo___node_locale"
  | "ourTeam___about_us_page___whatWeDo___about_us_page"
  | "ourTeam___about_us_page___whatWeDo___spaceId"
  | "ourTeam___about_us_page___whatWeDo___createdAt"
  | "ourTeam___about_us_page___whatWeDo___updatedAt"
  | "ourTeam___about_us_page___whatWeDo___home_page"
  | "ourTeam___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "ourTeam___about_us_page___whatWeDo___children"
  | "ourTeam___about_us_page___carouselImages___contentful_id"
  | "ourTeam___about_us_page___carouselImages___id"
  | "ourTeam___about_us_page___carouselImages___node_locale"
  | "ourTeam___about_us_page___carouselImages___images"
  | "ourTeam___about_us_page___carouselImages___home_page"
  | "ourTeam___about_us_page___carouselImages___about_us_page"
  | "ourTeam___about_us_page___carouselImages___spaceId"
  | "ourTeam___about_us_page___carouselImages___createdAt"
  | "ourTeam___about_us_page___carouselImages___updatedAt"
  | "ourTeam___about_us_page___carouselImages___children"
  | "ourTeam___about_us_page___ourTeam"
  | "ourTeam___about_us_page___ourTeam___contentful_id"
  | "ourTeam___about_us_page___ourTeam___id"
  | "ourTeam___about_us_page___ourTeam___node_locale"
  | "ourTeam___about_us_page___ourTeam___name"
  | "ourTeam___about_us_page___ourTeam___jobTitle"
  | "ourTeam___about_us_page___ourTeam___cardSize"
  | "ourTeam___about_us_page___ourTeam___about_us_page"
  | "ourTeam___about_us_page___ourTeam___spaceId"
  | "ourTeam___about_us_page___ourTeam___createdAt"
  | "ourTeam___about_us_page___ourTeam___updatedAt"
  | "ourTeam___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "ourTeam___about_us_page___ourTeam___children"
  | "ourTeam___about_us_page___spaceId"
  | "ourTeam___about_us_page___createdAt"
  | "ourTeam___about_us_page___updatedAt"
  | "ourTeam___about_us_page___sys___type"
  | "ourTeam___about_us_page___sys___revision"
  | "ourTeam___about_us_page___parent___id"
  | "ourTeam___about_us_page___parent___children"
  | "ourTeam___about_us_page___children"
  | "ourTeam___about_us_page___children___id"
  | "ourTeam___about_us_page___children___children"
  | "ourTeam___about_us_page___internal___content"
  | "ourTeam___about_us_page___internal___contentDigest"
  | "ourTeam___about_us_page___internal___description"
  | "ourTeam___about_us_page___internal___fieldOwners"
  | "ourTeam___about_us_page___internal___ignoreType"
  | "ourTeam___about_us_page___internal___mediaType"
  | "ourTeam___about_us_page___internal___owner"
  | "ourTeam___about_us_page___internal___type"
  | "ourTeam___description___id"
  | "ourTeam___description___parent___id"
  | "ourTeam___description___parent___children"
  | "ourTeam___description___children"
  | "ourTeam___description___children___id"
  | "ourTeam___description___children___children"
  | "ourTeam___description___internal___content"
  | "ourTeam___description___internal___contentDigest"
  | "ourTeam___description___internal___description"
  | "ourTeam___description___internal___fieldOwners"
  | "ourTeam___description___internal___ignoreType"
  | "ourTeam___description___internal___mediaType"
  | "ourTeam___description___internal___owner"
  | "ourTeam___description___internal___type"
  | "ourTeam___description___description"
  | "ourTeam___description___sys___type"
  | "ourTeam___spaceId"
  | "ourTeam___createdAt"
  | "ourTeam___updatedAt"
  | "ourTeam___sys___type"
  | "ourTeam___sys___revision"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___id"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___parent___id"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___parent___children"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children___id"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___children___children"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___content"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___contentDigest"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___description"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___fieldOwners"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___ignoreType"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___mediaType"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___owner"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___internal___type"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___description"
  | "ourTeam___childrenContentfulEmployeeCardDescriptionTextNode___sys___type"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___id"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___parent___id"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___parent___children"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___children"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___children___id"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___children___children"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___content"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___contentDigest"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___description"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___fieldOwners"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___ignoreType"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___mediaType"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___owner"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___internal___type"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___description"
  | "ourTeam___childContentfulEmployeeCardDescriptionTextNode___sys___type"
  | "ourTeam___parent___id"
  | "ourTeam___parent___parent___id"
  | "ourTeam___parent___parent___children"
  | "ourTeam___parent___children"
  | "ourTeam___parent___children___id"
  | "ourTeam___parent___children___children"
  | "ourTeam___parent___internal___content"
  | "ourTeam___parent___internal___contentDigest"
  | "ourTeam___parent___internal___description"
  | "ourTeam___parent___internal___fieldOwners"
  | "ourTeam___parent___internal___ignoreType"
  | "ourTeam___parent___internal___mediaType"
  | "ourTeam___parent___internal___owner"
  | "ourTeam___parent___internal___type"
  | "ourTeam___children"
  | "ourTeam___children___id"
  | "ourTeam___children___parent___id"
  | "ourTeam___children___parent___children"
  | "ourTeam___children___children"
  | "ourTeam___children___children___id"
  | "ourTeam___children___children___children"
  | "ourTeam___children___internal___content"
  | "ourTeam___children___internal___contentDigest"
  | "ourTeam___children___internal___description"
  | "ourTeam___children___internal___fieldOwners"
  | "ourTeam___children___internal___ignoreType"
  | "ourTeam___children___internal___mediaType"
  | "ourTeam___children___internal___owner"
  | "ourTeam___children___internal___type"
  | "ourTeam___internal___content"
  | "ourTeam___internal___contentDigest"
  | "ourTeam___internal___description"
  | "ourTeam___internal___fieldOwners"
  | "ourTeam___internal___ignoreType"
  | "ourTeam___internal___mediaType"
  | "ourTeam___internal___owner"
  | "ourTeam___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulAboutUsPageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulAboutUsPageEdge>
  nodes: Array<ContentfulAboutUsPage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulAboutUsPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutUsPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContactPageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulContactPageEdge>
  nodes: Array<ContentfulContactPage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulContactPageGroupConnection>
}

export type ContentfulContactPageConnectionDistinctArgs = {
  field: ContentfulContactPageFieldsEnum
}

export type ContentfulContactPageConnectionMaxArgs = {
  field: ContentfulContactPageFieldsEnum
}

export type ContentfulContactPageConnectionMinArgs = {
  field: ContentfulContactPageFieldsEnum
}

export type ContentfulContactPageConnectionSumArgs = {
  field: ContentfulContactPageFieldsEnum
}

export type ContentfulContactPageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulContactPageFieldsEnum
}

export type ContentfulContactPageEdge = {
  next?: Maybe<ContentfulContactPage>
  node: ContentfulContactPage
  previous?: Maybe<ContentfulContactPage>
}

export type ContentfulContactPageFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "slug"
  | "contactBanner___contentful_id"
  | "contactBanner___id"
  | "contactBanner___node_locale"
  | "contactBanner___heading"
  | "contactBanner___subHeader"
  | "contactBanner___backgroundImage___contentful_id"
  | "contactBanner___backgroundImage___id"
  | "contactBanner___backgroundImage___spaceId"
  | "contactBanner___backgroundImage___createdAt"
  | "contactBanner___backgroundImage___updatedAt"
  | "contactBanner___backgroundImage___file___url"
  | "contactBanner___backgroundImage___file___fileName"
  | "contactBanner___backgroundImage___file___contentType"
  | "contactBanner___backgroundImage___title"
  | "contactBanner___backgroundImage___description"
  | "contactBanner___backgroundImage___node_locale"
  | "contactBanner___backgroundImage___sys___type"
  | "contactBanner___backgroundImage___sys___revision"
  | "contactBanner___backgroundImage___fixed___base64"
  | "contactBanner___backgroundImage___fixed___tracedSVG"
  | "contactBanner___backgroundImage___fixed___aspectRatio"
  | "contactBanner___backgroundImage___fixed___width"
  | "contactBanner___backgroundImage___fixed___height"
  | "contactBanner___backgroundImage___fixed___src"
  | "contactBanner___backgroundImage___fixed___srcSet"
  | "contactBanner___backgroundImage___fixed___srcWebp"
  | "contactBanner___backgroundImage___fixed___srcSetWebp"
  | "contactBanner___backgroundImage___fluid___base64"
  | "contactBanner___backgroundImage___fluid___tracedSVG"
  | "contactBanner___backgroundImage___fluid___aspectRatio"
  | "contactBanner___backgroundImage___fluid___src"
  | "contactBanner___backgroundImage___fluid___srcSet"
  | "contactBanner___backgroundImage___fluid___srcWebp"
  | "contactBanner___backgroundImage___fluid___srcSetWebp"
  | "contactBanner___backgroundImage___fluid___sizes"
  | "contactBanner___backgroundImage___gatsbyImageData"
  | "contactBanner___backgroundImage___resize___base64"
  | "contactBanner___backgroundImage___resize___tracedSVG"
  | "contactBanner___backgroundImage___resize___src"
  | "contactBanner___backgroundImage___resize___width"
  | "contactBanner___backgroundImage___resize___height"
  | "contactBanner___backgroundImage___resize___aspectRatio"
  | "contactBanner___backgroundImage___parent___id"
  | "contactBanner___backgroundImage___parent___children"
  | "contactBanner___backgroundImage___children"
  | "contactBanner___backgroundImage___children___id"
  | "contactBanner___backgroundImage___children___children"
  | "contactBanner___backgroundImage___internal___content"
  | "contactBanner___backgroundImage___internal___contentDigest"
  | "contactBanner___backgroundImage___internal___description"
  | "contactBanner___backgroundImage___internal___fieldOwners"
  | "contactBanner___backgroundImage___internal___ignoreType"
  | "contactBanner___backgroundImage___internal___mediaType"
  | "contactBanner___backgroundImage___internal___owner"
  | "contactBanner___backgroundImage___internal___type"
  | "contactBanner___community_page"
  | "contactBanner___community_page___contentful_id"
  | "contactBanner___community_page___id"
  | "contactBanner___community_page___node_locale"
  | "contactBanner___community_page___slug"
  | "contactBanner___community_page___communityBanner___contentful_id"
  | "contactBanner___community_page___communityBanner___id"
  | "contactBanner___community_page___communityBanner___node_locale"
  | "contactBanner___community_page___communityBanner___heading"
  | "contactBanner___community_page___communityBanner___subHeader"
  | "contactBanner___community_page___communityBanner___community_page"
  | "contactBanner___community_page___communityBanner___spaceId"
  | "contactBanner___community_page___communityBanner___createdAt"
  | "contactBanner___community_page___communityBanner___updatedAt"
  | "contactBanner___community_page___communityBanner___services_page"
  | "contactBanner___community_page___communityBanner___home_page"
  | "contactBanner___community_page___communityBanner___contact_page"
  | "contactBanner___community_page___communityBanner___about_us_page"
  | "contactBanner___community_page___communityBanner___children"
  | "contactBanner___community_page___newsCards"
  | "contactBanner___community_page___newsCards___contentful_id"
  | "contactBanner___community_page___newsCards___id"
  | "contactBanner___community_page___newsCards___node_locale"
  | "contactBanner___community_page___newsCards___title"
  | "contactBanner___community_page___newsCards___community_page"
  | "contactBanner___community_page___newsCards___spaceId"
  | "contactBanner___community_page___newsCards___createdAt"
  | "contactBanner___community_page___newsCards___updatedAt"
  | "contactBanner___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "contactBanner___community_page___newsCards___children"
  | "contactBanner___community_page___blogCards"
  | "contactBanner___community_page___blogCards___contentful_id"
  | "contactBanner___community_page___blogCards___id"
  | "contactBanner___community_page___blogCards___node_locale"
  | "contactBanner___community_page___blogCards___title"
  | "contactBanner___community_page___blogCards___community_page"
  | "contactBanner___community_page___blogCards___spaceId"
  | "contactBanner___community_page___blogCards___createdAt"
  | "contactBanner___community_page___blogCards___updatedAt"
  | "contactBanner___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "contactBanner___community_page___blogCards___children"
  | "contactBanner___community_page___communityCards"
  | "contactBanner___community_page___communityCards___contentful_id"
  | "contactBanner___community_page___communityCards___id"
  | "contactBanner___community_page___communityCards___node_locale"
  | "contactBanner___community_page___communityCards___title"
  | "contactBanner___community_page___communityCards___community_page"
  | "contactBanner___community_page___communityCards___spaceId"
  | "contactBanner___community_page___communityCards___createdAt"
  | "contactBanner___community_page___communityCards___updatedAt"
  | "contactBanner___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "contactBanner___community_page___communityCards___children"
  | "contactBanner___community_page___spaceId"
  | "contactBanner___community_page___createdAt"
  | "contactBanner___community_page___updatedAt"
  | "contactBanner___community_page___sys___type"
  | "contactBanner___community_page___sys___revision"
  | "contactBanner___community_page___parent___id"
  | "contactBanner___community_page___parent___children"
  | "contactBanner___community_page___children"
  | "contactBanner___community_page___children___id"
  | "contactBanner___community_page___children___children"
  | "contactBanner___community_page___internal___content"
  | "contactBanner___community_page___internal___contentDigest"
  | "contactBanner___community_page___internal___description"
  | "contactBanner___community_page___internal___fieldOwners"
  | "contactBanner___community_page___internal___ignoreType"
  | "contactBanner___community_page___internal___mediaType"
  | "contactBanner___community_page___internal___owner"
  | "contactBanner___community_page___internal___type"
  | "contactBanner___spaceId"
  | "contactBanner___createdAt"
  | "contactBanner___updatedAt"
  | "contactBanner___sys___type"
  | "contactBanner___sys___revision"
  | "contactBanner___services_page"
  | "contactBanner___services_page___contentful_id"
  | "contactBanner___services_page___id"
  | "contactBanner___services_page___node_locale"
  | "contactBanner___services_page___slug"
  | "contactBanner___services_page___servicesBanner___contentful_id"
  | "contactBanner___services_page___servicesBanner___id"
  | "contactBanner___services_page___servicesBanner___node_locale"
  | "contactBanner___services_page___servicesBanner___heading"
  | "contactBanner___services_page___servicesBanner___subHeader"
  | "contactBanner___services_page___servicesBanner___community_page"
  | "contactBanner___services_page___servicesBanner___spaceId"
  | "contactBanner___services_page___servicesBanner___createdAt"
  | "contactBanner___services_page___servicesBanner___updatedAt"
  | "contactBanner___services_page___servicesBanner___services_page"
  | "contactBanner___services_page___servicesBanner___home_page"
  | "contactBanner___services_page___servicesBanner___contact_page"
  | "contactBanner___services_page___servicesBanner___about_us_page"
  | "contactBanner___services_page___servicesBanner___children"
  | "contactBanner___services_page___serviceCards"
  | "contactBanner___services_page___serviceCards___contentful_id"
  | "contactBanner___services_page___serviceCards___id"
  | "contactBanner___services_page___serviceCards___node_locale"
  | "contactBanner___services_page___serviceCards___title"
  | "contactBanner___services_page___serviceCards___internalLink"
  | "contactBanner___services_page___serviceCards___stack"
  | "contactBanner___services_page___serviceCards___spaceId"
  | "contactBanner___services_page___serviceCards___createdAt"
  | "contactBanner___services_page___serviceCards___updatedAt"
  | "contactBanner___services_page___serviceCards___services_page"
  | "contactBanner___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "contactBanner___services_page___serviceCards___children"
  | "contactBanner___services_page___spaceId"
  | "contactBanner___services_page___createdAt"
  | "contactBanner___services_page___updatedAt"
  | "contactBanner___services_page___sys___type"
  | "contactBanner___services_page___sys___revision"
  | "contactBanner___services_page___parent___id"
  | "contactBanner___services_page___parent___children"
  | "contactBanner___services_page___children"
  | "contactBanner___services_page___children___id"
  | "contactBanner___services_page___children___children"
  | "contactBanner___services_page___internal___content"
  | "contactBanner___services_page___internal___contentDigest"
  | "contactBanner___services_page___internal___description"
  | "contactBanner___services_page___internal___fieldOwners"
  | "contactBanner___services_page___internal___ignoreType"
  | "contactBanner___services_page___internal___mediaType"
  | "contactBanner___services_page___internal___owner"
  | "contactBanner___services_page___internal___type"
  | "contactBanner___home_page"
  | "contactBanner___home_page___contentful_id"
  | "contactBanner___home_page___id"
  | "contactBanner___home_page___node_locale"
  | "contactBanner___home_page___slug"
  | "contactBanner___home_page___homeBanner___contentful_id"
  | "contactBanner___home_page___homeBanner___id"
  | "contactBanner___home_page___homeBanner___node_locale"
  | "contactBanner___home_page___homeBanner___heading"
  | "contactBanner___home_page___homeBanner___subHeader"
  | "contactBanner___home_page___homeBanner___community_page"
  | "contactBanner___home_page___homeBanner___spaceId"
  | "contactBanner___home_page___homeBanner___createdAt"
  | "contactBanner___home_page___homeBanner___updatedAt"
  | "contactBanner___home_page___homeBanner___services_page"
  | "contactBanner___home_page___homeBanner___home_page"
  | "contactBanner___home_page___homeBanner___contact_page"
  | "contactBanner___home_page___homeBanner___about_us_page"
  | "contactBanner___home_page___homeBanner___children"
  | "contactBanner___home_page___belowHero___contentful_id"
  | "contactBanner___home_page___belowHero___id"
  | "contactBanner___home_page___belowHero___node_locale"
  | "contactBanner___home_page___belowHero___about_us_page"
  | "contactBanner___home_page___belowHero___spaceId"
  | "contactBanner___home_page___belowHero___createdAt"
  | "contactBanner___home_page___belowHero___updatedAt"
  | "contactBanner___home_page___belowHero___home_page"
  | "contactBanner___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "contactBanner___home_page___belowHero___children"
  | "contactBanner___home_page___ctaStack___contentful_id"
  | "contactBanner___home_page___ctaStack___id"
  | "contactBanner___home_page___ctaStack___node_locale"
  | "contactBanner___home_page___ctaStack___cards"
  | "contactBanner___home_page___ctaStack___home_page"
  | "contactBanner___home_page___ctaStack___spaceId"
  | "contactBanner___home_page___ctaStack___createdAt"
  | "contactBanner___home_page___ctaStack___updatedAt"
  | "contactBanner___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "contactBanner___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "contactBanner___home_page___ctaStack___children"
  | "contactBanner___home_page___howWeHelpStack___contentful_id"
  | "contactBanner___home_page___howWeHelpStack___id"
  | "contactBanner___home_page___howWeHelpStack___node_locale"
  | "contactBanner___home_page___howWeHelpStack___cards"
  | "contactBanner___home_page___howWeHelpStack___home_page"
  | "contactBanner___home_page___howWeHelpStack___spaceId"
  | "contactBanner___home_page___howWeHelpStack___createdAt"
  | "contactBanner___home_page___howWeHelpStack___updatedAt"
  | "contactBanner___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "contactBanner___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "contactBanner___home_page___howWeHelpStack___children"
  | "contactBanner___home_page___testimonialSlides"
  | "contactBanner___home_page___testimonialSlides___contentful_id"
  | "contactBanner___home_page___testimonialSlides___id"
  | "contactBanner___home_page___testimonialSlides___node_locale"
  | "contactBanner___home_page___testimonialSlides___name"
  | "contactBanner___home_page___testimonialSlides___jobTitle"
  | "contactBanner___home_page___testimonialSlides___companyName"
  | "contactBanner___home_page___testimonialSlides___home_page"
  | "contactBanner___home_page___testimonialSlides___spaceId"
  | "contactBanner___home_page___testimonialSlides___createdAt"
  | "contactBanner___home_page___testimonialSlides___updatedAt"
  | "contactBanner___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "contactBanner___home_page___testimonialSlides___children"
  | "contactBanner___home_page___carouselImages___contentful_id"
  | "contactBanner___home_page___carouselImages___id"
  | "contactBanner___home_page___carouselImages___node_locale"
  | "contactBanner___home_page___carouselImages___images"
  | "contactBanner___home_page___carouselImages___home_page"
  | "contactBanner___home_page___carouselImages___about_us_page"
  | "contactBanner___home_page___carouselImages___spaceId"
  | "contactBanner___home_page___carouselImages___createdAt"
  | "contactBanner___home_page___carouselImages___updatedAt"
  | "contactBanner___home_page___carouselImages___children"
  | "contactBanner___home_page___spaceId"
  | "contactBanner___home_page___createdAt"
  | "contactBanner___home_page___updatedAt"
  | "contactBanner___home_page___sys___type"
  | "contactBanner___home_page___sys___revision"
  | "contactBanner___home_page___parent___id"
  | "contactBanner___home_page___parent___children"
  | "contactBanner___home_page___children"
  | "contactBanner___home_page___children___id"
  | "contactBanner___home_page___children___children"
  | "contactBanner___home_page___internal___content"
  | "contactBanner___home_page___internal___contentDigest"
  | "contactBanner___home_page___internal___description"
  | "contactBanner___home_page___internal___fieldOwners"
  | "contactBanner___home_page___internal___ignoreType"
  | "contactBanner___home_page___internal___mediaType"
  | "contactBanner___home_page___internal___owner"
  | "contactBanner___home_page___internal___type"
  | "contactBanner___contact_page"
  | "contactBanner___contact_page___contentful_id"
  | "contactBanner___contact_page___id"
  | "contactBanner___contact_page___node_locale"
  | "contactBanner___contact_page___slug"
  | "contactBanner___contact_page___contactBanner___contentful_id"
  | "contactBanner___contact_page___contactBanner___id"
  | "contactBanner___contact_page___contactBanner___node_locale"
  | "contactBanner___contact_page___contactBanner___heading"
  | "contactBanner___contact_page___contactBanner___subHeader"
  | "contactBanner___contact_page___contactBanner___community_page"
  | "contactBanner___contact_page___contactBanner___spaceId"
  | "contactBanner___contact_page___contactBanner___createdAt"
  | "contactBanner___contact_page___contactBanner___updatedAt"
  | "contactBanner___contact_page___contactBanner___services_page"
  | "contactBanner___contact_page___contactBanner___home_page"
  | "contactBanner___contact_page___contactBanner___contact_page"
  | "contactBanner___contact_page___contactBanner___about_us_page"
  | "contactBanner___contact_page___contactBanner___children"
  | "contactBanner___contact_page___spaceId"
  | "contactBanner___contact_page___createdAt"
  | "contactBanner___contact_page___updatedAt"
  | "contactBanner___contact_page___sys___type"
  | "contactBanner___contact_page___sys___revision"
  | "contactBanner___contact_page___parent___id"
  | "contactBanner___contact_page___parent___children"
  | "contactBanner___contact_page___children"
  | "contactBanner___contact_page___children___id"
  | "contactBanner___contact_page___children___children"
  | "contactBanner___contact_page___internal___content"
  | "contactBanner___contact_page___internal___contentDigest"
  | "contactBanner___contact_page___internal___description"
  | "contactBanner___contact_page___internal___fieldOwners"
  | "contactBanner___contact_page___internal___ignoreType"
  | "contactBanner___contact_page___internal___mediaType"
  | "contactBanner___contact_page___internal___owner"
  | "contactBanner___contact_page___internal___type"
  | "contactBanner___about_us_page"
  | "contactBanner___about_us_page___contentful_id"
  | "contactBanner___about_us_page___id"
  | "contactBanner___about_us_page___node_locale"
  | "contactBanner___about_us_page___slug"
  | "contactBanner___about_us_page___aboutUsBanner___contentful_id"
  | "contactBanner___about_us_page___aboutUsBanner___id"
  | "contactBanner___about_us_page___aboutUsBanner___node_locale"
  | "contactBanner___about_us_page___aboutUsBanner___heading"
  | "contactBanner___about_us_page___aboutUsBanner___subHeader"
  | "contactBanner___about_us_page___aboutUsBanner___community_page"
  | "contactBanner___about_us_page___aboutUsBanner___spaceId"
  | "contactBanner___about_us_page___aboutUsBanner___createdAt"
  | "contactBanner___about_us_page___aboutUsBanner___updatedAt"
  | "contactBanner___about_us_page___aboutUsBanner___services_page"
  | "contactBanner___about_us_page___aboutUsBanner___home_page"
  | "contactBanner___about_us_page___aboutUsBanner___contact_page"
  | "contactBanner___about_us_page___aboutUsBanner___about_us_page"
  | "contactBanner___about_us_page___aboutUsBanner___children"
  | "contactBanner___about_us_page___whatWeDo___contentful_id"
  | "contactBanner___about_us_page___whatWeDo___id"
  | "contactBanner___about_us_page___whatWeDo___node_locale"
  | "contactBanner___about_us_page___whatWeDo___about_us_page"
  | "contactBanner___about_us_page___whatWeDo___spaceId"
  | "contactBanner___about_us_page___whatWeDo___createdAt"
  | "contactBanner___about_us_page___whatWeDo___updatedAt"
  | "contactBanner___about_us_page___whatWeDo___home_page"
  | "contactBanner___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "contactBanner___about_us_page___whatWeDo___children"
  | "contactBanner___about_us_page___carouselImages___contentful_id"
  | "contactBanner___about_us_page___carouselImages___id"
  | "contactBanner___about_us_page___carouselImages___node_locale"
  | "contactBanner___about_us_page___carouselImages___images"
  | "contactBanner___about_us_page___carouselImages___home_page"
  | "contactBanner___about_us_page___carouselImages___about_us_page"
  | "contactBanner___about_us_page___carouselImages___spaceId"
  | "contactBanner___about_us_page___carouselImages___createdAt"
  | "contactBanner___about_us_page___carouselImages___updatedAt"
  | "contactBanner___about_us_page___carouselImages___children"
  | "contactBanner___about_us_page___ourTeam"
  | "contactBanner___about_us_page___ourTeam___contentful_id"
  | "contactBanner___about_us_page___ourTeam___id"
  | "contactBanner___about_us_page___ourTeam___node_locale"
  | "contactBanner___about_us_page___ourTeam___name"
  | "contactBanner___about_us_page___ourTeam___jobTitle"
  | "contactBanner___about_us_page___ourTeam___cardSize"
  | "contactBanner___about_us_page___ourTeam___about_us_page"
  | "contactBanner___about_us_page___ourTeam___spaceId"
  | "contactBanner___about_us_page___ourTeam___createdAt"
  | "contactBanner___about_us_page___ourTeam___updatedAt"
  | "contactBanner___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "contactBanner___about_us_page___ourTeam___children"
  | "contactBanner___about_us_page___spaceId"
  | "contactBanner___about_us_page___createdAt"
  | "contactBanner___about_us_page___updatedAt"
  | "contactBanner___about_us_page___sys___type"
  | "contactBanner___about_us_page___sys___revision"
  | "contactBanner___about_us_page___parent___id"
  | "contactBanner___about_us_page___parent___children"
  | "contactBanner___about_us_page___children"
  | "contactBanner___about_us_page___children___id"
  | "contactBanner___about_us_page___children___children"
  | "contactBanner___about_us_page___internal___content"
  | "contactBanner___about_us_page___internal___contentDigest"
  | "contactBanner___about_us_page___internal___description"
  | "contactBanner___about_us_page___internal___fieldOwners"
  | "contactBanner___about_us_page___internal___ignoreType"
  | "contactBanner___about_us_page___internal___mediaType"
  | "contactBanner___about_us_page___internal___owner"
  | "contactBanner___about_us_page___internal___type"
  | "contactBanner___parent___id"
  | "contactBanner___parent___parent___id"
  | "contactBanner___parent___parent___children"
  | "contactBanner___parent___children"
  | "contactBanner___parent___children___id"
  | "contactBanner___parent___children___children"
  | "contactBanner___parent___internal___content"
  | "contactBanner___parent___internal___contentDigest"
  | "contactBanner___parent___internal___description"
  | "contactBanner___parent___internal___fieldOwners"
  | "contactBanner___parent___internal___ignoreType"
  | "contactBanner___parent___internal___mediaType"
  | "contactBanner___parent___internal___owner"
  | "contactBanner___parent___internal___type"
  | "contactBanner___children"
  | "contactBanner___children___id"
  | "contactBanner___children___parent___id"
  | "contactBanner___children___parent___children"
  | "contactBanner___children___children"
  | "contactBanner___children___children___id"
  | "contactBanner___children___children___children"
  | "contactBanner___children___internal___content"
  | "contactBanner___children___internal___contentDigest"
  | "contactBanner___children___internal___description"
  | "contactBanner___children___internal___fieldOwners"
  | "contactBanner___children___internal___ignoreType"
  | "contactBanner___children___internal___mediaType"
  | "contactBanner___children___internal___owner"
  | "contactBanner___children___internal___type"
  | "contactBanner___internal___content"
  | "contactBanner___internal___contentDigest"
  | "contactBanner___internal___description"
  | "contactBanner___internal___fieldOwners"
  | "contactBanner___internal___ignoreType"
  | "contactBanner___internal___mediaType"
  | "contactBanner___internal___owner"
  | "contactBanner___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulContactPageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulContactPageEdge>
  nodes: Array<ContentfulContactPage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulContactPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContactPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulCommunityPageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulCommunityPageEdge>
  nodes: Array<ContentfulCommunityPage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulCommunityPageGroupConnection>
}

export type ContentfulCommunityPageConnectionDistinctArgs = {
  field: ContentfulCommunityPageFieldsEnum
}

export type ContentfulCommunityPageConnectionMaxArgs = {
  field: ContentfulCommunityPageFieldsEnum
}

export type ContentfulCommunityPageConnectionMinArgs = {
  field: ContentfulCommunityPageFieldsEnum
}

export type ContentfulCommunityPageConnectionSumArgs = {
  field: ContentfulCommunityPageFieldsEnum
}

export type ContentfulCommunityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulCommunityPageFieldsEnum
}

export type ContentfulCommunityPageEdge = {
  next?: Maybe<ContentfulCommunityPage>
  node: ContentfulCommunityPage
  previous?: Maybe<ContentfulCommunityPage>
}

export type ContentfulCommunityPageFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "slug"
  | "communityBanner___contentful_id"
  | "communityBanner___id"
  | "communityBanner___node_locale"
  | "communityBanner___heading"
  | "communityBanner___subHeader"
  | "communityBanner___backgroundImage___contentful_id"
  | "communityBanner___backgroundImage___id"
  | "communityBanner___backgroundImage___spaceId"
  | "communityBanner___backgroundImage___createdAt"
  | "communityBanner___backgroundImage___updatedAt"
  | "communityBanner___backgroundImage___file___url"
  | "communityBanner___backgroundImage___file___fileName"
  | "communityBanner___backgroundImage___file___contentType"
  | "communityBanner___backgroundImage___title"
  | "communityBanner___backgroundImage___description"
  | "communityBanner___backgroundImage___node_locale"
  | "communityBanner___backgroundImage___sys___type"
  | "communityBanner___backgroundImage___sys___revision"
  | "communityBanner___backgroundImage___fixed___base64"
  | "communityBanner___backgroundImage___fixed___tracedSVG"
  | "communityBanner___backgroundImage___fixed___aspectRatio"
  | "communityBanner___backgroundImage___fixed___width"
  | "communityBanner___backgroundImage___fixed___height"
  | "communityBanner___backgroundImage___fixed___src"
  | "communityBanner___backgroundImage___fixed___srcSet"
  | "communityBanner___backgroundImage___fixed___srcWebp"
  | "communityBanner___backgroundImage___fixed___srcSetWebp"
  | "communityBanner___backgroundImage___fluid___base64"
  | "communityBanner___backgroundImage___fluid___tracedSVG"
  | "communityBanner___backgroundImage___fluid___aspectRatio"
  | "communityBanner___backgroundImage___fluid___src"
  | "communityBanner___backgroundImage___fluid___srcSet"
  | "communityBanner___backgroundImage___fluid___srcWebp"
  | "communityBanner___backgroundImage___fluid___srcSetWebp"
  | "communityBanner___backgroundImage___fluid___sizes"
  | "communityBanner___backgroundImage___gatsbyImageData"
  | "communityBanner___backgroundImage___resize___base64"
  | "communityBanner___backgroundImage___resize___tracedSVG"
  | "communityBanner___backgroundImage___resize___src"
  | "communityBanner___backgroundImage___resize___width"
  | "communityBanner___backgroundImage___resize___height"
  | "communityBanner___backgroundImage___resize___aspectRatio"
  | "communityBanner___backgroundImage___parent___id"
  | "communityBanner___backgroundImage___parent___children"
  | "communityBanner___backgroundImage___children"
  | "communityBanner___backgroundImage___children___id"
  | "communityBanner___backgroundImage___children___children"
  | "communityBanner___backgroundImage___internal___content"
  | "communityBanner___backgroundImage___internal___contentDigest"
  | "communityBanner___backgroundImage___internal___description"
  | "communityBanner___backgroundImage___internal___fieldOwners"
  | "communityBanner___backgroundImage___internal___ignoreType"
  | "communityBanner___backgroundImage___internal___mediaType"
  | "communityBanner___backgroundImage___internal___owner"
  | "communityBanner___backgroundImage___internal___type"
  | "communityBanner___community_page"
  | "communityBanner___community_page___contentful_id"
  | "communityBanner___community_page___id"
  | "communityBanner___community_page___node_locale"
  | "communityBanner___community_page___slug"
  | "communityBanner___community_page___communityBanner___contentful_id"
  | "communityBanner___community_page___communityBanner___id"
  | "communityBanner___community_page___communityBanner___node_locale"
  | "communityBanner___community_page___communityBanner___heading"
  | "communityBanner___community_page___communityBanner___subHeader"
  | "communityBanner___community_page___communityBanner___community_page"
  | "communityBanner___community_page___communityBanner___spaceId"
  | "communityBanner___community_page___communityBanner___createdAt"
  | "communityBanner___community_page___communityBanner___updatedAt"
  | "communityBanner___community_page___communityBanner___services_page"
  | "communityBanner___community_page___communityBanner___home_page"
  | "communityBanner___community_page___communityBanner___contact_page"
  | "communityBanner___community_page___communityBanner___about_us_page"
  | "communityBanner___community_page___communityBanner___children"
  | "communityBanner___community_page___newsCards"
  | "communityBanner___community_page___newsCards___contentful_id"
  | "communityBanner___community_page___newsCards___id"
  | "communityBanner___community_page___newsCards___node_locale"
  | "communityBanner___community_page___newsCards___title"
  | "communityBanner___community_page___newsCards___community_page"
  | "communityBanner___community_page___newsCards___spaceId"
  | "communityBanner___community_page___newsCards___createdAt"
  | "communityBanner___community_page___newsCards___updatedAt"
  | "communityBanner___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "communityBanner___community_page___newsCards___children"
  | "communityBanner___community_page___blogCards"
  | "communityBanner___community_page___blogCards___contentful_id"
  | "communityBanner___community_page___blogCards___id"
  | "communityBanner___community_page___blogCards___node_locale"
  | "communityBanner___community_page___blogCards___title"
  | "communityBanner___community_page___blogCards___community_page"
  | "communityBanner___community_page___blogCards___spaceId"
  | "communityBanner___community_page___blogCards___createdAt"
  | "communityBanner___community_page___blogCards___updatedAt"
  | "communityBanner___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "communityBanner___community_page___blogCards___children"
  | "communityBanner___community_page___communityCards"
  | "communityBanner___community_page___communityCards___contentful_id"
  | "communityBanner___community_page___communityCards___id"
  | "communityBanner___community_page___communityCards___node_locale"
  | "communityBanner___community_page___communityCards___title"
  | "communityBanner___community_page___communityCards___community_page"
  | "communityBanner___community_page___communityCards___spaceId"
  | "communityBanner___community_page___communityCards___createdAt"
  | "communityBanner___community_page___communityCards___updatedAt"
  | "communityBanner___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "communityBanner___community_page___communityCards___children"
  | "communityBanner___community_page___spaceId"
  | "communityBanner___community_page___createdAt"
  | "communityBanner___community_page___updatedAt"
  | "communityBanner___community_page___sys___type"
  | "communityBanner___community_page___sys___revision"
  | "communityBanner___community_page___parent___id"
  | "communityBanner___community_page___parent___children"
  | "communityBanner___community_page___children"
  | "communityBanner___community_page___children___id"
  | "communityBanner___community_page___children___children"
  | "communityBanner___community_page___internal___content"
  | "communityBanner___community_page___internal___contentDigest"
  | "communityBanner___community_page___internal___description"
  | "communityBanner___community_page___internal___fieldOwners"
  | "communityBanner___community_page___internal___ignoreType"
  | "communityBanner___community_page___internal___mediaType"
  | "communityBanner___community_page___internal___owner"
  | "communityBanner___community_page___internal___type"
  | "communityBanner___spaceId"
  | "communityBanner___createdAt"
  | "communityBanner___updatedAt"
  | "communityBanner___sys___type"
  | "communityBanner___sys___revision"
  | "communityBanner___services_page"
  | "communityBanner___services_page___contentful_id"
  | "communityBanner___services_page___id"
  | "communityBanner___services_page___node_locale"
  | "communityBanner___services_page___slug"
  | "communityBanner___services_page___servicesBanner___contentful_id"
  | "communityBanner___services_page___servicesBanner___id"
  | "communityBanner___services_page___servicesBanner___node_locale"
  | "communityBanner___services_page___servicesBanner___heading"
  | "communityBanner___services_page___servicesBanner___subHeader"
  | "communityBanner___services_page___servicesBanner___community_page"
  | "communityBanner___services_page___servicesBanner___spaceId"
  | "communityBanner___services_page___servicesBanner___createdAt"
  | "communityBanner___services_page___servicesBanner___updatedAt"
  | "communityBanner___services_page___servicesBanner___services_page"
  | "communityBanner___services_page___servicesBanner___home_page"
  | "communityBanner___services_page___servicesBanner___contact_page"
  | "communityBanner___services_page___servicesBanner___about_us_page"
  | "communityBanner___services_page___servicesBanner___children"
  | "communityBanner___services_page___serviceCards"
  | "communityBanner___services_page___serviceCards___contentful_id"
  | "communityBanner___services_page___serviceCards___id"
  | "communityBanner___services_page___serviceCards___node_locale"
  | "communityBanner___services_page___serviceCards___title"
  | "communityBanner___services_page___serviceCards___internalLink"
  | "communityBanner___services_page___serviceCards___stack"
  | "communityBanner___services_page___serviceCards___spaceId"
  | "communityBanner___services_page___serviceCards___createdAt"
  | "communityBanner___services_page___serviceCards___updatedAt"
  | "communityBanner___services_page___serviceCards___services_page"
  | "communityBanner___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "communityBanner___services_page___serviceCards___children"
  | "communityBanner___services_page___spaceId"
  | "communityBanner___services_page___createdAt"
  | "communityBanner___services_page___updatedAt"
  | "communityBanner___services_page___sys___type"
  | "communityBanner___services_page___sys___revision"
  | "communityBanner___services_page___parent___id"
  | "communityBanner___services_page___parent___children"
  | "communityBanner___services_page___children"
  | "communityBanner___services_page___children___id"
  | "communityBanner___services_page___children___children"
  | "communityBanner___services_page___internal___content"
  | "communityBanner___services_page___internal___contentDigest"
  | "communityBanner___services_page___internal___description"
  | "communityBanner___services_page___internal___fieldOwners"
  | "communityBanner___services_page___internal___ignoreType"
  | "communityBanner___services_page___internal___mediaType"
  | "communityBanner___services_page___internal___owner"
  | "communityBanner___services_page___internal___type"
  | "communityBanner___home_page"
  | "communityBanner___home_page___contentful_id"
  | "communityBanner___home_page___id"
  | "communityBanner___home_page___node_locale"
  | "communityBanner___home_page___slug"
  | "communityBanner___home_page___homeBanner___contentful_id"
  | "communityBanner___home_page___homeBanner___id"
  | "communityBanner___home_page___homeBanner___node_locale"
  | "communityBanner___home_page___homeBanner___heading"
  | "communityBanner___home_page___homeBanner___subHeader"
  | "communityBanner___home_page___homeBanner___community_page"
  | "communityBanner___home_page___homeBanner___spaceId"
  | "communityBanner___home_page___homeBanner___createdAt"
  | "communityBanner___home_page___homeBanner___updatedAt"
  | "communityBanner___home_page___homeBanner___services_page"
  | "communityBanner___home_page___homeBanner___home_page"
  | "communityBanner___home_page___homeBanner___contact_page"
  | "communityBanner___home_page___homeBanner___about_us_page"
  | "communityBanner___home_page___homeBanner___children"
  | "communityBanner___home_page___belowHero___contentful_id"
  | "communityBanner___home_page___belowHero___id"
  | "communityBanner___home_page___belowHero___node_locale"
  | "communityBanner___home_page___belowHero___about_us_page"
  | "communityBanner___home_page___belowHero___spaceId"
  | "communityBanner___home_page___belowHero___createdAt"
  | "communityBanner___home_page___belowHero___updatedAt"
  | "communityBanner___home_page___belowHero___home_page"
  | "communityBanner___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "communityBanner___home_page___belowHero___children"
  | "communityBanner___home_page___ctaStack___contentful_id"
  | "communityBanner___home_page___ctaStack___id"
  | "communityBanner___home_page___ctaStack___node_locale"
  | "communityBanner___home_page___ctaStack___cards"
  | "communityBanner___home_page___ctaStack___home_page"
  | "communityBanner___home_page___ctaStack___spaceId"
  | "communityBanner___home_page___ctaStack___createdAt"
  | "communityBanner___home_page___ctaStack___updatedAt"
  | "communityBanner___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "communityBanner___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "communityBanner___home_page___ctaStack___children"
  | "communityBanner___home_page___howWeHelpStack___contentful_id"
  | "communityBanner___home_page___howWeHelpStack___id"
  | "communityBanner___home_page___howWeHelpStack___node_locale"
  | "communityBanner___home_page___howWeHelpStack___cards"
  | "communityBanner___home_page___howWeHelpStack___home_page"
  | "communityBanner___home_page___howWeHelpStack___spaceId"
  | "communityBanner___home_page___howWeHelpStack___createdAt"
  | "communityBanner___home_page___howWeHelpStack___updatedAt"
  | "communityBanner___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "communityBanner___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "communityBanner___home_page___howWeHelpStack___children"
  | "communityBanner___home_page___testimonialSlides"
  | "communityBanner___home_page___testimonialSlides___contentful_id"
  | "communityBanner___home_page___testimonialSlides___id"
  | "communityBanner___home_page___testimonialSlides___node_locale"
  | "communityBanner___home_page___testimonialSlides___name"
  | "communityBanner___home_page___testimonialSlides___jobTitle"
  | "communityBanner___home_page___testimonialSlides___companyName"
  | "communityBanner___home_page___testimonialSlides___home_page"
  | "communityBanner___home_page___testimonialSlides___spaceId"
  | "communityBanner___home_page___testimonialSlides___createdAt"
  | "communityBanner___home_page___testimonialSlides___updatedAt"
  | "communityBanner___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "communityBanner___home_page___testimonialSlides___children"
  | "communityBanner___home_page___carouselImages___contentful_id"
  | "communityBanner___home_page___carouselImages___id"
  | "communityBanner___home_page___carouselImages___node_locale"
  | "communityBanner___home_page___carouselImages___images"
  | "communityBanner___home_page___carouselImages___home_page"
  | "communityBanner___home_page___carouselImages___about_us_page"
  | "communityBanner___home_page___carouselImages___spaceId"
  | "communityBanner___home_page___carouselImages___createdAt"
  | "communityBanner___home_page___carouselImages___updatedAt"
  | "communityBanner___home_page___carouselImages___children"
  | "communityBanner___home_page___spaceId"
  | "communityBanner___home_page___createdAt"
  | "communityBanner___home_page___updatedAt"
  | "communityBanner___home_page___sys___type"
  | "communityBanner___home_page___sys___revision"
  | "communityBanner___home_page___parent___id"
  | "communityBanner___home_page___parent___children"
  | "communityBanner___home_page___children"
  | "communityBanner___home_page___children___id"
  | "communityBanner___home_page___children___children"
  | "communityBanner___home_page___internal___content"
  | "communityBanner___home_page___internal___contentDigest"
  | "communityBanner___home_page___internal___description"
  | "communityBanner___home_page___internal___fieldOwners"
  | "communityBanner___home_page___internal___ignoreType"
  | "communityBanner___home_page___internal___mediaType"
  | "communityBanner___home_page___internal___owner"
  | "communityBanner___home_page___internal___type"
  | "communityBanner___contact_page"
  | "communityBanner___contact_page___contentful_id"
  | "communityBanner___contact_page___id"
  | "communityBanner___contact_page___node_locale"
  | "communityBanner___contact_page___slug"
  | "communityBanner___contact_page___contactBanner___contentful_id"
  | "communityBanner___contact_page___contactBanner___id"
  | "communityBanner___contact_page___contactBanner___node_locale"
  | "communityBanner___contact_page___contactBanner___heading"
  | "communityBanner___contact_page___contactBanner___subHeader"
  | "communityBanner___contact_page___contactBanner___community_page"
  | "communityBanner___contact_page___contactBanner___spaceId"
  | "communityBanner___contact_page___contactBanner___createdAt"
  | "communityBanner___contact_page___contactBanner___updatedAt"
  | "communityBanner___contact_page___contactBanner___services_page"
  | "communityBanner___contact_page___contactBanner___home_page"
  | "communityBanner___contact_page___contactBanner___contact_page"
  | "communityBanner___contact_page___contactBanner___about_us_page"
  | "communityBanner___contact_page___contactBanner___children"
  | "communityBanner___contact_page___spaceId"
  | "communityBanner___contact_page___createdAt"
  | "communityBanner___contact_page___updatedAt"
  | "communityBanner___contact_page___sys___type"
  | "communityBanner___contact_page___sys___revision"
  | "communityBanner___contact_page___parent___id"
  | "communityBanner___contact_page___parent___children"
  | "communityBanner___contact_page___children"
  | "communityBanner___contact_page___children___id"
  | "communityBanner___contact_page___children___children"
  | "communityBanner___contact_page___internal___content"
  | "communityBanner___contact_page___internal___contentDigest"
  | "communityBanner___contact_page___internal___description"
  | "communityBanner___contact_page___internal___fieldOwners"
  | "communityBanner___contact_page___internal___ignoreType"
  | "communityBanner___contact_page___internal___mediaType"
  | "communityBanner___contact_page___internal___owner"
  | "communityBanner___contact_page___internal___type"
  | "communityBanner___about_us_page"
  | "communityBanner___about_us_page___contentful_id"
  | "communityBanner___about_us_page___id"
  | "communityBanner___about_us_page___node_locale"
  | "communityBanner___about_us_page___slug"
  | "communityBanner___about_us_page___aboutUsBanner___contentful_id"
  | "communityBanner___about_us_page___aboutUsBanner___id"
  | "communityBanner___about_us_page___aboutUsBanner___node_locale"
  | "communityBanner___about_us_page___aboutUsBanner___heading"
  | "communityBanner___about_us_page___aboutUsBanner___subHeader"
  | "communityBanner___about_us_page___aboutUsBanner___community_page"
  | "communityBanner___about_us_page___aboutUsBanner___spaceId"
  | "communityBanner___about_us_page___aboutUsBanner___createdAt"
  | "communityBanner___about_us_page___aboutUsBanner___updatedAt"
  | "communityBanner___about_us_page___aboutUsBanner___services_page"
  | "communityBanner___about_us_page___aboutUsBanner___home_page"
  | "communityBanner___about_us_page___aboutUsBanner___contact_page"
  | "communityBanner___about_us_page___aboutUsBanner___about_us_page"
  | "communityBanner___about_us_page___aboutUsBanner___children"
  | "communityBanner___about_us_page___whatWeDo___contentful_id"
  | "communityBanner___about_us_page___whatWeDo___id"
  | "communityBanner___about_us_page___whatWeDo___node_locale"
  | "communityBanner___about_us_page___whatWeDo___about_us_page"
  | "communityBanner___about_us_page___whatWeDo___spaceId"
  | "communityBanner___about_us_page___whatWeDo___createdAt"
  | "communityBanner___about_us_page___whatWeDo___updatedAt"
  | "communityBanner___about_us_page___whatWeDo___home_page"
  | "communityBanner___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "communityBanner___about_us_page___whatWeDo___children"
  | "communityBanner___about_us_page___carouselImages___contentful_id"
  | "communityBanner___about_us_page___carouselImages___id"
  | "communityBanner___about_us_page___carouselImages___node_locale"
  | "communityBanner___about_us_page___carouselImages___images"
  | "communityBanner___about_us_page___carouselImages___home_page"
  | "communityBanner___about_us_page___carouselImages___about_us_page"
  | "communityBanner___about_us_page___carouselImages___spaceId"
  | "communityBanner___about_us_page___carouselImages___createdAt"
  | "communityBanner___about_us_page___carouselImages___updatedAt"
  | "communityBanner___about_us_page___carouselImages___children"
  | "communityBanner___about_us_page___ourTeam"
  | "communityBanner___about_us_page___ourTeam___contentful_id"
  | "communityBanner___about_us_page___ourTeam___id"
  | "communityBanner___about_us_page___ourTeam___node_locale"
  | "communityBanner___about_us_page___ourTeam___name"
  | "communityBanner___about_us_page___ourTeam___jobTitle"
  | "communityBanner___about_us_page___ourTeam___cardSize"
  | "communityBanner___about_us_page___ourTeam___about_us_page"
  | "communityBanner___about_us_page___ourTeam___spaceId"
  | "communityBanner___about_us_page___ourTeam___createdAt"
  | "communityBanner___about_us_page___ourTeam___updatedAt"
  | "communityBanner___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "communityBanner___about_us_page___ourTeam___children"
  | "communityBanner___about_us_page___spaceId"
  | "communityBanner___about_us_page___createdAt"
  | "communityBanner___about_us_page___updatedAt"
  | "communityBanner___about_us_page___sys___type"
  | "communityBanner___about_us_page___sys___revision"
  | "communityBanner___about_us_page___parent___id"
  | "communityBanner___about_us_page___parent___children"
  | "communityBanner___about_us_page___children"
  | "communityBanner___about_us_page___children___id"
  | "communityBanner___about_us_page___children___children"
  | "communityBanner___about_us_page___internal___content"
  | "communityBanner___about_us_page___internal___contentDigest"
  | "communityBanner___about_us_page___internal___description"
  | "communityBanner___about_us_page___internal___fieldOwners"
  | "communityBanner___about_us_page___internal___ignoreType"
  | "communityBanner___about_us_page___internal___mediaType"
  | "communityBanner___about_us_page___internal___owner"
  | "communityBanner___about_us_page___internal___type"
  | "communityBanner___parent___id"
  | "communityBanner___parent___parent___id"
  | "communityBanner___parent___parent___children"
  | "communityBanner___parent___children"
  | "communityBanner___parent___children___id"
  | "communityBanner___parent___children___children"
  | "communityBanner___parent___internal___content"
  | "communityBanner___parent___internal___contentDigest"
  | "communityBanner___parent___internal___description"
  | "communityBanner___parent___internal___fieldOwners"
  | "communityBanner___parent___internal___ignoreType"
  | "communityBanner___parent___internal___mediaType"
  | "communityBanner___parent___internal___owner"
  | "communityBanner___parent___internal___type"
  | "communityBanner___children"
  | "communityBanner___children___id"
  | "communityBanner___children___parent___id"
  | "communityBanner___children___parent___children"
  | "communityBanner___children___children"
  | "communityBanner___children___children___id"
  | "communityBanner___children___children___children"
  | "communityBanner___children___internal___content"
  | "communityBanner___children___internal___contentDigest"
  | "communityBanner___children___internal___description"
  | "communityBanner___children___internal___fieldOwners"
  | "communityBanner___children___internal___ignoreType"
  | "communityBanner___children___internal___mediaType"
  | "communityBanner___children___internal___owner"
  | "communityBanner___children___internal___type"
  | "communityBanner___internal___content"
  | "communityBanner___internal___contentDigest"
  | "communityBanner___internal___description"
  | "communityBanner___internal___fieldOwners"
  | "communityBanner___internal___ignoreType"
  | "communityBanner___internal___mediaType"
  | "communityBanner___internal___owner"
  | "communityBanner___internal___type"
  | "newsCards"
  | "newsCards___contentful_id"
  | "newsCards___id"
  | "newsCards___node_locale"
  | "newsCards___title"
  | "newsCards___image___contentful_id"
  | "newsCards___image___id"
  | "newsCards___image___spaceId"
  | "newsCards___image___createdAt"
  | "newsCards___image___updatedAt"
  | "newsCards___image___file___url"
  | "newsCards___image___file___fileName"
  | "newsCards___image___file___contentType"
  | "newsCards___image___title"
  | "newsCards___image___description"
  | "newsCards___image___node_locale"
  | "newsCards___image___sys___type"
  | "newsCards___image___sys___revision"
  | "newsCards___image___fixed___base64"
  | "newsCards___image___fixed___tracedSVG"
  | "newsCards___image___fixed___aspectRatio"
  | "newsCards___image___fixed___width"
  | "newsCards___image___fixed___height"
  | "newsCards___image___fixed___src"
  | "newsCards___image___fixed___srcSet"
  | "newsCards___image___fixed___srcWebp"
  | "newsCards___image___fixed___srcSetWebp"
  | "newsCards___image___fluid___base64"
  | "newsCards___image___fluid___tracedSVG"
  | "newsCards___image___fluid___aspectRatio"
  | "newsCards___image___fluid___src"
  | "newsCards___image___fluid___srcSet"
  | "newsCards___image___fluid___srcWebp"
  | "newsCards___image___fluid___srcSetWebp"
  | "newsCards___image___fluid___sizes"
  | "newsCards___image___gatsbyImageData"
  | "newsCards___image___resize___base64"
  | "newsCards___image___resize___tracedSVG"
  | "newsCards___image___resize___src"
  | "newsCards___image___resize___width"
  | "newsCards___image___resize___height"
  | "newsCards___image___resize___aspectRatio"
  | "newsCards___image___parent___id"
  | "newsCards___image___parent___children"
  | "newsCards___image___children"
  | "newsCards___image___children___id"
  | "newsCards___image___children___children"
  | "newsCards___image___internal___content"
  | "newsCards___image___internal___contentDigest"
  | "newsCards___image___internal___description"
  | "newsCards___image___internal___fieldOwners"
  | "newsCards___image___internal___ignoreType"
  | "newsCards___image___internal___mediaType"
  | "newsCards___image___internal___owner"
  | "newsCards___image___internal___type"
  | "newsCards___button___contentful_id"
  | "newsCards___button___id"
  | "newsCards___button___node_locale"
  | "newsCards___button___buttonText"
  | "newsCards___button___buttonLink"
  | "newsCards___button___image_cards"
  | "newsCards___button___image_cards___contentful_id"
  | "newsCards___button___image_cards___id"
  | "newsCards___button___image_cards___node_locale"
  | "newsCards___button___image_cards___title"
  | "newsCards___button___image_cards___community_page"
  | "newsCards___button___image_cards___spaceId"
  | "newsCards___button___image_cards___createdAt"
  | "newsCards___button___image_cards___updatedAt"
  | "newsCards___button___image_cards___childrenContentfulImageCardsTextTextNode"
  | "newsCards___button___image_cards___children"
  | "newsCards___button___spaceId"
  | "newsCards___button___createdAt"
  | "newsCards___button___updatedAt"
  | "newsCards___button___sys___type"
  | "newsCards___button___sys___revision"
  | "newsCards___button___parent___id"
  | "newsCards___button___parent___children"
  | "newsCards___button___children"
  | "newsCards___button___children___id"
  | "newsCards___button___children___children"
  | "newsCards___button___internal___content"
  | "newsCards___button___internal___contentDigest"
  | "newsCards___button___internal___description"
  | "newsCards___button___internal___fieldOwners"
  | "newsCards___button___internal___ignoreType"
  | "newsCards___button___internal___mediaType"
  | "newsCards___button___internal___owner"
  | "newsCards___button___internal___type"
  | "newsCards___community_page"
  | "newsCards___community_page___contentful_id"
  | "newsCards___community_page___id"
  | "newsCards___community_page___node_locale"
  | "newsCards___community_page___slug"
  | "newsCards___community_page___communityBanner___contentful_id"
  | "newsCards___community_page___communityBanner___id"
  | "newsCards___community_page___communityBanner___node_locale"
  | "newsCards___community_page___communityBanner___heading"
  | "newsCards___community_page___communityBanner___subHeader"
  | "newsCards___community_page___communityBanner___community_page"
  | "newsCards___community_page___communityBanner___spaceId"
  | "newsCards___community_page___communityBanner___createdAt"
  | "newsCards___community_page___communityBanner___updatedAt"
  | "newsCards___community_page___communityBanner___services_page"
  | "newsCards___community_page___communityBanner___home_page"
  | "newsCards___community_page___communityBanner___contact_page"
  | "newsCards___community_page___communityBanner___about_us_page"
  | "newsCards___community_page___communityBanner___children"
  | "newsCards___community_page___newsCards"
  | "newsCards___community_page___newsCards___contentful_id"
  | "newsCards___community_page___newsCards___id"
  | "newsCards___community_page___newsCards___node_locale"
  | "newsCards___community_page___newsCards___title"
  | "newsCards___community_page___newsCards___community_page"
  | "newsCards___community_page___newsCards___spaceId"
  | "newsCards___community_page___newsCards___createdAt"
  | "newsCards___community_page___newsCards___updatedAt"
  | "newsCards___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "newsCards___community_page___newsCards___children"
  | "newsCards___community_page___blogCards"
  | "newsCards___community_page___blogCards___contentful_id"
  | "newsCards___community_page___blogCards___id"
  | "newsCards___community_page___blogCards___node_locale"
  | "newsCards___community_page___blogCards___title"
  | "newsCards___community_page___blogCards___community_page"
  | "newsCards___community_page___blogCards___spaceId"
  | "newsCards___community_page___blogCards___createdAt"
  | "newsCards___community_page___blogCards___updatedAt"
  | "newsCards___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "newsCards___community_page___blogCards___children"
  | "newsCards___community_page___communityCards"
  | "newsCards___community_page___communityCards___contentful_id"
  | "newsCards___community_page___communityCards___id"
  | "newsCards___community_page___communityCards___node_locale"
  | "newsCards___community_page___communityCards___title"
  | "newsCards___community_page___communityCards___community_page"
  | "newsCards___community_page___communityCards___spaceId"
  | "newsCards___community_page___communityCards___createdAt"
  | "newsCards___community_page___communityCards___updatedAt"
  | "newsCards___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "newsCards___community_page___communityCards___children"
  | "newsCards___community_page___spaceId"
  | "newsCards___community_page___createdAt"
  | "newsCards___community_page___updatedAt"
  | "newsCards___community_page___sys___type"
  | "newsCards___community_page___sys___revision"
  | "newsCards___community_page___parent___id"
  | "newsCards___community_page___parent___children"
  | "newsCards___community_page___children"
  | "newsCards___community_page___children___id"
  | "newsCards___community_page___children___children"
  | "newsCards___community_page___internal___content"
  | "newsCards___community_page___internal___contentDigest"
  | "newsCards___community_page___internal___description"
  | "newsCards___community_page___internal___fieldOwners"
  | "newsCards___community_page___internal___ignoreType"
  | "newsCards___community_page___internal___mediaType"
  | "newsCards___community_page___internal___owner"
  | "newsCards___community_page___internal___type"
  | "newsCards___text___id"
  | "newsCards___text___parent___id"
  | "newsCards___text___parent___children"
  | "newsCards___text___children"
  | "newsCards___text___children___id"
  | "newsCards___text___children___children"
  | "newsCards___text___internal___content"
  | "newsCards___text___internal___contentDigest"
  | "newsCards___text___internal___description"
  | "newsCards___text___internal___fieldOwners"
  | "newsCards___text___internal___ignoreType"
  | "newsCards___text___internal___mediaType"
  | "newsCards___text___internal___owner"
  | "newsCards___text___internal___type"
  | "newsCards___text___text"
  | "newsCards___text___sys___type"
  | "newsCards___spaceId"
  | "newsCards___createdAt"
  | "newsCards___updatedAt"
  | "newsCards___sys___type"
  | "newsCards___sys___revision"
  | "newsCards___childrenContentfulImageCardsTextTextNode"
  | "newsCards___childrenContentfulImageCardsTextTextNode___id"
  | "newsCards___childrenContentfulImageCardsTextTextNode___parent___id"
  | "newsCards___childrenContentfulImageCardsTextTextNode___parent___children"
  | "newsCards___childrenContentfulImageCardsTextTextNode___children"
  | "newsCards___childrenContentfulImageCardsTextTextNode___children___id"
  | "newsCards___childrenContentfulImageCardsTextTextNode___children___children"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___content"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___contentDigest"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___description"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___ignoreType"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___mediaType"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___owner"
  | "newsCards___childrenContentfulImageCardsTextTextNode___internal___type"
  | "newsCards___childrenContentfulImageCardsTextTextNode___text"
  | "newsCards___childrenContentfulImageCardsTextTextNode___sys___type"
  | "newsCards___childContentfulImageCardsTextTextNode___id"
  | "newsCards___childContentfulImageCardsTextTextNode___parent___id"
  | "newsCards___childContentfulImageCardsTextTextNode___parent___children"
  | "newsCards___childContentfulImageCardsTextTextNode___children"
  | "newsCards___childContentfulImageCardsTextTextNode___children___id"
  | "newsCards___childContentfulImageCardsTextTextNode___children___children"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___content"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___contentDigest"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___description"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___ignoreType"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___mediaType"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___owner"
  | "newsCards___childContentfulImageCardsTextTextNode___internal___type"
  | "newsCards___childContentfulImageCardsTextTextNode___text"
  | "newsCards___childContentfulImageCardsTextTextNode___sys___type"
  | "newsCards___parent___id"
  | "newsCards___parent___parent___id"
  | "newsCards___parent___parent___children"
  | "newsCards___parent___children"
  | "newsCards___parent___children___id"
  | "newsCards___parent___children___children"
  | "newsCards___parent___internal___content"
  | "newsCards___parent___internal___contentDigest"
  | "newsCards___parent___internal___description"
  | "newsCards___parent___internal___fieldOwners"
  | "newsCards___parent___internal___ignoreType"
  | "newsCards___parent___internal___mediaType"
  | "newsCards___parent___internal___owner"
  | "newsCards___parent___internal___type"
  | "newsCards___children"
  | "newsCards___children___id"
  | "newsCards___children___parent___id"
  | "newsCards___children___parent___children"
  | "newsCards___children___children"
  | "newsCards___children___children___id"
  | "newsCards___children___children___children"
  | "newsCards___children___internal___content"
  | "newsCards___children___internal___contentDigest"
  | "newsCards___children___internal___description"
  | "newsCards___children___internal___fieldOwners"
  | "newsCards___children___internal___ignoreType"
  | "newsCards___children___internal___mediaType"
  | "newsCards___children___internal___owner"
  | "newsCards___children___internal___type"
  | "newsCards___internal___content"
  | "newsCards___internal___contentDigest"
  | "newsCards___internal___description"
  | "newsCards___internal___fieldOwners"
  | "newsCards___internal___ignoreType"
  | "newsCards___internal___mediaType"
  | "newsCards___internal___owner"
  | "newsCards___internal___type"
  | "blogCards"
  | "blogCards___contentful_id"
  | "blogCards___id"
  | "blogCards___node_locale"
  | "blogCards___title"
  | "blogCards___image___contentful_id"
  | "blogCards___image___id"
  | "blogCards___image___spaceId"
  | "blogCards___image___createdAt"
  | "blogCards___image___updatedAt"
  | "blogCards___image___file___url"
  | "blogCards___image___file___fileName"
  | "blogCards___image___file___contentType"
  | "blogCards___image___title"
  | "blogCards___image___description"
  | "blogCards___image___node_locale"
  | "blogCards___image___sys___type"
  | "blogCards___image___sys___revision"
  | "blogCards___image___fixed___base64"
  | "blogCards___image___fixed___tracedSVG"
  | "blogCards___image___fixed___aspectRatio"
  | "blogCards___image___fixed___width"
  | "blogCards___image___fixed___height"
  | "blogCards___image___fixed___src"
  | "blogCards___image___fixed___srcSet"
  | "blogCards___image___fixed___srcWebp"
  | "blogCards___image___fixed___srcSetWebp"
  | "blogCards___image___fluid___base64"
  | "blogCards___image___fluid___tracedSVG"
  | "blogCards___image___fluid___aspectRatio"
  | "blogCards___image___fluid___src"
  | "blogCards___image___fluid___srcSet"
  | "blogCards___image___fluid___srcWebp"
  | "blogCards___image___fluid___srcSetWebp"
  | "blogCards___image___fluid___sizes"
  | "blogCards___image___gatsbyImageData"
  | "blogCards___image___resize___base64"
  | "blogCards___image___resize___tracedSVG"
  | "blogCards___image___resize___src"
  | "blogCards___image___resize___width"
  | "blogCards___image___resize___height"
  | "blogCards___image___resize___aspectRatio"
  | "blogCards___image___parent___id"
  | "blogCards___image___parent___children"
  | "blogCards___image___children"
  | "blogCards___image___children___id"
  | "blogCards___image___children___children"
  | "blogCards___image___internal___content"
  | "blogCards___image___internal___contentDigest"
  | "blogCards___image___internal___description"
  | "blogCards___image___internal___fieldOwners"
  | "blogCards___image___internal___ignoreType"
  | "blogCards___image___internal___mediaType"
  | "blogCards___image___internal___owner"
  | "blogCards___image___internal___type"
  | "blogCards___button___contentful_id"
  | "blogCards___button___id"
  | "blogCards___button___node_locale"
  | "blogCards___button___buttonText"
  | "blogCards___button___buttonLink"
  | "blogCards___button___image_cards"
  | "blogCards___button___image_cards___contentful_id"
  | "blogCards___button___image_cards___id"
  | "blogCards___button___image_cards___node_locale"
  | "blogCards___button___image_cards___title"
  | "blogCards___button___image_cards___community_page"
  | "blogCards___button___image_cards___spaceId"
  | "blogCards___button___image_cards___createdAt"
  | "blogCards___button___image_cards___updatedAt"
  | "blogCards___button___image_cards___childrenContentfulImageCardsTextTextNode"
  | "blogCards___button___image_cards___children"
  | "blogCards___button___spaceId"
  | "blogCards___button___createdAt"
  | "blogCards___button___updatedAt"
  | "blogCards___button___sys___type"
  | "blogCards___button___sys___revision"
  | "blogCards___button___parent___id"
  | "blogCards___button___parent___children"
  | "blogCards___button___children"
  | "blogCards___button___children___id"
  | "blogCards___button___children___children"
  | "blogCards___button___internal___content"
  | "blogCards___button___internal___contentDigest"
  | "blogCards___button___internal___description"
  | "blogCards___button___internal___fieldOwners"
  | "blogCards___button___internal___ignoreType"
  | "blogCards___button___internal___mediaType"
  | "blogCards___button___internal___owner"
  | "blogCards___button___internal___type"
  | "blogCards___community_page"
  | "blogCards___community_page___contentful_id"
  | "blogCards___community_page___id"
  | "blogCards___community_page___node_locale"
  | "blogCards___community_page___slug"
  | "blogCards___community_page___communityBanner___contentful_id"
  | "blogCards___community_page___communityBanner___id"
  | "blogCards___community_page___communityBanner___node_locale"
  | "blogCards___community_page___communityBanner___heading"
  | "blogCards___community_page___communityBanner___subHeader"
  | "blogCards___community_page___communityBanner___community_page"
  | "blogCards___community_page___communityBanner___spaceId"
  | "blogCards___community_page___communityBanner___createdAt"
  | "blogCards___community_page___communityBanner___updatedAt"
  | "blogCards___community_page___communityBanner___services_page"
  | "blogCards___community_page___communityBanner___home_page"
  | "blogCards___community_page___communityBanner___contact_page"
  | "blogCards___community_page___communityBanner___about_us_page"
  | "blogCards___community_page___communityBanner___children"
  | "blogCards___community_page___newsCards"
  | "blogCards___community_page___newsCards___contentful_id"
  | "blogCards___community_page___newsCards___id"
  | "blogCards___community_page___newsCards___node_locale"
  | "blogCards___community_page___newsCards___title"
  | "blogCards___community_page___newsCards___community_page"
  | "blogCards___community_page___newsCards___spaceId"
  | "blogCards___community_page___newsCards___createdAt"
  | "blogCards___community_page___newsCards___updatedAt"
  | "blogCards___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "blogCards___community_page___newsCards___children"
  | "blogCards___community_page___blogCards"
  | "blogCards___community_page___blogCards___contentful_id"
  | "blogCards___community_page___blogCards___id"
  | "blogCards___community_page___blogCards___node_locale"
  | "blogCards___community_page___blogCards___title"
  | "blogCards___community_page___blogCards___community_page"
  | "blogCards___community_page___blogCards___spaceId"
  | "blogCards___community_page___blogCards___createdAt"
  | "blogCards___community_page___blogCards___updatedAt"
  | "blogCards___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "blogCards___community_page___blogCards___children"
  | "blogCards___community_page___communityCards"
  | "blogCards___community_page___communityCards___contentful_id"
  | "blogCards___community_page___communityCards___id"
  | "blogCards___community_page___communityCards___node_locale"
  | "blogCards___community_page___communityCards___title"
  | "blogCards___community_page___communityCards___community_page"
  | "blogCards___community_page___communityCards___spaceId"
  | "blogCards___community_page___communityCards___createdAt"
  | "blogCards___community_page___communityCards___updatedAt"
  | "blogCards___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "blogCards___community_page___communityCards___children"
  | "blogCards___community_page___spaceId"
  | "blogCards___community_page___createdAt"
  | "blogCards___community_page___updatedAt"
  | "blogCards___community_page___sys___type"
  | "blogCards___community_page___sys___revision"
  | "blogCards___community_page___parent___id"
  | "blogCards___community_page___parent___children"
  | "blogCards___community_page___children"
  | "blogCards___community_page___children___id"
  | "blogCards___community_page___children___children"
  | "blogCards___community_page___internal___content"
  | "blogCards___community_page___internal___contentDigest"
  | "blogCards___community_page___internal___description"
  | "blogCards___community_page___internal___fieldOwners"
  | "blogCards___community_page___internal___ignoreType"
  | "blogCards___community_page___internal___mediaType"
  | "blogCards___community_page___internal___owner"
  | "blogCards___community_page___internal___type"
  | "blogCards___text___id"
  | "blogCards___text___parent___id"
  | "blogCards___text___parent___children"
  | "blogCards___text___children"
  | "blogCards___text___children___id"
  | "blogCards___text___children___children"
  | "blogCards___text___internal___content"
  | "blogCards___text___internal___contentDigest"
  | "blogCards___text___internal___description"
  | "blogCards___text___internal___fieldOwners"
  | "blogCards___text___internal___ignoreType"
  | "blogCards___text___internal___mediaType"
  | "blogCards___text___internal___owner"
  | "blogCards___text___internal___type"
  | "blogCards___text___text"
  | "blogCards___text___sys___type"
  | "blogCards___spaceId"
  | "blogCards___createdAt"
  | "blogCards___updatedAt"
  | "blogCards___sys___type"
  | "blogCards___sys___revision"
  | "blogCards___childrenContentfulImageCardsTextTextNode"
  | "blogCards___childrenContentfulImageCardsTextTextNode___id"
  | "blogCards___childrenContentfulImageCardsTextTextNode___parent___id"
  | "blogCards___childrenContentfulImageCardsTextTextNode___parent___children"
  | "blogCards___childrenContentfulImageCardsTextTextNode___children"
  | "blogCards___childrenContentfulImageCardsTextTextNode___children___id"
  | "blogCards___childrenContentfulImageCardsTextTextNode___children___children"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___content"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___contentDigest"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___description"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___ignoreType"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___mediaType"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___owner"
  | "blogCards___childrenContentfulImageCardsTextTextNode___internal___type"
  | "blogCards___childrenContentfulImageCardsTextTextNode___text"
  | "blogCards___childrenContentfulImageCardsTextTextNode___sys___type"
  | "blogCards___childContentfulImageCardsTextTextNode___id"
  | "blogCards___childContentfulImageCardsTextTextNode___parent___id"
  | "blogCards___childContentfulImageCardsTextTextNode___parent___children"
  | "blogCards___childContentfulImageCardsTextTextNode___children"
  | "blogCards___childContentfulImageCardsTextTextNode___children___id"
  | "blogCards___childContentfulImageCardsTextTextNode___children___children"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___content"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___contentDigest"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___description"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___ignoreType"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___mediaType"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___owner"
  | "blogCards___childContentfulImageCardsTextTextNode___internal___type"
  | "blogCards___childContentfulImageCardsTextTextNode___text"
  | "blogCards___childContentfulImageCardsTextTextNode___sys___type"
  | "blogCards___parent___id"
  | "blogCards___parent___parent___id"
  | "blogCards___parent___parent___children"
  | "blogCards___parent___children"
  | "blogCards___parent___children___id"
  | "blogCards___parent___children___children"
  | "blogCards___parent___internal___content"
  | "blogCards___parent___internal___contentDigest"
  | "blogCards___parent___internal___description"
  | "blogCards___parent___internal___fieldOwners"
  | "blogCards___parent___internal___ignoreType"
  | "blogCards___parent___internal___mediaType"
  | "blogCards___parent___internal___owner"
  | "blogCards___parent___internal___type"
  | "blogCards___children"
  | "blogCards___children___id"
  | "blogCards___children___parent___id"
  | "blogCards___children___parent___children"
  | "blogCards___children___children"
  | "blogCards___children___children___id"
  | "blogCards___children___children___children"
  | "blogCards___children___internal___content"
  | "blogCards___children___internal___contentDigest"
  | "blogCards___children___internal___description"
  | "blogCards___children___internal___fieldOwners"
  | "blogCards___children___internal___ignoreType"
  | "blogCards___children___internal___mediaType"
  | "blogCards___children___internal___owner"
  | "blogCards___children___internal___type"
  | "blogCards___internal___content"
  | "blogCards___internal___contentDigest"
  | "blogCards___internal___description"
  | "blogCards___internal___fieldOwners"
  | "blogCards___internal___ignoreType"
  | "blogCards___internal___mediaType"
  | "blogCards___internal___owner"
  | "blogCards___internal___type"
  | "communityCards"
  | "communityCards___contentful_id"
  | "communityCards___id"
  | "communityCards___node_locale"
  | "communityCards___title"
  | "communityCards___image___contentful_id"
  | "communityCards___image___id"
  | "communityCards___image___spaceId"
  | "communityCards___image___createdAt"
  | "communityCards___image___updatedAt"
  | "communityCards___image___file___url"
  | "communityCards___image___file___fileName"
  | "communityCards___image___file___contentType"
  | "communityCards___image___title"
  | "communityCards___image___description"
  | "communityCards___image___node_locale"
  | "communityCards___image___sys___type"
  | "communityCards___image___sys___revision"
  | "communityCards___image___fixed___base64"
  | "communityCards___image___fixed___tracedSVG"
  | "communityCards___image___fixed___aspectRatio"
  | "communityCards___image___fixed___width"
  | "communityCards___image___fixed___height"
  | "communityCards___image___fixed___src"
  | "communityCards___image___fixed___srcSet"
  | "communityCards___image___fixed___srcWebp"
  | "communityCards___image___fixed___srcSetWebp"
  | "communityCards___image___fluid___base64"
  | "communityCards___image___fluid___tracedSVG"
  | "communityCards___image___fluid___aspectRatio"
  | "communityCards___image___fluid___src"
  | "communityCards___image___fluid___srcSet"
  | "communityCards___image___fluid___srcWebp"
  | "communityCards___image___fluid___srcSetWebp"
  | "communityCards___image___fluid___sizes"
  | "communityCards___image___gatsbyImageData"
  | "communityCards___image___resize___base64"
  | "communityCards___image___resize___tracedSVG"
  | "communityCards___image___resize___src"
  | "communityCards___image___resize___width"
  | "communityCards___image___resize___height"
  | "communityCards___image___resize___aspectRatio"
  | "communityCards___image___parent___id"
  | "communityCards___image___parent___children"
  | "communityCards___image___children"
  | "communityCards___image___children___id"
  | "communityCards___image___children___children"
  | "communityCards___image___internal___content"
  | "communityCards___image___internal___contentDigest"
  | "communityCards___image___internal___description"
  | "communityCards___image___internal___fieldOwners"
  | "communityCards___image___internal___ignoreType"
  | "communityCards___image___internal___mediaType"
  | "communityCards___image___internal___owner"
  | "communityCards___image___internal___type"
  | "communityCards___button___contentful_id"
  | "communityCards___button___id"
  | "communityCards___button___node_locale"
  | "communityCards___button___buttonText"
  | "communityCards___button___buttonLink"
  | "communityCards___button___image_cards"
  | "communityCards___button___image_cards___contentful_id"
  | "communityCards___button___image_cards___id"
  | "communityCards___button___image_cards___node_locale"
  | "communityCards___button___image_cards___title"
  | "communityCards___button___image_cards___community_page"
  | "communityCards___button___image_cards___spaceId"
  | "communityCards___button___image_cards___createdAt"
  | "communityCards___button___image_cards___updatedAt"
  | "communityCards___button___image_cards___childrenContentfulImageCardsTextTextNode"
  | "communityCards___button___image_cards___children"
  | "communityCards___button___spaceId"
  | "communityCards___button___createdAt"
  | "communityCards___button___updatedAt"
  | "communityCards___button___sys___type"
  | "communityCards___button___sys___revision"
  | "communityCards___button___parent___id"
  | "communityCards___button___parent___children"
  | "communityCards___button___children"
  | "communityCards___button___children___id"
  | "communityCards___button___children___children"
  | "communityCards___button___internal___content"
  | "communityCards___button___internal___contentDigest"
  | "communityCards___button___internal___description"
  | "communityCards___button___internal___fieldOwners"
  | "communityCards___button___internal___ignoreType"
  | "communityCards___button___internal___mediaType"
  | "communityCards___button___internal___owner"
  | "communityCards___button___internal___type"
  | "communityCards___community_page"
  | "communityCards___community_page___contentful_id"
  | "communityCards___community_page___id"
  | "communityCards___community_page___node_locale"
  | "communityCards___community_page___slug"
  | "communityCards___community_page___communityBanner___contentful_id"
  | "communityCards___community_page___communityBanner___id"
  | "communityCards___community_page___communityBanner___node_locale"
  | "communityCards___community_page___communityBanner___heading"
  | "communityCards___community_page___communityBanner___subHeader"
  | "communityCards___community_page___communityBanner___community_page"
  | "communityCards___community_page___communityBanner___spaceId"
  | "communityCards___community_page___communityBanner___createdAt"
  | "communityCards___community_page___communityBanner___updatedAt"
  | "communityCards___community_page___communityBanner___services_page"
  | "communityCards___community_page___communityBanner___home_page"
  | "communityCards___community_page___communityBanner___contact_page"
  | "communityCards___community_page___communityBanner___about_us_page"
  | "communityCards___community_page___communityBanner___children"
  | "communityCards___community_page___newsCards"
  | "communityCards___community_page___newsCards___contentful_id"
  | "communityCards___community_page___newsCards___id"
  | "communityCards___community_page___newsCards___node_locale"
  | "communityCards___community_page___newsCards___title"
  | "communityCards___community_page___newsCards___community_page"
  | "communityCards___community_page___newsCards___spaceId"
  | "communityCards___community_page___newsCards___createdAt"
  | "communityCards___community_page___newsCards___updatedAt"
  | "communityCards___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "communityCards___community_page___newsCards___children"
  | "communityCards___community_page___blogCards"
  | "communityCards___community_page___blogCards___contentful_id"
  | "communityCards___community_page___blogCards___id"
  | "communityCards___community_page___blogCards___node_locale"
  | "communityCards___community_page___blogCards___title"
  | "communityCards___community_page___blogCards___community_page"
  | "communityCards___community_page___blogCards___spaceId"
  | "communityCards___community_page___blogCards___createdAt"
  | "communityCards___community_page___blogCards___updatedAt"
  | "communityCards___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "communityCards___community_page___blogCards___children"
  | "communityCards___community_page___communityCards"
  | "communityCards___community_page___communityCards___contentful_id"
  | "communityCards___community_page___communityCards___id"
  | "communityCards___community_page___communityCards___node_locale"
  | "communityCards___community_page___communityCards___title"
  | "communityCards___community_page___communityCards___community_page"
  | "communityCards___community_page___communityCards___spaceId"
  | "communityCards___community_page___communityCards___createdAt"
  | "communityCards___community_page___communityCards___updatedAt"
  | "communityCards___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "communityCards___community_page___communityCards___children"
  | "communityCards___community_page___spaceId"
  | "communityCards___community_page___createdAt"
  | "communityCards___community_page___updatedAt"
  | "communityCards___community_page___sys___type"
  | "communityCards___community_page___sys___revision"
  | "communityCards___community_page___parent___id"
  | "communityCards___community_page___parent___children"
  | "communityCards___community_page___children"
  | "communityCards___community_page___children___id"
  | "communityCards___community_page___children___children"
  | "communityCards___community_page___internal___content"
  | "communityCards___community_page___internal___contentDigest"
  | "communityCards___community_page___internal___description"
  | "communityCards___community_page___internal___fieldOwners"
  | "communityCards___community_page___internal___ignoreType"
  | "communityCards___community_page___internal___mediaType"
  | "communityCards___community_page___internal___owner"
  | "communityCards___community_page___internal___type"
  | "communityCards___text___id"
  | "communityCards___text___parent___id"
  | "communityCards___text___parent___children"
  | "communityCards___text___children"
  | "communityCards___text___children___id"
  | "communityCards___text___children___children"
  | "communityCards___text___internal___content"
  | "communityCards___text___internal___contentDigest"
  | "communityCards___text___internal___description"
  | "communityCards___text___internal___fieldOwners"
  | "communityCards___text___internal___ignoreType"
  | "communityCards___text___internal___mediaType"
  | "communityCards___text___internal___owner"
  | "communityCards___text___internal___type"
  | "communityCards___text___text"
  | "communityCards___text___sys___type"
  | "communityCards___spaceId"
  | "communityCards___createdAt"
  | "communityCards___updatedAt"
  | "communityCards___sys___type"
  | "communityCards___sys___revision"
  | "communityCards___childrenContentfulImageCardsTextTextNode"
  | "communityCards___childrenContentfulImageCardsTextTextNode___id"
  | "communityCards___childrenContentfulImageCardsTextTextNode___parent___id"
  | "communityCards___childrenContentfulImageCardsTextTextNode___parent___children"
  | "communityCards___childrenContentfulImageCardsTextTextNode___children"
  | "communityCards___childrenContentfulImageCardsTextTextNode___children___id"
  | "communityCards___childrenContentfulImageCardsTextTextNode___children___children"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___content"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___contentDigest"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___description"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___ignoreType"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___mediaType"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___owner"
  | "communityCards___childrenContentfulImageCardsTextTextNode___internal___type"
  | "communityCards___childrenContentfulImageCardsTextTextNode___text"
  | "communityCards___childrenContentfulImageCardsTextTextNode___sys___type"
  | "communityCards___childContentfulImageCardsTextTextNode___id"
  | "communityCards___childContentfulImageCardsTextTextNode___parent___id"
  | "communityCards___childContentfulImageCardsTextTextNode___parent___children"
  | "communityCards___childContentfulImageCardsTextTextNode___children"
  | "communityCards___childContentfulImageCardsTextTextNode___children___id"
  | "communityCards___childContentfulImageCardsTextTextNode___children___children"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___content"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___contentDigest"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___description"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___ignoreType"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___mediaType"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___owner"
  | "communityCards___childContentfulImageCardsTextTextNode___internal___type"
  | "communityCards___childContentfulImageCardsTextTextNode___text"
  | "communityCards___childContentfulImageCardsTextTextNode___sys___type"
  | "communityCards___parent___id"
  | "communityCards___parent___parent___id"
  | "communityCards___parent___parent___children"
  | "communityCards___parent___children"
  | "communityCards___parent___children___id"
  | "communityCards___parent___children___children"
  | "communityCards___parent___internal___content"
  | "communityCards___parent___internal___contentDigest"
  | "communityCards___parent___internal___description"
  | "communityCards___parent___internal___fieldOwners"
  | "communityCards___parent___internal___ignoreType"
  | "communityCards___parent___internal___mediaType"
  | "communityCards___parent___internal___owner"
  | "communityCards___parent___internal___type"
  | "communityCards___children"
  | "communityCards___children___id"
  | "communityCards___children___parent___id"
  | "communityCards___children___parent___children"
  | "communityCards___children___children"
  | "communityCards___children___children___id"
  | "communityCards___children___children___children"
  | "communityCards___children___internal___content"
  | "communityCards___children___internal___contentDigest"
  | "communityCards___children___internal___description"
  | "communityCards___children___internal___fieldOwners"
  | "communityCards___children___internal___ignoreType"
  | "communityCards___children___internal___mediaType"
  | "communityCards___children___internal___owner"
  | "communityCards___children___internal___type"
  | "communityCards___internal___content"
  | "communityCards___internal___contentDigest"
  | "communityCards___internal___description"
  | "communityCards___internal___fieldOwners"
  | "communityCards___internal___ignoreType"
  | "communityCards___internal___mediaType"
  | "communityCards___internal___owner"
  | "communityCards___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulCommunityPageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulCommunityPageEdge>
  nodes: Array<ContentfulCommunityPage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulCommunityPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCommunityPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulServicesPageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulServicesPageEdge>
  nodes: Array<ContentfulServicesPage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulServicesPageGroupConnection>
}

export type ContentfulServicesPageConnectionDistinctArgs = {
  field: ContentfulServicesPageFieldsEnum
}

export type ContentfulServicesPageConnectionMaxArgs = {
  field: ContentfulServicesPageFieldsEnum
}

export type ContentfulServicesPageConnectionMinArgs = {
  field: ContentfulServicesPageFieldsEnum
}

export type ContentfulServicesPageConnectionSumArgs = {
  field: ContentfulServicesPageFieldsEnum
}

export type ContentfulServicesPageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulServicesPageFieldsEnum
}

export type ContentfulServicesPageEdge = {
  next?: Maybe<ContentfulServicesPage>
  node: ContentfulServicesPage
  previous?: Maybe<ContentfulServicesPage>
}

export type ContentfulServicesPageFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "slug"
  | "servicesBanner___contentful_id"
  | "servicesBanner___id"
  | "servicesBanner___node_locale"
  | "servicesBanner___heading"
  | "servicesBanner___subHeader"
  | "servicesBanner___backgroundImage___contentful_id"
  | "servicesBanner___backgroundImage___id"
  | "servicesBanner___backgroundImage___spaceId"
  | "servicesBanner___backgroundImage___createdAt"
  | "servicesBanner___backgroundImage___updatedAt"
  | "servicesBanner___backgroundImage___file___url"
  | "servicesBanner___backgroundImage___file___fileName"
  | "servicesBanner___backgroundImage___file___contentType"
  | "servicesBanner___backgroundImage___title"
  | "servicesBanner___backgroundImage___description"
  | "servicesBanner___backgroundImage___node_locale"
  | "servicesBanner___backgroundImage___sys___type"
  | "servicesBanner___backgroundImage___sys___revision"
  | "servicesBanner___backgroundImage___fixed___base64"
  | "servicesBanner___backgroundImage___fixed___tracedSVG"
  | "servicesBanner___backgroundImage___fixed___aspectRatio"
  | "servicesBanner___backgroundImage___fixed___width"
  | "servicesBanner___backgroundImage___fixed___height"
  | "servicesBanner___backgroundImage___fixed___src"
  | "servicesBanner___backgroundImage___fixed___srcSet"
  | "servicesBanner___backgroundImage___fixed___srcWebp"
  | "servicesBanner___backgroundImage___fixed___srcSetWebp"
  | "servicesBanner___backgroundImage___fluid___base64"
  | "servicesBanner___backgroundImage___fluid___tracedSVG"
  | "servicesBanner___backgroundImage___fluid___aspectRatio"
  | "servicesBanner___backgroundImage___fluid___src"
  | "servicesBanner___backgroundImage___fluid___srcSet"
  | "servicesBanner___backgroundImage___fluid___srcWebp"
  | "servicesBanner___backgroundImage___fluid___srcSetWebp"
  | "servicesBanner___backgroundImage___fluid___sizes"
  | "servicesBanner___backgroundImage___gatsbyImageData"
  | "servicesBanner___backgroundImage___resize___base64"
  | "servicesBanner___backgroundImage___resize___tracedSVG"
  | "servicesBanner___backgroundImage___resize___src"
  | "servicesBanner___backgroundImage___resize___width"
  | "servicesBanner___backgroundImage___resize___height"
  | "servicesBanner___backgroundImage___resize___aspectRatio"
  | "servicesBanner___backgroundImage___parent___id"
  | "servicesBanner___backgroundImage___parent___children"
  | "servicesBanner___backgroundImage___children"
  | "servicesBanner___backgroundImage___children___id"
  | "servicesBanner___backgroundImage___children___children"
  | "servicesBanner___backgroundImage___internal___content"
  | "servicesBanner___backgroundImage___internal___contentDigest"
  | "servicesBanner___backgroundImage___internal___description"
  | "servicesBanner___backgroundImage___internal___fieldOwners"
  | "servicesBanner___backgroundImage___internal___ignoreType"
  | "servicesBanner___backgroundImage___internal___mediaType"
  | "servicesBanner___backgroundImage___internal___owner"
  | "servicesBanner___backgroundImage___internal___type"
  | "servicesBanner___community_page"
  | "servicesBanner___community_page___contentful_id"
  | "servicesBanner___community_page___id"
  | "servicesBanner___community_page___node_locale"
  | "servicesBanner___community_page___slug"
  | "servicesBanner___community_page___communityBanner___contentful_id"
  | "servicesBanner___community_page___communityBanner___id"
  | "servicesBanner___community_page___communityBanner___node_locale"
  | "servicesBanner___community_page___communityBanner___heading"
  | "servicesBanner___community_page___communityBanner___subHeader"
  | "servicesBanner___community_page___communityBanner___community_page"
  | "servicesBanner___community_page___communityBanner___spaceId"
  | "servicesBanner___community_page___communityBanner___createdAt"
  | "servicesBanner___community_page___communityBanner___updatedAt"
  | "servicesBanner___community_page___communityBanner___services_page"
  | "servicesBanner___community_page___communityBanner___home_page"
  | "servicesBanner___community_page___communityBanner___contact_page"
  | "servicesBanner___community_page___communityBanner___about_us_page"
  | "servicesBanner___community_page___communityBanner___children"
  | "servicesBanner___community_page___newsCards"
  | "servicesBanner___community_page___newsCards___contentful_id"
  | "servicesBanner___community_page___newsCards___id"
  | "servicesBanner___community_page___newsCards___node_locale"
  | "servicesBanner___community_page___newsCards___title"
  | "servicesBanner___community_page___newsCards___community_page"
  | "servicesBanner___community_page___newsCards___spaceId"
  | "servicesBanner___community_page___newsCards___createdAt"
  | "servicesBanner___community_page___newsCards___updatedAt"
  | "servicesBanner___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "servicesBanner___community_page___newsCards___children"
  | "servicesBanner___community_page___blogCards"
  | "servicesBanner___community_page___blogCards___contentful_id"
  | "servicesBanner___community_page___blogCards___id"
  | "servicesBanner___community_page___blogCards___node_locale"
  | "servicesBanner___community_page___blogCards___title"
  | "servicesBanner___community_page___blogCards___community_page"
  | "servicesBanner___community_page___blogCards___spaceId"
  | "servicesBanner___community_page___blogCards___createdAt"
  | "servicesBanner___community_page___blogCards___updatedAt"
  | "servicesBanner___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "servicesBanner___community_page___blogCards___children"
  | "servicesBanner___community_page___communityCards"
  | "servicesBanner___community_page___communityCards___contentful_id"
  | "servicesBanner___community_page___communityCards___id"
  | "servicesBanner___community_page___communityCards___node_locale"
  | "servicesBanner___community_page___communityCards___title"
  | "servicesBanner___community_page___communityCards___community_page"
  | "servicesBanner___community_page___communityCards___spaceId"
  | "servicesBanner___community_page___communityCards___createdAt"
  | "servicesBanner___community_page___communityCards___updatedAt"
  | "servicesBanner___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "servicesBanner___community_page___communityCards___children"
  | "servicesBanner___community_page___spaceId"
  | "servicesBanner___community_page___createdAt"
  | "servicesBanner___community_page___updatedAt"
  | "servicesBanner___community_page___sys___type"
  | "servicesBanner___community_page___sys___revision"
  | "servicesBanner___community_page___parent___id"
  | "servicesBanner___community_page___parent___children"
  | "servicesBanner___community_page___children"
  | "servicesBanner___community_page___children___id"
  | "servicesBanner___community_page___children___children"
  | "servicesBanner___community_page___internal___content"
  | "servicesBanner___community_page___internal___contentDigest"
  | "servicesBanner___community_page___internal___description"
  | "servicesBanner___community_page___internal___fieldOwners"
  | "servicesBanner___community_page___internal___ignoreType"
  | "servicesBanner___community_page___internal___mediaType"
  | "servicesBanner___community_page___internal___owner"
  | "servicesBanner___community_page___internal___type"
  | "servicesBanner___spaceId"
  | "servicesBanner___createdAt"
  | "servicesBanner___updatedAt"
  | "servicesBanner___sys___type"
  | "servicesBanner___sys___revision"
  | "servicesBanner___services_page"
  | "servicesBanner___services_page___contentful_id"
  | "servicesBanner___services_page___id"
  | "servicesBanner___services_page___node_locale"
  | "servicesBanner___services_page___slug"
  | "servicesBanner___services_page___servicesBanner___contentful_id"
  | "servicesBanner___services_page___servicesBanner___id"
  | "servicesBanner___services_page___servicesBanner___node_locale"
  | "servicesBanner___services_page___servicesBanner___heading"
  | "servicesBanner___services_page___servicesBanner___subHeader"
  | "servicesBanner___services_page___servicesBanner___community_page"
  | "servicesBanner___services_page___servicesBanner___spaceId"
  | "servicesBanner___services_page___servicesBanner___createdAt"
  | "servicesBanner___services_page___servicesBanner___updatedAt"
  | "servicesBanner___services_page___servicesBanner___services_page"
  | "servicesBanner___services_page___servicesBanner___home_page"
  | "servicesBanner___services_page___servicesBanner___contact_page"
  | "servicesBanner___services_page___servicesBanner___about_us_page"
  | "servicesBanner___services_page___servicesBanner___children"
  | "servicesBanner___services_page___serviceCards"
  | "servicesBanner___services_page___serviceCards___contentful_id"
  | "servicesBanner___services_page___serviceCards___id"
  | "servicesBanner___services_page___serviceCards___node_locale"
  | "servicesBanner___services_page___serviceCards___title"
  | "servicesBanner___services_page___serviceCards___internalLink"
  | "servicesBanner___services_page___serviceCards___stack"
  | "servicesBanner___services_page___serviceCards___spaceId"
  | "servicesBanner___services_page___serviceCards___createdAt"
  | "servicesBanner___services_page___serviceCards___updatedAt"
  | "servicesBanner___services_page___serviceCards___services_page"
  | "servicesBanner___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "servicesBanner___services_page___serviceCards___children"
  | "servicesBanner___services_page___spaceId"
  | "servicesBanner___services_page___createdAt"
  | "servicesBanner___services_page___updatedAt"
  | "servicesBanner___services_page___sys___type"
  | "servicesBanner___services_page___sys___revision"
  | "servicesBanner___services_page___parent___id"
  | "servicesBanner___services_page___parent___children"
  | "servicesBanner___services_page___children"
  | "servicesBanner___services_page___children___id"
  | "servicesBanner___services_page___children___children"
  | "servicesBanner___services_page___internal___content"
  | "servicesBanner___services_page___internal___contentDigest"
  | "servicesBanner___services_page___internal___description"
  | "servicesBanner___services_page___internal___fieldOwners"
  | "servicesBanner___services_page___internal___ignoreType"
  | "servicesBanner___services_page___internal___mediaType"
  | "servicesBanner___services_page___internal___owner"
  | "servicesBanner___services_page___internal___type"
  | "servicesBanner___home_page"
  | "servicesBanner___home_page___contentful_id"
  | "servicesBanner___home_page___id"
  | "servicesBanner___home_page___node_locale"
  | "servicesBanner___home_page___slug"
  | "servicesBanner___home_page___homeBanner___contentful_id"
  | "servicesBanner___home_page___homeBanner___id"
  | "servicesBanner___home_page___homeBanner___node_locale"
  | "servicesBanner___home_page___homeBanner___heading"
  | "servicesBanner___home_page___homeBanner___subHeader"
  | "servicesBanner___home_page___homeBanner___community_page"
  | "servicesBanner___home_page___homeBanner___spaceId"
  | "servicesBanner___home_page___homeBanner___createdAt"
  | "servicesBanner___home_page___homeBanner___updatedAt"
  | "servicesBanner___home_page___homeBanner___services_page"
  | "servicesBanner___home_page___homeBanner___home_page"
  | "servicesBanner___home_page___homeBanner___contact_page"
  | "servicesBanner___home_page___homeBanner___about_us_page"
  | "servicesBanner___home_page___homeBanner___children"
  | "servicesBanner___home_page___belowHero___contentful_id"
  | "servicesBanner___home_page___belowHero___id"
  | "servicesBanner___home_page___belowHero___node_locale"
  | "servicesBanner___home_page___belowHero___about_us_page"
  | "servicesBanner___home_page___belowHero___spaceId"
  | "servicesBanner___home_page___belowHero___createdAt"
  | "servicesBanner___home_page___belowHero___updatedAt"
  | "servicesBanner___home_page___belowHero___home_page"
  | "servicesBanner___home_page___belowHero___childrenContentfulTextAndImageTextTextNode"
  | "servicesBanner___home_page___belowHero___children"
  | "servicesBanner___home_page___ctaStack___contentful_id"
  | "servicesBanner___home_page___ctaStack___id"
  | "servicesBanner___home_page___ctaStack___node_locale"
  | "servicesBanner___home_page___ctaStack___cards"
  | "servicesBanner___home_page___ctaStack___home_page"
  | "servicesBanner___home_page___ctaStack___spaceId"
  | "servicesBanner___home_page___ctaStack___createdAt"
  | "servicesBanner___home_page___ctaStack___updatedAt"
  | "servicesBanner___home_page___ctaStack___childrenContentfulStackTextTextNode"
  | "servicesBanner___home_page___ctaStack___childrenContentfulStackText2TextNode"
  | "servicesBanner___home_page___ctaStack___children"
  | "servicesBanner___home_page___howWeHelpStack___contentful_id"
  | "servicesBanner___home_page___howWeHelpStack___id"
  | "servicesBanner___home_page___howWeHelpStack___node_locale"
  | "servicesBanner___home_page___howWeHelpStack___cards"
  | "servicesBanner___home_page___howWeHelpStack___home_page"
  | "servicesBanner___home_page___howWeHelpStack___spaceId"
  | "servicesBanner___home_page___howWeHelpStack___createdAt"
  | "servicesBanner___home_page___howWeHelpStack___updatedAt"
  | "servicesBanner___home_page___howWeHelpStack___childrenContentfulStackTextTextNode"
  | "servicesBanner___home_page___howWeHelpStack___childrenContentfulStackText2TextNode"
  | "servicesBanner___home_page___howWeHelpStack___children"
  | "servicesBanner___home_page___testimonialSlides"
  | "servicesBanner___home_page___testimonialSlides___contentful_id"
  | "servicesBanner___home_page___testimonialSlides___id"
  | "servicesBanner___home_page___testimonialSlides___node_locale"
  | "servicesBanner___home_page___testimonialSlides___name"
  | "servicesBanner___home_page___testimonialSlides___jobTitle"
  | "servicesBanner___home_page___testimonialSlides___companyName"
  | "servicesBanner___home_page___testimonialSlides___home_page"
  | "servicesBanner___home_page___testimonialSlides___spaceId"
  | "servicesBanner___home_page___testimonialSlides___createdAt"
  | "servicesBanner___home_page___testimonialSlides___updatedAt"
  | "servicesBanner___home_page___testimonialSlides___childrenContentfulTestimonialSlideTestimonyTextNode"
  | "servicesBanner___home_page___testimonialSlides___children"
  | "servicesBanner___home_page___carouselImages___contentful_id"
  | "servicesBanner___home_page___carouselImages___id"
  | "servicesBanner___home_page___carouselImages___node_locale"
  | "servicesBanner___home_page___carouselImages___images"
  | "servicesBanner___home_page___carouselImages___home_page"
  | "servicesBanner___home_page___carouselImages___about_us_page"
  | "servicesBanner___home_page___carouselImages___spaceId"
  | "servicesBanner___home_page___carouselImages___createdAt"
  | "servicesBanner___home_page___carouselImages___updatedAt"
  | "servicesBanner___home_page___carouselImages___children"
  | "servicesBanner___home_page___spaceId"
  | "servicesBanner___home_page___createdAt"
  | "servicesBanner___home_page___updatedAt"
  | "servicesBanner___home_page___sys___type"
  | "servicesBanner___home_page___sys___revision"
  | "servicesBanner___home_page___parent___id"
  | "servicesBanner___home_page___parent___children"
  | "servicesBanner___home_page___children"
  | "servicesBanner___home_page___children___id"
  | "servicesBanner___home_page___children___children"
  | "servicesBanner___home_page___internal___content"
  | "servicesBanner___home_page___internal___contentDigest"
  | "servicesBanner___home_page___internal___description"
  | "servicesBanner___home_page___internal___fieldOwners"
  | "servicesBanner___home_page___internal___ignoreType"
  | "servicesBanner___home_page___internal___mediaType"
  | "servicesBanner___home_page___internal___owner"
  | "servicesBanner___home_page___internal___type"
  | "servicesBanner___contact_page"
  | "servicesBanner___contact_page___contentful_id"
  | "servicesBanner___contact_page___id"
  | "servicesBanner___contact_page___node_locale"
  | "servicesBanner___contact_page___slug"
  | "servicesBanner___contact_page___contactBanner___contentful_id"
  | "servicesBanner___contact_page___contactBanner___id"
  | "servicesBanner___contact_page___contactBanner___node_locale"
  | "servicesBanner___contact_page___contactBanner___heading"
  | "servicesBanner___contact_page___contactBanner___subHeader"
  | "servicesBanner___contact_page___contactBanner___community_page"
  | "servicesBanner___contact_page___contactBanner___spaceId"
  | "servicesBanner___contact_page___contactBanner___createdAt"
  | "servicesBanner___contact_page___contactBanner___updatedAt"
  | "servicesBanner___contact_page___contactBanner___services_page"
  | "servicesBanner___contact_page___contactBanner___home_page"
  | "servicesBanner___contact_page___contactBanner___contact_page"
  | "servicesBanner___contact_page___contactBanner___about_us_page"
  | "servicesBanner___contact_page___contactBanner___children"
  | "servicesBanner___contact_page___spaceId"
  | "servicesBanner___contact_page___createdAt"
  | "servicesBanner___contact_page___updatedAt"
  | "servicesBanner___contact_page___sys___type"
  | "servicesBanner___contact_page___sys___revision"
  | "servicesBanner___contact_page___parent___id"
  | "servicesBanner___contact_page___parent___children"
  | "servicesBanner___contact_page___children"
  | "servicesBanner___contact_page___children___id"
  | "servicesBanner___contact_page___children___children"
  | "servicesBanner___contact_page___internal___content"
  | "servicesBanner___contact_page___internal___contentDigest"
  | "servicesBanner___contact_page___internal___description"
  | "servicesBanner___contact_page___internal___fieldOwners"
  | "servicesBanner___contact_page___internal___ignoreType"
  | "servicesBanner___contact_page___internal___mediaType"
  | "servicesBanner___contact_page___internal___owner"
  | "servicesBanner___contact_page___internal___type"
  | "servicesBanner___about_us_page"
  | "servicesBanner___about_us_page___contentful_id"
  | "servicesBanner___about_us_page___id"
  | "servicesBanner___about_us_page___node_locale"
  | "servicesBanner___about_us_page___slug"
  | "servicesBanner___about_us_page___aboutUsBanner___contentful_id"
  | "servicesBanner___about_us_page___aboutUsBanner___id"
  | "servicesBanner___about_us_page___aboutUsBanner___node_locale"
  | "servicesBanner___about_us_page___aboutUsBanner___heading"
  | "servicesBanner___about_us_page___aboutUsBanner___subHeader"
  | "servicesBanner___about_us_page___aboutUsBanner___community_page"
  | "servicesBanner___about_us_page___aboutUsBanner___spaceId"
  | "servicesBanner___about_us_page___aboutUsBanner___createdAt"
  | "servicesBanner___about_us_page___aboutUsBanner___updatedAt"
  | "servicesBanner___about_us_page___aboutUsBanner___services_page"
  | "servicesBanner___about_us_page___aboutUsBanner___home_page"
  | "servicesBanner___about_us_page___aboutUsBanner___contact_page"
  | "servicesBanner___about_us_page___aboutUsBanner___about_us_page"
  | "servicesBanner___about_us_page___aboutUsBanner___children"
  | "servicesBanner___about_us_page___whatWeDo___contentful_id"
  | "servicesBanner___about_us_page___whatWeDo___id"
  | "servicesBanner___about_us_page___whatWeDo___node_locale"
  | "servicesBanner___about_us_page___whatWeDo___about_us_page"
  | "servicesBanner___about_us_page___whatWeDo___spaceId"
  | "servicesBanner___about_us_page___whatWeDo___createdAt"
  | "servicesBanner___about_us_page___whatWeDo___updatedAt"
  | "servicesBanner___about_us_page___whatWeDo___home_page"
  | "servicesBanner___about_us_page___whatWeDo___childrenContentfulTextAndImageTextTextNode"
  | "servicesBanner___about_us_page___whatWeDo___children"
  | "servicesBanner___about_us_page___carouselImages___contentful_id"
  | "servicesBanner___about_us_page___carouselImages___id"
  | "servicesBanner___about_us_page___carouselImages___node_locale"
  | "servicesBanner___about_us_page___carouselImages___images"
  | "servicesBanner___about_us_page___carouselImages___home_page"
  | "servicesBanner___about_us_page___carouselImages___about_us_page"
  | "servicesBanner___about_us_page___carouselImages___spaceId"
  | "servicesBanner___about_us_page___carouselImages___createdAt"
  | "servicesBanner___about_us_page___carouselImages___updatedAt"
  | "servicesBanner___about_us_page___carouselImages___children"
  | "servicesBanner___about_us_page___ourTeam"
  | "servicesBanner___about_us_page___ourTeam___contentful_id"
  | "servicesBanner___about_us_page___ourTeam___id"
  | "servicesBanner___about_us_page___ourTeam___node_locale"
  | "servicesBanner___about_us_page___ourTeam___name"
  | "servicesBanner___about_us_page___ourTeam___jobTitle"
  | "servicesBanner___about_us_page___ourTeam___cardSize"
  | "servicesBanner___about_us_page___ourTeam___about_us_page"
  | "servicesBanner___about_us_page___ourTeam___spaceId"
  | "servicesBanner___about_us_page___ourTeam___createdAt"
  | "servicesBanner___about_us_page___ourTeam___updatedAt"
  | "servicesBanner___about_us_page___ourTeam___childrenContentfulEmployeeCardDescriptionTextNode"
  | "servicesBanner___about_us_page___ourTeam___children"
  | "servicesBanner___about_us_page___spaceId"
  | "servicesBanner___about_us_page___createdAt"
  | "servicesBanner___about_us_page___updatedAt"
  | "servicesBanner___about_us_page___sys___type"
  | "servicesBanner___about_us_page___sys___revision"
  | "servicesBanner___about_us_page___parent___id"
  | "servicesBanner___about_us_page___parent___children"
  | "servicesBanner___about_us_page___children"
  | "servicesBanner___about_us_page___children___id"
  | "servicesBanner___about_us_page___children___children"
  | "servicesBanner___about_us_page___internal___content"
  | "servicesBanner___about_us_page___internal___contentDigest"
  | "servicesBanner___about_us_page___internal___description"
  | "servicesBanner___about_us_page___internal___fieldOwners"
  | "servicesBanner___about_us_page___internal___ignoreType"
  | "servicesBanner___about_us_page___internal___mediaType"
  | "servicesBanner___about_us_page___internal___owner"
  | "servicesBanner___about_us_page___internal___type"
  | "servicesBanner___parent___id"
  | "servicesBanner___parent___parent___id"
  | "servicesBanner___parent___parent___children"
  | "servicesBanner___parent___children"
  | "servicesBanner___parent___children___id"
  | "servicesBanner___parent___children___children"
  | "servicesBanner___parent___internal___content"
  | "servicesBanner___parent___internal___contentDigest"
  | "servicesBanner___parent___internal___description"
  | "servicesBanner___parent___internal___fieldOwners"
  | "servicesBanner___parent___internal___ignoreType"
  | "servicesBanner___parent___internal___mediaType"
  | "servicesBanner___parent___internal___owner"
  | "servicesBanner___parent___internal___type"
  | "servicesBanner___children"
  | "servicesBanner___children___id"
  | "servicesBanner___children___parent___id"
  | "servicesBanner___children___parent___children"
  | "servicesBanner___children___children"
  | "servicesBanner___children___children___id"
  | "servicesBanner___children___children___children"
  | "servicesBanner___children___internal___content"
  | "servicesBanner___children___internal___contentDigest"
  | "servicesBanner___children___internal___description"
  | "servicesBanner___children___internal___fieldOwners"
  | "servicesBanner___children___internal___ignoreType"
  | "servicesBanner___children___internal___mediaType"
  | "servicesBanner___children___internal___owner"
  | "servicesBanner___children___internal___type"
  | "servicesBanner___internal___content"
  | "servicesBanner___internal___contentDigest"
  | "servicesBanner___internal___description"
  | "servicesBanner___internal___fieldOwners"
  | "servicesBanner___internal___ignoreType"
  | "servicesBanner___internal___mediaType"
  | "servicesBanner___internal___owner"
  | "servicesBanner___internal___type"
  | "serviceCards"
  | "serviceCards___contentful_id"
  | "serviceCards___id"
  | "serviceCards___node_locale"
  | "serviceCards___title"
  | "serviceCards___internalLink"
  | "serviceCards___icon___contentful_id"
  | "serviceCards___icon___id"
  | "serviceCards___icon___spaceId"
  | "serviceCards___icon___createdAt"
  | "serviceCards___icon___updatedAt"
  | "serviceCards___icon___file___url"
  | "serviceCards___icon___file___fileName"
  | "serviceCards___icon___file___contentType"
  | "serviceCards___icon___title"
  | "serviceCards___icon___description"
  | "serviceCards___icon___node_locale"
  | "serviceCards___icon___sys___type"
  | "serviceCards___icon___sys___revision"
  | "serviceCards___icon___fixed___base64"
  | "serviceCards___icon___fixed___tracedSVG"
  | "serviceCards___icon___fixed___aspectRatio"
  | "serviceCards___icon___fixed___width"
  | "serviceCards___icon___fixed___height"
  | "serviceCards___icon___fixed___src"
  | "serviceCards___icon___fixed___srcSet"
  | "serviceCards___icon___fixed___srcWebp"
  | "serviceCards___icon___fixed___srcSetWebp"
  | "serviceCards___icon___fluid___base64"
  | "serviceCards___icon___fluid___tracedSVG"
  | "serviceCards___icon___fluid___aspectRatio"
  | "serviceCards___icon___fluid___src"
  | "serviceCards___icon___fluid___srcSet"
  | "serviceCards___icon___fluid___srcWebp"
  | "serviceCards___icon___fluid___srcSetWebp"
  | "serviceCards___icon___fluid___sizes"
  | "serviceCards___icon___gatsbyImageData"
  | "serviceCards___icon___resize___base64"
  | "serviceCards___icon___resize___tracedSVG"
  | "serviceCards___icon___resize___src"
  | "serviceCards___icon___resize___width"
  | "serviceCards___icon___resize___height"
  | "serviceCards___icon___resize___aspectRatio"
  | "serviceCards___icon___parent___id"
  | "serviceCards___icon___parent___children"
  | "serviceCards___icon___children"
  | "serviceCards___icon___children___id"
  | "serviceCards___icon___children___children"
  | "serviceCards___icon___internal___content"
  | "serviceCards___icon___internal___contentDigest"
  | "serviceCards___icon___internal___description"
  | "serviceCards___icon___internal___fieldOwners"
  | "serviceCards___icon___internal___ignoreType"
  | "serviceCards___icon___internal___mediaType"
  | "serviceCards___icon___internal___owner"
  | "serviceCards___icon___internal___type"
  | "serviceCards___stack"
  | "serviceCards___stack___contentful_id"
  | "serviceCards___stack___id"
  | "serviceCards___stack___node_locale"
  | "serviceCards___stack___cards"
  | "serviceCards___stack___cards___contentful_id"
  | "serviceCards___stack___cards___id"
  | "serviceCards___stack___cards___node_locale"
  | "serviceCards___stack___cards___title"
  | "serviceCards___stack___cards___internalLink"
  | "serviceCards___stack___cards___stack"
  | "serviceCards___stack___cards___spaceId"
  | "serviceCards___stack___cards___createdAt"
  | "serviceCards___stack___cards___updatedAt"
  | "serviceCards___stack___cards___services_page"
  | "serviceCards___stack___cards___childrenContentfulGeneralCardDescriptionTextNode"
  | "serviceCards___stack___cards___children"
  | "serviceCards___stack___home_page"
  | "serviceCards___stack___home_page___contentful_id"
  | "serviceCards___stack___home_page___id"
  | "serviceCards___stack___home_page___node_locale"
  | "serviceCards___stack___home_page___slug"
  | "serviceCards___stack___home_page___testimonialSlides"
  | "serviceCards___stack___home_page___spaceId"
  | "serviceCards___stack___home_page___createdAt"
  | "serviceCards___stack___home_page___updatedAt"
  | "serviceCards___stack___home_page___children"
  | "serviceCards___stack___text___id"
  | "serviceCards___stack___text___children"
  | "serviceCards___stack___text___text"
  | "serviceCards___stack___text2___id"
  | "serviceCards___stack___text2___children"
  | "serviceCards___stack___text2___text2"
  | "serviceCards___stack___spaceId"
  | "serviceCards___stack___createdAt"
  | "serviceCards___stack___updatedAt"
  | "serviceCards___stack___sys___type"
  | "serviceCards___stack___sys___revision"
  | "serviceCards___stack___childrenContentfulStackTextTextNode"
  | "serviceCards___stack___childrenContentfulStackTextTextNode___id"
  | "serviceCards___stack___childrenContentfulStackTextTextNode___children"
  | "serviceCards___stack___childrenContentfulStackTextTextNode___text"
  | "serviceCards___stack___childContentfulStackTextTextNode___id"
  | "serviceCards___stack___childContentfulStackTextTextNode___children"
  | "serviceCards___stack___childContentfulStackTextTextNode___text"
  | "serviceCards___stack___childrenContentfulStackText2TextNode"
  | "serviceCards___stack___childrenContentfulStackText2TextNode___id"
  | "serviceCards___stack___childrenContentfulStackText2TextNode___children"
  | "serviceCards___stack___childrenContentfulStackText2TextNode___text2"
  | "serviceCards___stack___childContentfulStackText2TextNode___id"
  | "serviceCards___stack___childContentfulStackText2TextNode___children"
  | "serviceCards___stack___childContentfulStackText2TextNode___text2"
  | "serviceCards___stack___parent___id"
  | "serviceCards___stack___parent___children"
  | "serviceCards___stack___children"
  | "serviceCards___stack___children___id"
  | "serviceCards___stack___children___children"
  | "serviceCards___stack___internal___content"
  | "serviceCards___stack___internal___contentDigest"
  | "serviceCards___stack___internal___description"
  | "serviceCards___stack___internal___fieldOwners"
  | "serviceCards___stack___internal___ignoreType"
  | "serviceCards___stack___internal___mediaType"
  | "serviceCards___stack___internal___owner"
  | "serviceCards___stack___internal___type"
  | "serviceCards___description___id"
  | "serviceCards___description___parent___id"
  | "serviceCards___description___parent___children"
  | "serviceCards___description___children"
  | "serviceCards___description___children___id"
  | "serviceCards___description___children___children"
  | "serviceCards___description___internal___content"
  | "serviceCards___description___internal___contentDigest"
  | "serviceCards___description___internal___description"
  | "serviceCards___description___internal___fieldOwners"
  | "serviceCards___description___internal___ignoreType"
  | "serviceCards___description___internal___mediaType"
  | "serviceCards___description___internal___owner"
  | "serviceCards___description___internal___type"
  | "serviceCards___description___description"
  | "serviceCards___description___sys___type"
  | "serviceCards___spaceId"
  | "serviceCards___createdAt"
  | "serviceCards___updatedAt"
  | "serviceCards___sys___type"
  | "serviceCards___sys___revision"
  | "serviceCards___services_page"
  | "serviceCards___services_page___contentful_id"
  | "serviceCards___services_page___id"
  | "serviceCards___services_page___node_locale"
  | "serviceCards___services_page___slug"
  | "serviceCards___services_page___servicesBanner___contentful_id"
  | "serviceCards___services_page___servicesBanner___id"
  | "serviceCards___services_page___servicesBanner___node_locale"
  | "serviceCards___services_page___servicesBanner___heading"
  | "serviceCards___services_page___servicesBanner___subHeader"
  | "serviceCards___services_page___servicesBanner___community_page"
  | "serviceCards___services_page___servicesBanner___spaceId"
  | "serviceCards___services_page___servicesBanner___createdAt"
  | "serviceCards___services_page___servicesBanner___updatedAt"
  | "serviceCards___services_page___servicesBanner___services_page"
  | "serviceCards___services_page___servicesBanner___home_page"
  | "serviceCards___services_page___servicesBanner___contact_page"
  | "serviceCards___services_page___servicesBanner___about_us_page"
  | "serviceCards___services_page___servicesBanner___children"
  | "serviceCards___services_page___serviceCards"
  | "serviceCards___services_page___serviceCards___contentful_id"
  | "serviceCards___services_page___serviceCards___id"
  | "serviceCards___services_page___serviceCards___node_locale"
  | "serviceCards___services_page___serviceCards___title"
  | "serviceCards___services_page___serviceCards___internalLink"
  | "serviceCards___services_page___serviceCards___stack"
  | "serviceCards___services_page___serviceCards___spaceId"
  | "serviceCards___services_page___serviceCards___createdAt"
  | "serviceCards___services_page___serviceCards___updatedAt"
  | "serviceCards___services_page___serviceCards___services_page"
  | "serviceCards___services_page___serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "serviceCards___services_page___serviceCards___children"
  | "serviceCards___services_page___spaceId"
  | "serviceCards___services_page___createdAt"
  | "serviceCards___services_page___updatedAt"
  | "serviceCards___services_page___sys___type"
  | "serviceCards___services_page___sys___revision"
  | "serviceCards___services_page___parent___id"
  | "serviceCards___services_page___parent___children"
  | "serviceCards___services_page___children"
  | "serviceCards___services_page___children___id"
  | "serviceCards___services_page___children___children"
  | "serviceCards___services_page___internal___content"
  | "serviceCards___services_page___internal___contentDigest"
  | "serviceCards___services_page___internal___description"
  | "serviceCards___services_page___internal___fieldOwners"
  | "serviceCards___services_page___internal___ignoreType"
  | "serviceCards___services_page___internal___mediaType"
  | "serviceCards___services_page___internal___owner"
  | "serviceCards___services_page___internal___type"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___id"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___parent___id"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___parent___children"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___children"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___children___id"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___children___children"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___content"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___contentDigest"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___description"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___fieldOwners"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___ignoreType"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___mediaType"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___owner"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___internal___type"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___description"
  | "serviceCards___childrenContentfulGeneralCardDescriptionTextNode___sys___type"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___id"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___parent___id"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___parent___children"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___children"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___children___id"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___children___children"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___content"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___contentDigest"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___description"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___fieldOwners"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___ignoreType"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___mediaType"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___owner"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___internal___type"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___description"
  | "serviceCards___childContentfulGeneralCardDescriptionTextNode___sys___type"
  | "serviceCards___parent___id"
  | "serviceCards___parent___parent___id"
  | "serviceCards___parent___parent___children"
  | "serviceCards___parent___children"
  | "serviceCards___parent___children___id"
  | "serviceCards___parent___children___children"
  | "serviceCards___parent___internal___content"
  | "serviceCards___parent___internal___contentDigest"
  | "serviceCards___parent___internal___description"
  | "serviceCards___parent___internal___fieldOwners"
  | "serviceCards___parent___internal___ignoreType"
  | "serviceCards___parent___internal___mediaType"
  | "serviceCards___parent___internal___owner"
  | "serviceCards___parent___internal___type"
  | "serviceCards___children"
  | "serviceCards___children___id"
  | "serviceCards___children___parent___id"
  | "serviceCards___children___parent___children"
  | "serviceCards___children___children"
  | "serviceCards___children___children___id"
  | "serviceCards___children___children___children"
  | "serviceCards___children___internal___content"
  | "serviceCards___children___internal___contentDigest"
  | "serviceCards___children___internal___description"
  | "serviceCards___children___internal___fieldOwners"
  | "serviceCards___children___internal___ignoreType"
  | "serviceCards___children___internal___mediaType"
  | "serviceCards___children___internal___owner"
  | "serviceCards___children___internal___type"
  | "serviceCards___internal___content"
  | "serviceCards___internal___contentDigest"
  | "serviceCards___internal___description"
  | "serviceCards___internal___fieldOwners"
  | "serviceCards___internal___ignoreType"
  | "serviceCards___internal___mediaType"
  | "serviceCards___internal___owner"
  | "serviceCards___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulServicesPageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulServicesPageEdge>
  nodes: Array<ContentfulServicesPage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulServicesPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulServicesPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulImageCardsConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulImageCardsEdge>
  nodes: Array<ContentfulImageCards>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulImageCardsGroupConnection>
}

export type ContentfulImageCardsConnectionDistinctArgs = {
  field: ContentfulImageCardsFieldsEnum
}

export type ContentfulImageCardsConnectionMaxArgs = {
  field: ContentfulImageCardsFieldsEnum
}

export type ContentfulImageCardsConnectionMinArgs = {
  field: ContentfulImageCardsFieldsEnum
}

export type ContentfulImageCardsConnectionSumArgs = {
  field: ContentfulImageCardsFieldsEnum
}

export type ContentfulImageCardsConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulImageCardsFieldsEnum
}

export type ContentfulImageCardsEdge = {
  next?: Maybe<ContentfulImageCards>
  node: ContentfulImageCards
  previous?: Maybe<ContentfulImageCards>
}

export type ContentfulImageCardsFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "title"
  | "image___contentful_id"
  | "image___id"
  | "image___spaceId"
  | "image___createdAt"
  | "image___updatedAt"
  | "image___file___url"
  | "image___file___details___size"
  | "image___file___fileName"
  | "image___file___contentType"
  | "image___title"
  | "image___description"
  | "image___node_locale"
  | "image___sys___type"
  | "image___sys___revision"
  | "image___fixed___base64"
  | "image___fixed___tracedSVG"
  | "image___fixed___aspectRatio"
  | "image___fixed___width"
  | "image___fixed___height"
  | "image___fixed___src"
  | "image___fixed___srcSet"
  | "image___fixed___srcWebp"
  | "image___fixed___srcSetWebp"
  | "image___fluid___base64"
  | "image___fluid___tracedSVG"
  | "image___fluid___aspectRatio"
  | "image___fluid___src"
  | "image___fluid___srcSet"
  | "image___fluid___srcWebp"
  | "image___fluid___srcSetWebp"
  | "image___fluid___sizes"
  | "image___gatsbyImageData"
  | "image___resize___base64"
  | "image___resize___tracedSVG"
  | "image___resize___src"
  | "image___resize___width"
  | "image___resize___height"
  | "image___resize___aspectRatio"
  | "image___parent___id"
  | "image___parent___parent___id"
  | "image___parent___parent___children"
  | "image___parent___children"
  | "image___parent___children___id"
  | "image___parent___children___children"
  | "image___parent___internal___content"
  | "image___parent___internal___contentDigest"
  | "image___parent___internal___description"
  | "image___parent___internal___fieldOwners"
  | "image___parent___internal___ignoreType"
  | "image___parent___internal___mediaType"
  | "image___parent___internal___owner"
  | "image___parent___internal___type"
  | "image___children"
  | "image___children___id"
  | "image___children___parent___id"
  | "image___children___parent___children"
  | "image___children___children"
  | "image___children___children___id"
  | "image___children___children___children"
  | "image___children___internal___content"
  | "image___children___internal___contentDigest"
  | "image___children___internal___description"
  | "image___children___internal___fieldOwners"
  | "image___children___internal___ignoreType"
  | "image___children___internal___mediaType"
  | "image___children___internal___owner"
  | "image___children___internal___type"
  | "image___internal___content"
  | "image___internal___contentDigest"
  | "image___internal___description"
  | "image___internal___fieldOwners"
  | "image___internal___ignoreType"
  | "image___internal___mediaType"
  | "image___internal___owner"
  | "image___internal___type"
  | "button___contentful_id"
  | "button___id"
  | "button___node_locale"
  | "button___buttonText"
  | "button___buttonLink"
  | "button___image_cards"
  | "button___image_cards___contentful_id"
  | "button___image_cards___id"
  | "button___image_cards___node_locale"
  | "button___image_cards___title"
  | "button___image_cards___image___contentful_id"
  | "button___image_cards___image___id"
  | "button___image_cards___image___spaceId"
  | "button___image_cards___image___createdAt"
  | "button___image_cards___image___updatedAt"
  | "button___image_cards___image___title"
  | "button___image_cards___image___description"
  | "button___image_cards___image___node_locale"
  | "button___image_cards___image___gatsbyImageData"
  | "button___image_cards___image___children"
  | "button___image_cards___button___contentful_id"
  | "button___image_cards___button___id"
  | "button___image_cards___button___node_locale"
  | "button___image_cards___button___buttonText"
  | "button___image_cards___button___buttonLink"
  | "button___image_cards___button___image_cards"
  | "button___image_cards___button___spaceId"
  | "button___image_cards___button___createdAt"
  | "button___image_cards___button___updatedAt"
  | "button___image_cards___button___children"
  | "button___image_cards___community_page"
  | "button___image_cards___community_page___contentful_id"
  | "button___image_cards___community_page___id"
  | "button___image_cards___community_page___node_locale"
  | "button___image_cards___community_page___slug"
  | "button___image_cards___community_page___newsCards"
  | "button___image_cards___community_page___blogCards"
  | "button___image_cards___community_page___communityCards"
  | "button___image_cards___community_page___spaceId"
  | "button___image_cards___community_page___createdAt"
  | "button___image_cards___community_page___updatedAt"
  | "button___image_cards___community_page___children"
  | "button___image_cards___text___id"
  | "button___image_cards___text___children"
  | "button___image_cards___text___text"
  | "button___image_cards___spaceId"
  | "button___image_cards___createdAt"
  | "button___image_cards___updatedAt"
  | "button___image_cards___sys___type"
  | "button___image_cards___sys___revision"
  | "button___image_cards___childrenContentfulImageCardsTextTextNode"
  | "button___image_cards___childrenContentfulImageCardsTextTextNode___id"
  | "button___image_cards___childrenContentfulImageCardsTextTextNode___children"
  | "button___image_cards___childrenContentfulImageCardsTextTextNode___text"
  | "button___image_cards___childContentfulImageCardsTextTextNode___id"
  | "button___image_cards___childContentfulImageCardsTextTextNode___children"
  | "button___image_cards___childContentfulImageCardsTextTextNode___text"
  | "button___image_cards___parent___id"
  | "button___image_cards___parent___children"
  | "button___image_cards___children"
  | "button___image_cards___children___id"
  | "button___image_cards___children___children"
  | "button___image_cards___internal___content"
  | "button___image_cards___internal___contentDigest"
  | "button___image_cards___internal___description"
  | "button___image_cards___internal___fieldOwners"
  | "button___image_cards___internal___ignoreType"
  | "button___image_cards___internal___mediaType"
  | "button___image_cards___internal___owner"
  | "button___image_cards___internal___type"
  | "button___spaceId"
  | "button___createdAt"
  | "button___updatedAt"
  | "button___sys___type"
  | "button___sys___revision"
  | "button___parent___id"
  | "button___parent___parent___id"
  | "button___parent___parent___children"
  | "button___parent___children"
  | "button___parent___children___id"
  | "button___parent___children___children"
  | "button___parent___internal___content"
  | "button___parent___internal___contentDigest"
  | "button___parent___internal___description"
  | "button___parent___internal___fieldOwners"
  | "button___parent___internal___ignoreType"
  | "button___parent___internal___mediaType"
  | "button___parent___internal___owner"
  | "button___parent___internal___type"
  | "button___children"
  | "button___children___id"
  | "button___children___parent___id"
  | "button___children___parent___children"
  | "button___children___children"
  | "button___children___children___id"
  | "button___children___children___children"
  | "button___children___internal___content"
  | "button___children___internal___contentDigest"
  | "button___children___internal___description"
  | "button___children___internal___fieldOwners"
  | "button___children___internal___ignoreType"
  | "button___children___internal___mediaType"
  | "button___children___internal___owner"
  | "button___children___internal___type"
  | "button___internal___content"
  | "button___internal___contentDigest"
  | "button___internal___description"
  | "button___internal___fieldOwners"
  | "button___internal___ignoreType"
  | "button___internal___mediaType"
  | "button___internal___owner"
  | "button___internal___type"
  | "community_page"
  | "community_page___contentful_id"
  | "community_page___id"
  | "community_page___node_locale"
  | "community_page___slug"
  | "community_page___communityBanner___contentful_id"
  | "community_page___communityBanner___id"
  | "community_page___communityBanner___node_locale"
  | "community_page___communityBanner___heading"
  | "community_page___communityBanner___subHeader"
  | "community_page___communityBanner___backgroundImage___contentful_id"
  | "community_page___communityBanner___backgroundImage___id"
  | "community_page___communityBanner___backgroundImage___spaceId"
  | "community_page___communityBanner___backgroundImage___createdAt"
  | "community_page___communityBanner___backgroundImage___updatedAt"
  | "community_page___communityBanner___backgroundImage___title"
  | "community_page___communityBanner___backgroundImage___description"
  | "community_page___communityBanner___backgroundImage___node_locale"
  | "community_page___communityBanner___backgroundImage___gatsbyImageData"
  | "community_page___communityBanner___backgroundImage___children"
  | "community_page___communityBanner___community_page"
  | "community_page___communityBanner___community_page___contentful_id"
  | "community_page___communityBanner___community_page___id"
  | "community_page___communityBanner___community_page___node_locale"
  | "community_page___communityBanner___community_page___slug"
  | "community_page___communityBanner___community_page___newsCards"
  | "community_page___communityBanner___community_page___blogCards"
  | "community_page___communityBanner___community_page___communityCards"
  | "community_page___communityBanner___community_page___spaceId"
  | "community_page___communityBanner___community_page___createdAt"
  | "community_page___communityBanner___community_page___updatedAt"
  | "community_page___communityBanner___community_page___children"
  | "community_page___communityBanner___spaceId"
  | "community_page___communityBanner___createdAt"
  | "community_page___communityBanner___updatedAt"
  | "community_page___communityBanner___sys___type"
  | "community_page___communityBanner___sys___revision"
  | "community_page___communityBanner___services_page"
  | "community_page___communityBanner___services_page___contentful_id"
  | "community_page___communityBanner___services_page___id"
  | "community_page___communityBanner___services_page___node_locale"
  | "community_page___communityBanner___services_page___slug"
  | "community_page___communityBanner___services_page___serviceCards"
  | "community_page___communityBanner___services_page___spaceId"
  | "community_page___communityBanner___services_page___createdAt"
  | "community_page___communityBanner___services_page___updatedAt"
  | "community_page___communityBanner___services_page___children"
  | "community_page___communityBanner___home_page"
  | "community_page___communityBanner___home_page___contentful_id"
  | "community_page___communityBanner___home_page___id"
  | "community_page___communityBanner___home_page___node_locale"
  | "community_page___communityBanner___home_page___slug"
  | "community_page___communityBanner___home_page___testimonialSlides"
  | "community_page___communityBanner___home_page___spaceId"
  | "community_page___communityBanner___home_page___createdAt"
  | "community_page___communityBanner___home_page___updatedAt"
  | "community_page___communityBanner___home_page___children"
  | "community_page___communityBanner___contact_page"
  | "community_page___communityBanner___contact_page___contentful_id"
  | "community_page___communityBanner___contact_page___id"
  | "community_page___communityBanner___contact_page___node_locale"
  | "community_page___communityBanner___contact_page___slug"
  | "community_page___communityBanner___contact_page___spaceId"
  | "community_page___communityBanner___contact_page___createdAt"
  | "community_page___communityBanner___contact_page___updatedAt"
  | "community_page___communityBanner___contact_page___children"
  | "community_page___communityBanner___about_us_page"
  | "community_page___communityBanner___about_us_page___contentful_id"
  | "community_page___communityBanner___about_us_page___id"
  | "community_page___communityBanner___about_us_page___node_locale"
  | "community_page___communityBanner___about_us_page___slug"
  | "community_page___communityBanner___about_us_page___ourTeam"
  | "community_page___communityBanner___about_us_page___spaceId"
  | "community_page___communityBanner___about_us_page___createdAt"
  | "community_page___communityBanner___about_us_page___updatedAt"
  | "community_page___communityBanner___about_us_page___children"
  | "community_page___communityBanner___parent___id"
  | "community_page___communityBanner___parent___children"
  | "community_page___communityBanner___children"
  | "community_page___communityBanner___children___id"
  | "community_page___communityBanner___children___children"
  | "community_page___communityBanner___internal___content"
  | "community_page___communityBanner___internal___contentDigest"
  | "community_page___communityBanner___internal___description"
  | "community_page___communityBanner___internal___fieldOwners"
  | "community_page___communityBanner___internal___ignoreType"
  | "community_page___communityBanner___internal___mediaType"
  | "community_page___communityBanner___internal___owner"
  | "community_page___communityBanner___internal___type"
  | "community_page___newsCards"
  | "community_page___newsCards___contentful_id"
  | "community_page___newsCards___id"
  | "community_page___newsCards___node_locale"
  | "community_page___newsCards___title"
  | "community_page___newsCards___image___contentful_id"
  | "community_page___newsCards___image___id"
  | "community_page___newsCards___image___spaceId"
  | "community_page___newsCards___image___createdAt"
  | "community_page___newsCards___image___updatedAt"
  | "community_page___newsCards___image___title"
  | "community_page___newsCards___image___description"
  | "community_page___newsCards___image___node_locale"
  | "community_page___newsCards___image___gatsbyImageData"
  | "community_page___newsCards___image___children"
  | "community_page___newsCards___button___contentful_id"
  | "community_page___newsCards___button___id"
  | "community_page___newsCards___button___node_locale"
  | "community_page___newsCards___button___buttonText"
  | "community_page___newsCards___button___buttonLink"
  | "community_page___newsCards___button___image_cards"
  | "community_page___newsCards___button___spaceId"
  | "community_page___newsCards___button___createdAt"
  | "community_page___newsCards___button___updatedAt"
  | "community_page___newsCards___button___children"
  | "community_page___newsCards___community_page"
  | "community_page___newsCards___community_page___contentful_id"
  | "community_page___newsCards___community_page___id"
  | "community_page___newsCards___community_page___node_locale"
  | "community_page___newsCards___community_page___slug"
  | "community_page___newsCards___community_page___newsCards"
  | "community_page___newsCards___community_page___blogCards"
  | "community_page___newsCards___community_page___communityCards"
  | "community_page___newsCards___community_page___spaceId"
  | "community_page___newsCards___community_page___createdAt"
  | "community_page___newsCards___community_page___updatedAt"
  | "community_page___newsCards___community_page___children"
  | "community_page___newsCards___text___id"
  | "community_page___newsCards___text___children"
  | "community_page___newsCards___text___text"
  | "community_page___newsCards___spaceId"
  | "community_page___newsCards___createdAt"
  | "community_page___newsCards___updatedAt"
  | "community_page___newsCards___sys___type"
  | "community_page___newsCards___sys___revision"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode___id"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode___children"
  | "community_page___newsCards___childrenContentfulImageCardsTextTextNode___text"
  | "community_page___newsCards___childContentfulImageCardsTextTextNode___id"
  | "community_page___newsCards___childContentfulImageCardsTextTextNode___children"
  | "community_page___newsCards___childContentfulImageCardsTextTextNode___text"
  | "community_page___newsCards___parent___id"
  | "community_page___newsCards___parent___children"
  | "community_page___newsCards___children"
  | "community_page___newsCards___children___id"
  | "community_page___newsCards___children___children"
  | "community_page___newsCards___internal___content"
  | "community_page___newsCards___internal___contentDigest"
  | "community_page___newsCards___internal___description"
  | "community_page___newsCards___internal___fieldOwners"
  | "community_page___newsCards___internal___ignoreType"
  | "community_page___newsCards___internal___mediaType"
  | "community_page___newsCards___internal___owner"
  | "community_page___newsCards___internal___type"
  | "community_page___blogCards"
  | "community_page___blogCards___contentful_id"
  | "community_page___blogCards___id"
  | "community_page___blogCards___node_locale"
  | "community_page___blogCards___title"
  | "community_page___blogCards___image___contentful_id"
  | "community_page___blogCards___image___id"
  | "community_page___blogCards___image___spaceId"
  | "community_page___blogCards___image___createdAt"
  | "community_page___blogCards___image___updatedAt"
  | "community_page___blogCards___image___title"
  | "community_page___blogCards___image___description"
  | "community_page___blogCards___image___node_locale"
  | "community_page___blogCards___image___gatsbyImageData"
  | "community_page___blogCards___image___children"
  | "community_page___blogCards___button___contentful_id"
  | "community_page___blogCards___button___id"
  | "community_page___blogCards___button___node_locale"
  | "community_page___blogCards___button___buttonText"
  | "community_page___blogCards___button___buttonLink"
  | "community_page___blogCards___button___image_cards"
  | "community_page___blogCards___button___spaceId"
  | "community_page___blogCards___button___createdAt"
  | "community_page___blogCards___button___updatedAt"
  | "community_page___blogCards___button___children"
  | "community_page___blogCards___community_page"
  | "community_page___blogCards___community_page___contentful_id"
  | "community_page___blogCards___community_page___id"
  | "community_page___blogCards___community_page___node_locale"
  | "community_page___blogCards___community_page___slug"
  | "community_page___blogCards___community_page___newsCards"
  | "community_page___blogCards___community_page___blogCards"
  | "community_page___blogCards___community_page___communityCards"
  | "community_page___blogCards___community_page___spaceId"
  | "community_page___blogCards___community_page___createdAt"
  | "community_page___blogCards___community_page___updatedAt"
  | "community_page___blogCards___community_page___children"
  | "community_page___blogCards___text___id"
  | "community_page___blogCards___text___children"
  | "community_page___blogCards___text___text"
  | "community_page___blogCards___spaceId"
  | "community_page___blogCards___createdAt"
  | "community_page___blogCards___updatedAt"
  | "community_page___blogCards___sys___type"
  | "community_page___blogCards___sys___revision"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode___id"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode___children"
  | "community_page___blogCards___childrenContentfulImageCardsTextTextNode___text"
  | "community_page___blogCards___childContentfulImageCardsTextTextNode___id"
  | "community_page___blogCards___childContentfulImageCardsTextTextNode___children"
  | "community_page___blogCards___childContentfulImageCardsTextTextNode___text"
  | "community_page___blogCards___parent___id"
  | "community_page___blogCards___parent___children"
  | "community_page___blogCards___children"
  | "community_page___blogCards___children___id"
  | "community_page___blogCards___children___children"
  | "community_page___blogCards___internal___content"
  | "community_page___blogCards___internal___contentDigest"
  | "community_page___blogCards___internal___description"
  | "community_page___blogCards___internal___fieldOwners"
  | "community_page___blogCards___internal___ignoreType"
  | "community_page___blogCards___internal___mediaType"
  | "community_page___blogCards___internal___owner"
  | "community_page___blogCards___internal___type"
  | "community_page___communityCards"
  | "community_page___communityCards___contentful_id"
  | "community_page___communityCards___id"
  | "community_page___communityCards___node_locale"
  | "community_page___communityCards___title"
  | "community_page___communityCards___image___contentful_id"
  | "community_page___communityCards___image___id"
  | "community_page___communityCards___image___spaceId"
  | "community_page___communityCards___image___createdAt"
  | "community_page___communityCards___image___updatedAt"
  | "community_page___communityCards___image___title"
  | "community_page___communityCards___image___description"
  | "community_page___communityCards___image___node_locale"
  | "community_page___communityCards___image___gatsbyImageData"
  | "community_page___communityCards___image___children"
  | "community_page___communityCards___button___contentful_id"
  | "community_page___communityCards___button___id"
  | "community_page___communityCards___button___node_locale"
  | "community_page___communityCards___button___buttonText"
  | "community_page___communityCards___button___buttonLink"
  | "community_page___communityCards___button___image_cards"
  | "community_page___communityCards___button___spaceId"
  | "community_page___communityCards___button___createdAt"
  | "community_page___communityCards___button___updatedAt"
  | "community_page___communityCards___button___children"
  | "community_page___communityCards___community_page"
  | "community_page___communityCards___community_page___contentful_id"
  | "community_page___communityCards___community_page___id"
  | "community_page___communityCards___community_page___node_locale"
  | "community_page___communityCards___community_page___slug"
  | "community_page___communityCards___community_page___newsCards"
  | "community_page___communityCards___community_page___blogCards"
  | "community_page___communityCards___community_page___communityCards"
  | "community_page___communityCards___community_page___spaceId"
  | "community_page___communityCards___community_page___createdAt"
  | "community_page___communityCards___community_page___updatedAt"
  | "community_page___communityCards___community_page___children"
  | "community_page___communityCards___text___id"
  | "community_page___communityCards___text___children"
  | "community_page___communityCards___text___text"
  | "community_page___communityCards___spaceId"
  | "community_page___communityCards___createdAt"
  | "community_page___communityCards___updatedAt"
  | "community_page___communityCards___sys___type"
  | "community_page___communityCards___sys___revision"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode___id"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode___children"
  | "community_page___communityCards___childrenContentfulImageCardsTextTextNode___text"
  | "community_page___communityCards___childContentfulImageCardsTextTextNode___id"
  | "community_page___communityCards___childContentfulImageCardsTextTextNode___children"
  | "community_page___communityCards___childContentfulImageCardsTextTextNode___text"
  | "community_page___communityCards___parent___id"
  | "community_page___communityCards___parent___children"
  | "community_page___communityCards___children"
  | "community_page___communityCards___children___id"
  | "community_page___communityCards___children___children"
  | "community_page___communityCards___internal___content"
  | "community_page___communityCards___internal___contentDigest"
  | "community_page___communityCards___internal___description"
  | "community_page___communityCards___internal___fieldOwners"
  | "community_page___communityCards___internal___ignoreType"
  | "community_page___communityCards___internal___mediaType"
  | "community_page___communityCards___internal___owner"
  | "community_page___communityCards___internal___type"
  | "community_page___spaceId"
  | "community_page___createdAt"
  | "community_page___updatedAt"
  | "community_page___sys___type"
  | "community_page___sys___revision"
  | "community_page___parent___id"
  | "community_page___parent___parent___id"
  | "community_page___parent___parent___children"
  | "community_page___parent___children"
  | "community_page___parent___children___id"
  | "community_page___parent___children___children"
  | "community_page___parent___internal___content"
  | "community_page___parent___internal___contentDigest"
  | "community_page___parent___internal___description"
  | "community_page___parent___internal___fieldOwners"
  | "community_page___parent___internal___ignoreType"
  | "community_page___parent___internal___mediaType"
  | "community_page___parent___internal___owner"
  | "community_page___parent___internal___type"
  | "community_page___children"
  | "community_page___children___id"
  | "community_page___children___parent___id"
  | "community_page___children___parent___children"
  | "community_page___children___children"
  | "community_page___children___children___id"
  | "community_page___children___children___children"
  | "community_page___children___internal___content"
  | "community_page___children___internal___contentDigest"
  | "community_page___children___internal___description"
  | "community_page___children___internal___fieldOwners"
  | "community_page___children___internal___ignoreType"
  | "community_page___children___internal___mediaType"
  | "community_page___children___internal___owner"
  | "community_page___children___internal___type"
  | "community_page___internal___content"
  | "community_page___internal___contentDigest"
  | "community_page___internal___description"
  | "community_page___internal___fieldOwners"
  | "community_page___internal___ignoreType"
  | "community_page___internal___mediaType"
  | "community_page___internal___owner"
  | "community_page___internal___type"
  | "text___id"
  | "text___parent___id"
  | "text___parent___parent___id"
  | "text___parent___parent___children"
  | "text___parent___children"
  | "text___parent___children___id"
  | "text___parent___children___children"
  | "text___parent___internal___content"
  | "text___parent___internal___contentDigest"
  | "text___parent___internal___description"
  | "text___parent___internal___fieldOwners"
  | "text___parent___internal___ignoreType"
  | "text___parent___internal___mediaType"
  | "text___parent___internal___owner"
  | "text___parent___internal___type"
  | "text___children"
  | "text___children___id"
  | "text___children___parent___id"
  | "text___children___parent___children"
  | "text___children___children"
  | "text___children___children___id"
  | "text___children___children___children"
  | "text___children___internal___content"
  | "text___children___internal___contentDigest"
  | "text___children___internal___description"
  | "text___children___internal___fieldOwners"
  | "text___children___internal___ignoreType"
  | "text___children___internal___mediaType"
  | "text___children___internal___owner"
  | "text___children___internal___type"
  | "text___internal___content"
  | "text___internal___contentDigest"
  | "text___internal___description"
  | "text___internal___fieldOwners"
  | "text___internal___ignoreType"
  | "text___internal___mediaType"
  | "text___internal___owner"
  | "text___internal___type"
  | "text___text"
  | "text___sys___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "childrenContentfulImageCardsTextTextNode"
  | "childrenContentfulImageCardsTextTextNode___id"
  | "childrenContentfulImageCardsTextTextNode___parent___id"
  | "childrenContentfulImageCardsTextTextNode___parent___parent___id"
  | "childrenContentfulImageCardsTextTextNode___parent___parent___children"
  | "childrenContentfulImageCardsTextTextNode___parent___children"
  | "childrenContentfulImageCardsTextTextNode___parent___children___id"
  | "childrenContentfulImageCardsTextTextNode___parent___children___children"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___content"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___contentDigest"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___description"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___fieldOwners"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___ignoreType"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___mediaType"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___owner"
  | "childrenContentfulImageCardsTextTextNode___parent___internal___type"
  | "childrenContentfulImageCardsTextTextNode___children"
  | "childrenContentfulImageCardsTextTextNode___children___id"
  | "childrenContentfulImageCardsTextTextNode___children___parent___id"
  | "childrenContentfulImageCardsTextTextNode___children___parent___children"
  | "childrenContentfulImageCardsTextTextNode___children___children"
  | "childrenContentfulImageCardsTextTextNode___children___children___id"
  | "childrenContentfulImageCardsTextTextNode___children___children___children"
  | "childrenContentfulImageCardsTextTextNode___children___internal___content"
  | "childrenContentfulImageCardsTextTextNode___children___internal___contentDigest"
  | "childrenContentfulImageCardsTextTextNode___children___internal___description"
  | "childrenContentfulImageCardsTextTextNode___children___internal___fieldOwners"
  | "childrenContentfulImageCardsTextTextNode___children___internal___ignoreType"
  | "childrenContentfulImageCardsTextTextNode___children___internal___mediaType"
  | "childrenContentfulImageCardsTextTextNode___children___internal___owner"
  | "childrenContentfulImageCardsTextTextNode___children___internal___type"
  | "childrenContentfulImageCardsTextTextNode___internal___content"
  | "childrenContentfulImageCardsTextTextNode___internal___contentDigest"
  | "childrenContentfulImageCardsTextTextNode___internal___description"
  | "childrenContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "childrenContentfulImageCardsTextTextNode___internal___ignoreType"
  | "childrenContentfulImageCardsTextTextNode___internal___mediaType"
  | "childrenContentfulImageCardsTextTextNode___internal___owner"
  | "childrenContentfulImageCardsTextTextNode___internal___type"
  | "childrenContentfulImageCardsTextTextNode___text"
  | "childrenContentfulImageCardsTextTextNode___sys___type"
  | "childContentfulImageCardsTextTextNode___id"
  | "childContentfulImageCardsTextTextNode___parent___id"
  | "childContentfulImageCardsTextTextNode___parent___parent___id"
  | "childContentfulImageCardsTextTextNode___parent___parent___children"
  | "childContentfulImageCardsTextTextNode___parent___children"
  | "childContentfulImageCardsTextTextNode___parent___children___id"
  | "childContentfulImageCardsTextTextNode___parent___children___children"
  | "childContentfulImageCardsTextTextNode___parent___internal___content"
  | "childContentfulImageCardsTextTextNode___parent___internal___contentDigest"
  | "childContentfulImageCardsTextTextNode___parent___internal___description"
  | "childContentfulImageCardsTextTextNode___parent___internal___fieldOwners"
  | "childContentfulImageCardsTextTextNode___parent___internal___ignoreType"
  | "childContentfulImageCardsTextTextNode___parent___internal___mediaType"
  | "childContentfulImageCardsTextTextNode___parent___internal___owner"
  | "childContentfulImageCardsTextTextNode___parent___internal___type"
  | "childContentfulImageCardsTextTextNode___children"
  | "childContentfulImageCardsTextTextNode___children___id"
  | "childContentfulImageCardsTextTextNode___children___parent___id"
  | "childContentfulImageCardsTextTextNode___children___parent___children"
  | "childContentfulImageCardsTextTextNode___children___children"
  | "childContentfulImageCardsTextTextNode___children___children___id"
  | "childContentfulImageCardsTextTextNode___children___children___children"
  | "childContentfulImageCardsTextTextNode___children___internal___content"
  | "childContentfulImageCardsTextTextNode___children___internal___contentDigest"
  | "childContentfulImageCardsTextTextNode___children___internal___description"
  | "childContentfulImageCardsTextTextNode___children___internal___fieldOwners"
  | "childContentfulImageCardsTextTextNode___children___internal___ignoreType"
  | "childContentfulImageCardsTextTextNode___children___internal___mediaType"
  | "childContentfulImageCardsTextTextNode___children___internal___owner"
  | "childContentfulImageCardsTextTextNode___children___internal___type"
  | "childContentfulImageCardsTextTextNode___internal___content"
  | "childContentfulImageCardsTextTextNode___internal___contentDigest"
  | "childContentfulImageCardsTextTextNode___internal___description"
  | "childContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "childContentfulImageCardsTextTextNode___internal___ignoreType"
  | "childContentfulImageCardsTextTextNode___internal___mediaType"
  | "childContentfulImageCardsTextTextNode___internal___owner"
  | "childContentfulImageCardsTextTextNode___internal___type"
  | "childContentfulImageCardsTextTextNode___text"
  | "childContentfulImageCardsTextTextNode___sys___type"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulImageCardsGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulImageCardsEdge>
  nodes: Array<ContentfulImageCards>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulImageCardsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageCardsFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulButtonConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulButtonEdge>
  nodes: Array<ContentfulButton>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulButtonGroupConnection>
}

export type ContentfulButtonConnectionDistinctArgs = {
  field: ContentfulButtonFieldsEnum
}

export type ContentfulButtonConnectionMaxArgs = {
  field: ContentfulButtonFieldsEnum
}

export type ContentfulButtonConnectionMinArgs = {
  field: ContentfulButtonFieldsEnum
}

export type ContentfulButtonConnectionSumArgs = {
  field: ContentfulButtonFieldsEnum
}

export type ContentfulButtonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulButtonFieldsEnum
}

export type ContentfulButtonEdge = {
  next?: Maybe<ContentfulButton>
  node: ContentfulButton
  previous?: Maybe<ContentfulButton>
}

export type ContentfulButtonFieldsEnum =
  | "contentful_id"
  | "id"
  | "node_locale"
  | "buttonText"
  | "buttonLink"
  | "image_cards"
  | "image_cards___contentful_id"
  | "image_cards___id"
  | "image_cards___node_locale"
  | "image_cards___title"
  | "image_cards___image___contentful_id"
  | "image_cards___image___id"
  | "image_cards___image___spaceId"
  | "image_cards___image___createdAt"
  | "image_cards___image___updatedAt"
  | "image_cards___image___file___url"
  | "image_cards___image___file___fileName"
  | "image_cards___image___file___contentType"
  | "image_cards___image___title"
  | "image_cards___image___description"
  | "image_cards___image___node_locale"
  | "image_cards___image___sys___type"
  | "image_cards___image___sys___revision"
  | "image_cards___image___fixed___base64"
  | "image_cards___image___fixed___tracedSVG"
  | "image_cards___image___fixed___aspectRatio"
  | "image_cards___image___fixed___width"
  | "image_cards___image___fixed___height"
  | "image_cards___image___fixed___src"
  | "image_cards___image___fixed___srcSet"
  | "image_cards___image___fixed___srcWebp"
  | "image_cards___image___fixed___srcSetWebp"
  | "image_cards___image___fluid___base64"
  | "image_cards___image___fluid___tracedSVG"
  | "image_cards___image___fluid___aspectRatio"
  | "image_cards___image___fluid___src"
  | "image_cards___image___fluid___srcSet"
  | "image_cards___image___fluid___srcWebp"
  | "image_cards___image___fluid___srcSetWebp"
  | "image_cards___image___fluid___sizes"
  | "image_cards___image___gatsbyImageData"
  | "image_cards___image___resize___base64"
  | "image_cards___image___resize___tracedSVG"
  | "image_cards___image___resize___src"
  | "image_cards___image___resize___width"
  | "image_cards___image___resize___height"
  | "image_cards___image___resize___aspectRatio"
  | "image_cards___image___parent___id"
  | "image_cards___image___parent___children"
  | "image_cards___image___children"
  | "image_cards___image___children___id"
  | "image_cards___image___children___children"
  | "image_cards___image___internal___content"
  | "image_cards___image___internal___contentDigest"
  | "image_cards___image___internal___description"
  | "image_cards___image___internal___fieldOwners"
  | "image_cards___image___internal___ignoreType"
  | "image_cards___image___internal___mediaType"
  | "image_cards___image___internal___owner"
  | "image_cards___image___internal___type"
  | "image_cards___button___contentful_id"
  | "image_cards___button___id"
  | "image_cards___button___node_locale"
  | "image_cards___button___buttonText"
  | "image_cards___button___buttonLink"
  | "image_cards___button___image_cards"
  | "image_cards___button___image_cards___contentful_id"
  | "image_cards___button___image_cards___id"
  | "image_cards___button___image_cards___node_locale"
  | "image_cards___button___image_cards___title"
  | "image_cards___button___image_cards___community_page"
  | "image_cards___button___image_cards___spaceId"
  | "image_cards___button___image_cards___createdAt"
  | "image_cards___button___image_cards___updatedAt"
  | "image_cards___button___image_cards___childrenContentfulImageCardsTextTextNode"
  | "image_cards___button___image_cards___children"
  | "image_cards___button___spaceId"
  | "image_cards___button___createdAt"
  | "image_cards___button___updatedAt"
  | "image_cards___button___sys___type"
  | "image_cards___button___sys___revision"
  | "image_cards___button___parent___id"
  | "image_cards___button___parent___children"
  | "image_cards___button___children"
  | "image_cards___button___children___id"
  | "image_cards___button___children___children"
  | "image_cards___button___internal___content"
  | "image_cards___button___internal___contentDigest"
  | "image_cards___button___internal___description"
  | "image_cards___button___internal___fieldOwners"
  | "image_cards___button___internal___ignoreType"
  | "image_cards___button___internal___mediaType"
  | "image_cards___button___internal___owner"
  | "image_cards___button___internal___type"
  | "image_cards___community_page"
  | "image_cards___community_page___contentful_id"
  | "image_cards___community_page___id"
  | "image_cards___community_page___node_locale"
  | "image_cards___community_page___slug"
  | "image_cards___community_page___communityBanner___contentful_id"
  | "image_cards___community_page___communityBanner___id"
  | "image_cards___community_page___communityBanner___node_locale"
  | "image_cards___community_page___communityBanner___heading"
  | "image_cards___community_page___communityBanner___subHeader"
  | "image_cards___community_page___communityBanner___community_page"
  | "image_cards___community_page___communityBanner___spaceId"
  | "image_cards___community_page___communityBanner___createdAt"
  | "image_cards___community_page___communityBanner___updatedAt"
  | "image_cards___community_page___communityBanner___services_page"
  | "image_cards___community_page___communityBanner___home_page"
  | "image_cards___community_page___communityBanner___contact_page"
  | "image_cards___community_page___communityBanner___about_us_page"
  | "image_cards___community_page___communityBanner___children"
  | "image_cards___community_page___newsCards"
  | "image_cards___community_page___newsCards___contentful_id"
  | "image_cards___community_page___newsCards___id"
  | "image_cards___community_page___newsCards___node_locale"
  | "image_cards___community_page___newsCards___title"
  | "image_cards___community_page___newsCards___community_page"
  | "image_cards___community_page___newsCards___spaceId"
  | "image_cards___community_page___newsCards___createdAt"
  | "image_cards___community_page___newsCards___updatedAt"
  | "image_cards___community_page___newsCards___childrenContentfulImageCardsTextTextNode"
  | "image_cards___community_page___newsCards___children"
  | "image_cards___community_page___blogCards"
  | "image_cards___community_page___blogCards___contentful_id"
  | "image_cards___community_page___blogCards___id"
  | "image_cards___community_page___blogCards___node_locale"
  | "image_cards___community_page___blogCards___title"
  | "image_cards___community_page___blogCards___community_page"
  | "image_cards___community_page___blogCards___spaceId"
  | "image_cards___community_page___blogCards___createdAt"
  | "image_cards___community_page___blogCards___updatedAt"
  | "image_cards___community_page___blogCards___childrenContentfulImageCardsTextTextNode"
  | "image_cards___community_page___blogCards___children"
  | "image_cards___community_page___communityCards"
  | "image_cards___community_page___communityCards___contentful_id"
  | "image_cards___community_page___communityCards___id"
  | "image_cards___community_page___communityCards___node_locale"
  | "image_cards___community_page___communityCards___title"
  | "image_cards___community_page___communityCards___community_page"
  | "image_cards___community_page___communityCards___spaceId"
  | "image_cards___community_page___communityCards___createdAt"
  | "image_cards___community_page___communityCards___updatedAt"
  | "image_cards___community_page___communityCards___childrenContentfulImageCardsTextTextNode"
  | "image_cards___community_page___communityCards___children"
  | "image_cards___community_page___spaceId"
  | "image_cards___community_page___createdAt"
  | "image_cards___community_page___updatedAt"
  | "image_cards___community_page___sys___type"
  | "image_cards___community_page___sys___revision"
  | "image_cards___community_page___parent___id"
  | "image_cards___community_page___parent___children"
  | "image_cards___community_page___children"
  | "image_cards___community_page___children___id"
  | "image_cards___community_page___children___children"
  | "image_cards___community_page___internal___content"
  | "image_cards___community_page___internal___contentDigest"
  | "image_cards___community_page___internal___description"
  | "image_cards___community_page___internal___fieldOwners"
  | "image_cards___community_page___internal___ignoreType"
  | "image_cards___community_page___internal___mediaType"
  | "image_cards___community_page___internal___owner"
  | "image_cards___community_page___internal___type"
  | "image_cards___text___id"
  | "image_cards___text___parent___id"
  | "image_cards___text___parent___children"
  | "image_cards___text___children"
  | "image_cards___text___children___id"
  | "image_cards___text___children___children"
  | "image_cards___text___internal___content"
  | "image_cards___text___internal___contentDigest"
  | "image_cards___text___internal___description"
  | "image_cards___text___internal___fieldOwners"
  | "image_cards___text___internal___ignoreType"
  | "image_cards___text___internal___mediaType"
  | "image_cards___text___internal___owner"
  | "image_cards___text___internal___type"
  | "image_cards___text___text"
  | "image_cards___text___sys___type"
  | "image_cards___spaceId"
  | "image_cards___createdAt"
  | "image_cards___updatedAt"
  | "image_cards___sys___type"
  | "image_cards___sys___revision"
  | "image_cards___childrenContentfulImageCardsTextTextNode"
  | "image_cards___childrenContentfulImageCardsTextTextNode___id"
  | "image_cards___childrenContentfulImageCardsTextTextNode___parent___id"
  | "image_cards___childrenContentfulImageCardsTextTextNode___parent___children"
  | "image_cards___childrenContentfulImageCardsTextTextNode___children"
  | "image_cards___childrenContentfulImageCardsTextTextNode___children___id"
  | "image_cards___childrenContentfulImageCardsTextTextNode___children___children"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___content"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___contentDigest"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___description"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___ignoreType"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___mediaType"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___owner"
  | "image_cards___childrenContentfulImageCardsTextTextNode___internal___type"
  | "image_cards___childrenContentfulImageCardsTextTextNode___text"
  | "image_cards___childrenContentfulImageCardsTextTextNode___sys___type"
  | "image_cards___childContentfulImageCardsTextTextNode___id"
  | "image_cards___childContentfulImageCardsTextTextNode___parent___id"
  | "image_cards___childContentfulImageCardsTextTextNode___parent___children"
  | "image_cards___childContentfulImageCardsTextTextNode___children"
  | "image_cards___childContentfulImageCardsTextTextNode___children___id"
  | "image_cards___childContentfulImageCardsTextTextNode___children___children"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___content"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___contentDigest"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___description"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___fieldOwners"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___ignoreType"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___mediaType"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___owner"
  | "image_cards___childContentfulImageCardsTextTextNode___internal___type"
  | "image_cards___childContentfulImageCardsTextTextNode___text"
  | "image_cards___childContentfulImageCardsTextTextNode___sys___type"
  | "image_cards___parent___id"
  | "image_cards___parent___parent___id"
  | "image_cards___parent___parent___children"
  | "image_cards___parent___children"
  | "image_cards___parent___children___id"
  | "image_cards___parent___children___children"
  | "image_cards___parent___internal___content"
  | "image_cards___parent___internal___contentDigest"
  | "image_cards___parent___internal___description"
  | "image_cards___parent___internal___fieldOwners"
  | "image_cards___parent___internal___ignoreType"
  | "image_cards___parent___internal___mediaType"
  | "image_cards___parent___internal___owner"
  | "image_cards___parent___internal___type"
  | "image_cards___children"
  | "image_cards___children___id"
  | "image_cards___children___parent___id"
  | "image_cards___children___parent___children"
  | "image_cards___children___children"
  | "image_cards___children___children___id"
  | "image_cards___children___children___children"
  | "image_cards___children___internal___content"
  | "image_cards___children___internal___contentDigest"
  | "image_cards___children___internal___description"
  | "image_cards___children___internal___fieldOwners"
  | "image_cards___children___internal___ignoreType"
  | "image_cards___children___internal___mediaType"
  | "image_cards___children___internal___owner"
  | "image_cards___children___internal___type"
  | "image_cards___internal___content"
  | "image_cards___internal___contentDigest"
  | "image_cards___internal___description"
  | "image_cards___internal___fieldOwners"
  | "image_cards___internal___ignoreType"
  | "image_cards___internal___mediaType"
  | "image_cards___internal___owner"
  | "image_cards___internal___type"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "sys___type"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

export type ContentfulButtonGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulButtonEdge>
  nodes: Array<ContentfulButton>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulButtonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulButtonFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulTextAndImageTextTextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTextAndImageTextTextNodeEdge>
  nodes: Array<ContentfulTextAndImageTextTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulTextAndImageTextTextNodeGroupConnection>
}

export type ContentfulTextAndImageTextTextNodeConnectionDistinctArgs = {
  field: ContentfulTextAndImageTextTextNodeFieldsEnum
}

export type ContentfulTextAndImageTextTextNodeConnectionMaxArgs = {
  field: ContentfulTextAndImageTextTextNodeFieldsEnum
}

export type ContentfulTextAndImageTextTextNodeConnectionMinArgs = {
  field: ContentfulTextAndImageTextTextNodeFieldsEnum
}

export type ContentfulTextAndImageTextTextNodeConnectionSumArgs = {
  field: ContentfulTextAndImageTextTextNodeFieldsEnum
}

export type ContentfulTextAndImageTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulTextAndImageTextTextNodeFieldsEnum
}

export type ContentfulTextAndImageTextTextNodeEdge = {
  next?: Maybe<ContentfulTextAndImageTextTextNode>
  node: ContentfulTextAndImageTextTextNode
  previous?: Maybe<ContentfulTextAndImageTextTextNode>
}

export type ContentfulTextAndImageTextTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "text"
  | "sys___type"

export type ContentfulTextAndImageTextTextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTextAndImageTextTextNodeEdge>
  nodes: Array<ContentfulTextAndImageTextTextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulTextAndImageTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTextAndImageTextTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulTestimonialSlideTestimonyTextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTestimonialSlideTestimonyTextNodeEdge>
  nodes: Array<ContentfulTestimonialSlideTestimonyTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulTestimonialSlideTestimonyTextNodeGroupConnection>
}

export type ContentfulTestimonialSlideTestimonyTextNodeConnectionDistinctArgs =
  {
    field: ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum
  }

export type ContentfulTestimonialSlideTestimonyTextNodeConnectionMaxArgs = {
  field: ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum
}

export type ContentfulTestimonialSlideTestimonyTextNodeConnectionMinArgs = {
  field: ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum
}

export type ContentfulTestimonialSlideTestimonyTextNodeConnectionSumArgs = {
  field: ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum
}

export type ContentfulTestimonialSlideTestimonyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum
}

export type ContentfulTestimonialSlideTestimonyTextNodeEdge = {
  next?: Maybe<ContentfulTestimonialSlideTestimonyTextNode>
  node: ContentfulTestimonialSlideTestimonyTextNode
  previous?: Maybe<ContentfulTestimonialSlideTestimonyTextNode>
}

export type ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "testimony"
  | "sys___type"

export type ContentfulTestimonialSlideTestimonyTextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulTestimonialSlideTestimonyTextNodeEdge>
  nodes: Array<ContentfulTestimonialSlideTestimonyTextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulTestimonialSlideTestimonyTextNodeSortInput = {
  fields?: Maybe<
    Array<Maybe<ContentfulTestimonialSlideTestimonyTextNodeFieldsEnum>>
  >
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulStackTextTextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulStackTextTextNodeEdge>
  nodes: Array<ContentfulStackTextTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulStackTextTextNodeGroupConnection>
}

export type ContentfulStackTextTextNodeConnectionDistinctArgs = {
  field: ContentfulStackTextTextNodeFieldsEnum
}

export type ContentfulStackTextTextNodeConnectionMaxArgs = {
  field: ContentfulStackTextTextNodeFieldsEnum
}

export type ContentfulStackTextTextNodeConnectionMinArgs = {
  field: ContentfulStackTextTextNodeFieldsEnum
}

export type ContentfulStackTextTextNodeConnectionSumArgs = {
  field: ContentfulStackTextTextNodeFieldsEnum
}

export type ContentfulStackTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulStackTextTextNodeFieldsEnum
}

export type ContentfulStackTextTextNodeEdge = {
  next?: Maybe<ContentfulStackTextTextNode>
  node: ContentfulStackTextTextNode
  previous?: Maybe<ContentfulStackTextTextNode>
}

export type ContentfulStackTextTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "text"
  | "sys___type"

export type ContentfulStackTextTextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulStackTextTextNodeEdge>
  nodes: Array<ContentfulStackTextTextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulStackTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulStackTextTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulStackText2TextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulStackText2TextNodeEdge>
  nodes: Array<ContentfulStackText2TextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulStackText2TextNodeGroupConnection>
}

export type ContentfulStackText2TextNodeConnectionDistinctArgs = {
  field: ContentfulStackText2TextNodeFieldsEnum
}

export type ContentfulStackText2TextNodeConnectionMaxArgs = {
  field: ContentfulStackText2TextNodeFieldsEnum
}

export type ContentfulStackText2TextNodeConnectionMinArgs = {
  field: ContentfulStackText2TextNodeFieldsEnum
}

export type ContentfulStackText2TextNodeConnectionSumArgs = {
  field: ContentfulStackText2TextNodeFieldsEnum
}

export type ContentfulStackText2TextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulStackText2TextNodeFieldsEnum
}

export type ContentfulStackText2TextNodeEdge = {
  next?: Maybe<ContentfulStackText2TextNode>
  node: ContentfulStackText2TextNode
  previous?: Maybe<ContentfulStackText2TextNode>
}

export type ContentfulStackText2TextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "text2"
  | "sys___type"

export type ContentfulStackText2TextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulStackText2TextNodeEdge>
  nodes: Array<ContentfulStackText2TextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulStackText2TextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulStackText2TextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulImageCardsTextTextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulImageCardsTextTextNodeEdge>
  nodes: Array<ContentfulImageCardsTextTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulImageCardsTextTextNodeGroupConnection>
}

export type ContentfulImageCardsTextTextNodeConnectionDistinctArgs = {
  field: ContentfulImageCardsTextTextNodeFieldsEnum
}

export type ContentfulImageCardsTextTextNodeConnectionMaxArgs = {
  field: ContentfulImageCardsTextTextNodeFieldsEnum
}

export type ContentfulImageCardsTextTextNodeConnectionMinArgs = {
  field: ContentfulImageCardsTextTextNodeFieldsEnum
}

export type ContentfulImageCardsTextTextNodeConnectionSumArgs = {
  field: ContentfulImageCardsTextTextNodeFieldsEnum
}

export type ContentfulImageCardsTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulImageCardsTextTextNodeFieldsEnum
}

export type ContentfulImageCardsTextTextNodeEdge = {
  next?: Maybe<ContentfulImageCardsTextTextNode>
  node: ContentfulImageCardsTextTextNode
  previous?: Maybe<ContentfulImageCardsTextTextNode>
}

export type ContentfulImageCardsTextTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "text"
  | "sys___type"

export type ContentfulImageCardsTextTextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulImageCardsTextTextNodeEdge>
  nodes: Array<ContentfulImageCardsTextTextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulImageCardsTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageCardsTextTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulGeneralCardDescriptionTextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulGeneralCardDescriptionTextNodeEdge>
  nodes: Array<ContentfulGeneralCardDescriptionTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulGeneralCardDescriptionTextNodeGroupConnection>
}

export type ContentfulGeneralCardDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulGeneralCardDescriptionTextNodeFieldsEnum
}

export type ContentfulGeneralCardDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulGeneralCardDescriptionTextNodeFieldsEnum
}

export type ContentfulGeneralCardDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulGeneralCardDescriptionTextNodeFieldsEnum
}

export type ContentfulGeneralCardDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulGeneralCardDescriptionTextNodeFieldsEnum
}

export type ContentfulGeneralCardDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulGeneralCardDescriptionTextNodeFieldsEnum
}

export type ContentfulGeneralCardDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulGeneralCardDescriptionTextNode>
  node: ContentfulGeneralCardDescriptionTextNode
  previous?: Maybe<ContentfulGeneralCardDescriptionTextNode>
}

export type ContentfulGeneralCardDescriptionTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "description"
  | "sys___type"

export type ContentfulGeneralCardDescriptionTextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulGeneralCardDescriptionTextNodeEdge>
  nodes: Array<ContentfulGeneralCardDescriptionTextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulGeneralCardDescriptionTextNodeSortInput = {
  fields?: Maybe<
    Array<Maybe<ContentfulGeneralCardDescriptionTextNodeFieldsEnum>>
  >
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulEmployeeCardDescriptionTextNodeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulEmployeeCardDescriptionTextNodeEdge>
  nodes: Array<ContentfulEmployeeCardDescriptionTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulEmployeeCardDescriptionTextNodeGroupConnection>
}

export type ContentfulEmployeeCardDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulEmployeeCardDescriptionTextNodeFieldsEnum
}

export type ContentfulEmployeeCardDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulEmployeeCardDescriptionTextNodeFieldsEnum
}

export type ContentfulEmployeeCardDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulEmployeeCardDescriptionTextNodeFieldsEnum
}

export type ContentfulEmployeeCardDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulEmployeeCardDescriptionTextNodeFieldsEnum
}

export type ContentfulEmployeeCardDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulEmployeeCardDescriptionTextNodeFieldsEnum
}

export type ContentfulEmployeeCardDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulEmployeeCardDescriptionTextNode>
  node: ContentfulEmployeeCardDescriptionTextNode
  previous?: Maybe<ContentfulEmployeeCardDescriptionTextNode>
}

export type ContentfulEmployeeCardDescriptionTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "description"
  | "sys___type"

export type ContentfulEmployeeCardDescriptionTextNodeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulEmployeeCardDescriptionTextNodeEdge>
  nodes: Array<ContentfulEmployeeCardDescriptionTextNode>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulEmployeeCardDescriptionTextNodeSortInput = {
  fields?: Maybe<
    Array<Maybe<ContentfulEmployeeCardDescriptionTextNodeFieldsEnum>>
  >
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePluginConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___isTSX"
  | "pluginOptions___jsxPragma"
  | "pluginOptions___allExtensions"
  | "pluginOptions___resetCSS"
  | "pluginOptions___isUsingColorMode"
  | "pluginOptions___spaceId"
  | "pluginOptions___accessToken"
  | "pluginOptions___host"
  | "pluginOptions___environment"
  | "pluginOptions___downloadLocal"
  | "pluginOptions___forceFullSync"
  | "pluginOptions___pageLimit"
  | "pluginOptions___assetDownloadWorkers"
  | "pluginOptions___useNameForId"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___base64Width"
  | "pluginOptions___stripMetadata"
  | "pluginOptions___defaultQuality"
  | "pluginOptions___failOnError"
  | "pluginOptions___short_name"
  | "pluginOptions___start_url"
  | "pluginOptions___background_color"
  | "pluginOptions___theme_color"
  | "pluginOptions___display"
  | "pluginOptions___icon"
  | "pluginOptions___legacy"
  | "pluginOptions___theme_color_in_head"
  | "pluginOptions___cache_busting_mode"
  | "pluginOptions___crossOrigin"
  | "pluginOptions___include_favicon"
  | "pluginOptions___cacheDigest"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords"

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "buildTime"

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContentTypeConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ContentfulContentTypeGroupConnection>
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous?: Maybe<ContentfulContentType>
}

export type ContentfulContentTypeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "name"
  | "displayField"
  | "description"
  | "sys___type"

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = {
  contentfulHomePage?: Maybe<
    Pick<ContentfulHomePage, "slug"> & {
      homeBanner?: Maybe<
        Pick<ContentfulBanner, "heading" | "subHeader"> & {
          backgroundImage?: Maybe<Pick<ContentfulAsset, "gatsbyImageData">>
        }
      >
      belowHero?: Maybe<{
        image?: Maybe<Pick<ContentfulAsset, "gatsbyImageData">>
        text?: Maybe<Pick<ContentfulTextAndImageTextTextNode, "text">>
      }>
      ctaStack?: Maybe<{
        text?: Maybe<Pick<ContentfulStackTextTextNode, "text">>
        text2?: Maybe<Pick<ContentfulStackText2TextNode, "text2">>
      }>
      howWeHelpStack?: Maybe<{
        text?: Maybe<Pick<ContentfulStackTextTextNode, "text">>
        text2?: Maybe<Pick<ContentfulStackText2TextNode, "text2">>
        cards?: Maybe<
          Array<
            Maybe<
              Pick<ContentfulGeneralCard, "title" | "internalLink"> & {
                icon?: Maybe<Pick<ContentfulAsset, "gatsbyImageData">>
                description?: Maybe<
                  Pick<ContentfulGeneralCardDescriptionTextNode, "description">
                >
              }
            >
          >
        >
      }>
    }
  >
}

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_2_Query = { site?: Maybe<Pick<Site, "buildTime">> }
