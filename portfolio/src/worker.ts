import handler, { createScheduledHandler, PluginBridge } from "@emdash-cms/cloudflare/worker";

export { PluginBridge };

export default {
  async fetch(request, env, ctx) {
    return handler.fetch(request, env, ctx);
  },
  scheduled: createScheduledHandler(),
} satisfies ExportedHandler;
