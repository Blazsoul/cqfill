export const postcssCQFill = Object.assign(
	function postcssCQFill() {
		return {
			postcssPlugin: 'PostCSS CQFill',
			Declaration: {
				contain(cssDeclaration) {
					cssDeclaration.cloneBefore({
						prop: '--css-contain'
					})
				}
			},
			AtRule: {
				container(cssAtRule) {
					cssAtRule.cloneBefore({
						name: 'media',
						params: `--css-container and ${cssAtRule.params}`
					})
				}
			}
		}
	},
	{ postcss: true }
)