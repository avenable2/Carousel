'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /blog when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/blog");
  });


  describe('blog', function() {

    beforeEach(function() {
      browser.get('index.html#!/blog');
    });


    it('should render blog when user navigates to /blog', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('portfolio', function() {

    beforeEach(function() {
      browser.get('index.html#!/portfolio');
    });


    it('should render portfolio when user navigates to /portfolio', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
