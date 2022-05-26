# js-rest-query-builder
Simple JS query bilder for filters, ordering and search

REQUIRED TO INPUT OUR PROPS LIST WITH QUARIES. EXAMPLE:




<code>
  const filters = ['page', 'social', 'category', 'type_transfer'] 
  const search = ['name'] 
  const ordering = ['last_upped', 'date_created', 'members', 'price', 'income'] 
</code>



<code>
data = {
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
    
</code>

#> buildQuery<typeof data>(data, filters, search, ordering) or buildQuery<typeof data>(data, [], [], ordering)
  
