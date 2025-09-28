const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjEzMzU5NjEsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgzNTkwYkQzMzM0ZTM0Mzk4NTNCRjhkNDJDQTgzYzg0ZGUxQ0M2MzVDIn0",
    payload: "eyJkb21haW4iOiJiYXNlLW15LW1pbmlraXQtYXBwLnZlcmNlbC5hcHAifQ",
    signature: "MHg3NjU2ZjYyMWQ2MDk2ZWY0NTJhYzkwNTU0NzI4MjgyMDU2MmY1YjAxZmJjNWVjYzU3NTcwZjEwYjFhZjJkM2FkN2NjYmZhZTk5YzY3YmQwYTBlYzI5MzRmMzUyM2MwMTM4YTUzMDExYjNkODgxYTE2ZWFkYzQ1M2Q3ZGM1YmFjMzFi",
  },
  baseBuilder: {
    allowedAddresses: ["0x8Ee0A57761b6B4e09c5F4dE176130E2438D6CB27"],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "my-minikit-app-subtitle",
    description: "my-minikit-app-description",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
