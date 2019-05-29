# spambotjs-rewrite
forked from my other account, @valrym , rewrote for efficiency.

# setup

install nodejs and install the following packages
1) discord.js
2) fs

then, create a bat called runbot.bat with the following code inside of it.

node bot.js
end

your tokens go into the json array in "accounts.json" with the following format

[
  "token1",
  "token2",
  "token3"
  // and so on
] 

if you only have a few tokens, you'll have to reset the number in the currentaccount.txt every so often
(remember: json arrays start at 0, not 1.)

# how to login with only a token

go to token-login.txt and read through it.

# final notes
make sure the user bot is only in one server, and make sure the bots not running until you have successfully logged in via token and joined the server you'd like to test on.

i am not liable for any accounts being banned or disabled from discord ("the service") as "the service" has its own terms of service i cannot guarantee against.
