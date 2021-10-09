import { View, WebGen } from "@lucsoft/webgen";
import { renderAvatars } from "./components/avatars";
import { renderCards } from "./components/cards";
import { renderTitle } from "./components/title";

WebGen()

View(({use: draw}) => {
    draw(renderAvatars())
    draw(renderTitle())
    draw(renderCards())
}).setMaxWidth('40rem').appendOn(document.body)