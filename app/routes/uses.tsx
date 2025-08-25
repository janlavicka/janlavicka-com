import { Item, List, Text } from "@/components";

export function meta() {
  return [
    {
      tagName: "link",
      rel: "canonical",
      content: `${import.meta.env.VITE_APP_URL}/uses`,
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      title: "Uses • Jan Lavička",
    },
    {
      name: "description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },

    // Open Graph
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:site_name",
      content: "Jan Lavička",
    },
    {
      property: "og:url",
      content: `${import.meta.env.VITE_APP_URL}/uses`,
    },
    {
      property: "og:title",
      content: "Uses",
    },
    {
      property: "og:description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      property: "og:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@janlavicka",
    },
    {
      name: "twitter:title",
      content: "Uses",
    },
    {
      name: "twitter:description",
      content: "Jan Lavička's personal website. I'm a creator, full-stack software developer, and indie hacker.",
    },
    {
      name: "twitter:image",
      content: `${import.meta.env.VITE_APP_URL}/images/social.jpg`,
    },
  ];
}


export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Uses</h1>

      <div className="mb-8">
        <Text>
          <p>
            If is someone intrested in my setup, and what tools I use, here is a list organized by type of tool/app in
            my toolbelt.
          </p>
        </Text>
      </div>

      <h2 className="text-lg font-bold text-neutral-900">Desktop Apps</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.google.com/chrome/"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Google Chrome
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://code.visualstudio.com"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Visual Studio Code
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a href="https://www.postman.com" className="font-bold underline text-neutral-900 hover:text-blue-500">
              Postman
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a href="https://tableplus.com" className="font-bold underline text-neutral-900 hover:text-blue-500">
              TablePlus
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://filezilla-project.org"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              FileZilla
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a href="https://hyper.is" className="font-bold underline text-neutral-900 hover:text-blue-500">
              Hyper
            </a>{" "}
            with{" "}
            <a
              href="https://github.com/wesbos/hyperterm-cobalt2-theme"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Cobalt2 theme
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a href="https://www.loom.com" className="font-bold underline text-neutral-900 hover:text-blue-500">
              Loom
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a href="https://slack.com" className="font-bold underline text-neutral-900 hover:text-blue-500">
              Slack
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a href="https://slack.com" className="font-bold underline text-neutral-900 hover:text-blue-500">
              Sublime Text 3
            </a>{" "}
            with{" "}
            <a
              href="https://github.com/wesbos/cobalt2"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Cobalt2 theme
            </a>
          </p>
        </Item>
      </List>

      <h2 className="text-lg font-bold text-neutral-900">Terminal Tools</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a href="https://brew.sh" className="font-bold underline text-neutral-900 hover:text-blue-500">
              Homebrew
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://github.com/nvm-sh/nvm"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              NVM
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.anthropic.com/claude-code"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Cloude Code
            </a>
          </p>
        </Item>
      </List>

      <h2 className="text-lg font-bold text-neutral-900">Visual Studio Code Extensions</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Cobalt2 Theme Official
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              GitHub Copilot
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Import Cost
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              VSCode Great Icons
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Prettier - Code Formatter
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Tailwind CSS IntelliSense
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=heybourn.headwind"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Headwind
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=steoates.autoimport"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Auto Import
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              NPM
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              Git Graph
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
              className="font-bold underline text-neutral-900 hover:text-blue-500"
            >
              GitLens — Git Supercharged
            </a>
          </p>
        </Item>
      </List>
    </div>
  );
}
