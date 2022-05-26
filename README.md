# js-rest-query-builder
Simple JS query bilder for filters, ordering and search

REQUIRED TO INPUT OUR PROPS LIST WITH QUARIES. EXAMPLE:


> const filters = ['page', 'social', 'category', 'type_transfer']
 const search = ['name']  
 const ordering = ['last_upped', 'date_created', 'members', 'price', 'income']


> data = {
  	page: 1,
  	social: 1,
  	category: 1,
  	type_transfer: 1,
  	name: 'Some string',
  	last_upped: '',
  	date_created: 'date_created',
  	members: '-members'
  	price: '',
  	income: ''
}

>buildQuery<typeof data>(data, filters, search, ordering) or buildQuery<typeof data>(data, [], [], ordering)
