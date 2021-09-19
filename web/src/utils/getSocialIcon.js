const getSocialIcon = function (platform) {
  return `<img src="/_includes/partials/icons/social-${platform}.svg" width="24" height="24" alt="${platform} logo" />`
}

module.exports = getSocialIcon
