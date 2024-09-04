import Jabber from "jabber";

export function talkBullshit() {
  return new Jabber().createParagraph(30);
}
