Deno.serve(async (_req) => {
	try {
		const file = await Deno.open("index.html", { read: true });
		return new Response(file.readable, {
			headers: { "content-type": "text/html; charset=utf-8" },
		});
	} catch {
		return new Response("404 Not Found", { status: 404 });
	}
});
