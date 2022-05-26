function buildQuery<T>(props: T, filters: string[], search: string[], ordering: string[]) {
    let query = '?'

    if (filters.length) {
        for (const [key, value] of Object.entries(props)) {
            if (key in filters && value) {
                query += key + '=' + value + '&'
            }
        }
    }

    if (search.length) {
        let count = 0
        for (const [key, value] of Object.entries(props)) {
            if (key in ordering && value !== '') {
                count += 1
            }
        }
        if (count > 0) {
            query += 'search='
            for (const [key, value] of Object.entries(props)) {
                if (key in search && value !== '') {
                    query += value + ','
                }
            }
        }
        if (query[-1] === ',') {
            query = query.slice(0, -1)
        }
        if (query[-1] !== '&') {
            query += '&'
        }
    }

    if (ordering.length) {
        let count = 0
        for (const [key, value] of Object.entries(props)) {
            if (key in ordering && value !== '') {
                count += 1
            }
        }
        if (count > 0) {
            query += 'ordering='
            for (const [key, value] of Object.entries(props)) {
                if (key in ordering && value !== '') {
                    query += value + ','
                }
            }
        }
        if (query[-1] == ',') {
            query = query.slice(0, -1)
        }
    }

    return query
}
