const users = document.getElementsByClassName('hnuser');

css(`
  .friends {
    background-color: #ff6600;
    color: #fff !important;
    padding: 0.25em;
  }

  .friends.tagged::after {
    background: url("${chrome.extension.getURL("img/tag.svg")}") no-repeat 0 0 / 1em 0.75em;
    content: "";
    display: inline-block;
    height: 1em;
    margin-inline-start: 0.25em;
    vertical-align: middle;
    width: 1em;
  }
`);

(async () => {
  const { friends, tags } = await data;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const username = user.innerHTML;

    if (friends.has(username)) {
      user.classList.add('friends');
    }
    if (username in tags) {
      user.title = tags[username];
      user.classList.add("tagged");
    }
  }
})();
