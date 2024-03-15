export const servicesTable = () => {
    const DOM = {}
    const state = {
        activeGenderId: undefined,
        activeFormatId: undefined,
        activePackageId: undefined
    }
    let sericeTableData = {}


    const cacheDOM = () => {
        DOM.root = document.querySelector('[data-services-table]')
        DOM.genderBtns = DOM.root.querySelectorAll('[data-gender-btn]')
        DOM.formatBtns = DOM.root.querySelectorAll('[data-format-btn]')
        DOM.packageBtns = DOM.root.querySelectorAll('[data-package-btn]')
        DOM.tableWrapper = DOM.root.querySelector('[data-table-wrapper]')
    }
    
    const handleOnClickGenderBtn = (e) => {
        const genderId = e.target.dataset.genderBtn

        if (!genderId) throw Error('Gender Id is undefined')

        state.activeGenderId = +genderId

        render()
    }

    const handleOnClickFormatBtn = (e) => {
        const formatId = e.target.dataset.formatBtn

        if (!formatId) throw Error('Gender Id is undefined')

        state.activeFormatId = +formatId

        render()
    }

    const handleOnClickPackageBtn = (e) => {
        const packageId = e.target.dataset.packageBtn

        if (!packageId) throw Error('Gender Id is undefined')

        state.activePackageId = +packageId

        render()
    }

    const bindEvents = () => {
        DOM.genderBtns.forEach(btn => btn.addEventListener('click', handleOnClickGenderBtn))
        DOM.formatBtns.forEach(btn => btn.addEventListener('click', handleOnClickFormatBtn))
        DOM.packageBtns.forEach(btn => btn.addEventListener('click', handleOnClickPackageBtn))
    }

    const initDefaultState = () => {
        if (!DOM.genderBtns && DOM.genderBtns.length === 0)  throw Error('genderBtns is undefined')
        if (!DOM.formatBtns && DOM.formatBtns.length === 0) throw Error('formatBtns is undefined')
        if (!DOM.packageBtns && DOM.packageBtns.length === 0)  throw Error('packageBtns is undefined')

        state.activeGenderId = +DOM.genderBtns[0].dataset.genderBtn
        state.activeFormatId = +DOM.formatBtns[0].dataset.formatBtn
        state.activePackageId = +DOM.packageBtns[0].dataset.packageBtn
        
        sericeTableData = JSON.parse(DOM.root.dataset.tableJson)
    }

    const render = () => {
        const tableData = sericeTableData.services.filter(({gender_id, format_id}) => gender_id === state.activeGenderId && format_id === state.activeFormatId)
        const discountPercentage = sericeTableData.packages.find(({id}) => id === state.activePackageId)?.discount_percentage

        DOM.genderBtns.forEach(btn => btn.classList.toggle('is-active', +btn.dataset.genderBtn === state.activeGenderId))
        DOM.formatBtns.forEach(btn => btn.classList.toggle('is-active', +btn.dataset.formatBtn === state.activeFormatId))
        DOM.packageBtns.forEach(btn => btn.classList.toggle('is-active', +btn.dataset.packageBtn === state.activePackageId))

        if (tableData.length === 0)  {
            return DOM.tableWrapper.innerHTML = `<h2>Ничего не найдено</h2>`
        }

        return DOM.tableWrapper.innerHTML = tableData.map(({name, price: defaultPrice, time, id}) => {
            const price = discountPercentage && discountPercentage > 0 ? defaultPrice - (defaultPrice * (discountPercentage / 100)) : defaultPrice

            return `
                <div class="prices__line">
                    <p class="prices__text">${name}</p>
                    <p class="prices__text prices__text--bold">${time}</p>
                    <p class="prices__text prices__text--price prices__text--bold">${discountPercentage ? '<span class="prices__text--defaultPrice">' + defaultPrice.toLocaleString('ru-RU') + '</span>' : ''}${price.toLocaleString('ru-RU')} ₽</p>
                    <button class="prices__text prices__text--grey" data-service-btn-id="${id}">Записаться</button>
                </div>
            `
        }).join('')
    }

    const init = () => {
        cacheDOM()
        initDefaultState()
        bindEvents()

        render() 
    }

    return {
        init: init
    }
}