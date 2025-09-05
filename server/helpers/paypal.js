const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUESu29ZC9um8ZiikM4V6oPNaqEGtP3wHAvZmWv1ajBwalJleM4EXk-XlUSOrljr2w3_6tlh0PKDOoiX",
  client_secret: "ENxGkZ1rkhvUQoyq28wwsbHOjwHP6Ws9djsqVsN6wKjBxtQhMfwkMOtOK8A0tNBKuseFAuqqBNULFeso",
});

module.exports = paypal;
