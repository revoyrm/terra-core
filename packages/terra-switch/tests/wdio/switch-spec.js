Terra.describeViewports('Switch', ['tiny', 'medium', 'large'], () => {
  const ignoredDisabledAlly = { 'color-contrast': { enabled: false } };
  describe('DefaultSwitch', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/default-switch'));
    browser.refresh();
    Terra.it.validatesElement('', { rules: ignoredDisabledAlly });

    describe('Focus', () => {
      before(() => {
        browser.keys('Tab');
      });

      Terra.it.validatesElement({ rules: ignoredDisabledAlly });
    });

    describe('Checked', () => {
      before(() => {
        browser.waitForVisible('#defaultSwitch');
        browser.click('[for="defaultSwitch"]');
      });

      Terra.it.validatesElement({ rules: ignoredDisabledAlly });
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/disabled-switch'));

    Terra.it.validatesElement({ rules: ignoredDisabledAlly });

    describe('Disabled Click', () => {
      before(() => {
        browser.moveToObject('#disabledSwitch');
        browser.click('[for="disabledSwitch"]');
      });

      Terra.it.validatesElement({ rules: ignoredDisabledAlly });
    });
  });

  describe('Long Label Text', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/label-wrap'));

    browser.moveToObject('#root', 100, 1);
    Terra.it.validatesElement({ rules: ignoredDisabledAlly });
  });
});