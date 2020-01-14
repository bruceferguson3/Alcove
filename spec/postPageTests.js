import * as ListingForm from '../client/src/components/post_page/ListingForm.jsx'

describe('Post Page', () => {

  it('show list function should toggle hidden/shown', function() {
    var element = document.getElementById('defaultCheck4');
    ListingForm.showList('defaultCheck4');
    expect(element).toBeHidden()
  })
  
});