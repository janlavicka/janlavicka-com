import { Item } from "@/components/Item";
import { List } from "@/components/List";
import { Text } from "@/components/Text";
import { createMeta } from "@/utils/meta";
import { json, MetaFunction } from "@remix-run/node";

type Loader = typeof loader;

export const meta: MetaFunction<Loader> = (args) => {
  if (!args.data) return [];

  return createMeta(
    [
      {
        tagName: "link",
        rel: "canonical",
        href: args.data.meta.url,
      },
      {
        title: "Uses - Jan Lavička",
      },
    ],
    args,
  );
};

export const loader = async () => {
  return json({
    meta: {
      url: `${process.env.APP_URL}/uses`,
    },
  });
};

export default function Page() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl">Uses</h1>

      <div className="mb-8">
        <Text>
          <p>
            If is someone intrested in my setup, and what tools I use, here is a
            list organized by type of tool/app in my toolbelt.
          </p>
        </Text>
      </div>

      <h2 className="text-lg font-bold text-gray-900">Desktop Apps</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.google.com/chrome/"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Google Chrome
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://code.visualstudio.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Visual Studio Code
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://sparkmailapp.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Spark
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://ticktick.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              TickTick
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.postman.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Postman
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://tableplus.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              TablePlus
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://filezilla-project.org"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              FileZilla
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://hyper.is"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Hyper
            </a>{" "}
            with{" "}
            <a
              href="https://github.com/wesbos/hyperterm-cobalt2-theme"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Cobalt2 theme
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.loom.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Loom
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://www.pixelmator.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Pixelmator
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://slack.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Slack
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://slack.com"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Sublime Text 3
            </a>{" "}
            with{" "}
            <a
              href="https://github.com/wesbos/cobalt2"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Cobalt2 theme
            </a>
          </p>
        </Item>
      </List>

      <h2 className="text-lg font-bold text-gray-900">Terminal Tools</h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://brew.sh"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Homebrew
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://github.com/nvm-sh/nvm"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              NVM
            </a>
          </p>
        </Item>
      </List>

      <h2 className="text-lg font-bold text-gray-900">
        Visual Studio Code Extensions
      </h2>

      <List>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Cobalt2 Theme Official
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              GitHub Codespaces
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              GitHub Copilot
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Import Cost
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              VSCode Great Icons
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Prettier - Code Formatter
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Tailwind CSS IntelliSense
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=heybourn.headwind"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Headwind
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=steoates.autoimport"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Auto Import
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              NPM
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=Prisma.prisma"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Prisma
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              Git Graph
            </a>
          </p>
        </Item>
        <Item>
          <p className="leading-normal">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
              className="font-bold text-gray-900 underline hover:text-blue-500"
            >
              GitLens — Git Supercharged
            </a>
          </p>
        </Item>
      </List>
    </div>
  );
}
