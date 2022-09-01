const callbackPrompt = {
  message: 'Your namber scoundrel',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};

//-data test
callbackPrompt.showDeferredPrompt(1000);
