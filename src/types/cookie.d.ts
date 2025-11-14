declare module "cookie" {
	interface CookieParseOptions {
		decode?(value: string): string
	}

	interface CookieSerializeOptions {
		maxAge?: number
		domain?: string
		path?: string
		expires?: Date
		httpOnly?: boolean
		secure?: boolean
		sameSite?: true | false | "lax" | "strict" | "none"
		encode?(value: string): string
	}

	function parse(cookieHeader: string, options?: CookieParseOptions): Record<string, string>
	function serialize(name: string, value: string, options?: CookieSerializeOptions): string

	export { parse, serialize, CookieParseOptions, CookieSerializeOptions }
}
