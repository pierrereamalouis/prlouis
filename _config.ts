import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import jsx from "lume/plugins/jsx.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import modify_urls from "lume/plugins/modify_urls.ts";
import nav from "lume/plugins/nav.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import source_maps from "lume/plugins/source_maps.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume({
  src: "./src",
});

site.use(attributes());
site.use(base_path());
site.use(code_highlight());
site.use(date());
site.use(esbuild());
site.use(jsx());
site.use(jsx_preact());
site.use(lightningcss());
site.use(mdx());
site.use(metas());
site.use(minify_html());
site.use(modify_urls());
site.use(nav());
site.use(sass());
site.use(sitemap());
site.use(slugify_urls());
site.use(source_maps());
site.use(tailwindcss());
site.use(postcss());

site.addEventListener("beforeUpdate", (event) => {
  console.log("New changes detected");
  console.log(event.files); // The files that have changed
});

export default site;
