module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename))
    return assetFilename
  },
}
