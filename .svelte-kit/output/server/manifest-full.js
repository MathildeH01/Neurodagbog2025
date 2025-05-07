export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.C8dhSgqu.js",app:"_app/immutable/entry/app.4D3f-Mo8.js",imports:["_app/immutable/entry/start.C8dhSgqu.js","_app/immutable/chunks/DkbPjpQJ.js","_app/immutable/chunks/B_UksNYh.js","_app/immutable/chunks/B8Sr3TeM.js","_app/immutable/entry/app.4D3f-Mo8.js","_app/immutable/chunks/B_UksNYh.js","_app/immutable/chunks/DwwkROG5.js","_app/immutable/chunks/CdoNKn-D.js","_app/immutable/chunks/BBJgEPe-.js","_app/immutable/chunks/B3657Upb.js","_app/immutable/chunks/B8Sr3TeM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
