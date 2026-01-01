/* ---------------------------------- Idea ---------------------------------- */

struct Filter {
	dateRange: (string, string)
	category: string
}

struct WidgetConfig {
	id: string
	type: "chart" | "stat" // could be an enum, or just compiled away
	options: any
}






component Dashboard() {
	fn addWidget() => widgets.push({ id: randomId(), type: "chart", options: {} })

	return <>
		<h1>Analytics Dashboard</h1>
		<FilterPanel/>
		<button onClick={addWidget}>Add Widget</button>
		{widgets.map((w, i) => <Widget config={w} filter={globalFilter} &instances[i]/>)}
		<SaveDashboard filter={globalFilter} widgets={widgets} />
	</>
}




/* --------------------------------- Target --------------------------------- */


// Types
type Filter = {
	dateRange: [string, string]
	category: string
}
type WidgetConfig = {
	id: string
	type: "chart" | "stat"
	options: any
}

// GLOBAL FILTER STATE
@state {
	globalFilter: Filter = {
		dateRange: ["2024-01-01", "2024-12-31"],
		category: "all"
	}
	widgets: WidgetConfig[] = []
}

@ref {
	instances: Widget[]
}

component FilterPanel() {
	@ref {
		dateInput: DateRangeInput
		categoryInput: SelectInput
	}

	@bind globalFilter.dateRange <-> dateInput.value
	@bind globalFilter.category <-> categoryInput.value

	return <>
		<DateRangeInput &dateInput/>
		<SelectInput options={["all", "books", "music"]} &categoryInput/>
	</>
}

component Widget(config: WidgetConfig, filter: Filter) {
	@state {
		localOptions: any = config.options
	}
	
	// Data is derived based on filter + options
	let data = fetchData(config.id, filter, localOptions)

	return <>
		<h3>{config.id}</h3>
		{config.type == "chart" ? <Chart data options={localOptions}/> :
		 <StatBox data />}
	</>
}

component SaveDashboard(filter: Filter, widgets: WidgetConfig[]) {
	fn save() => sendToServer({ filter, widgets })

	return <button onClick={save}>Save Dashboard</button>
}

component Dashboard() {
	fn addWidget() => widgets.push({ id: randomId(), type: "chart", options: {} })

	return <>
		<h1>Analytics Dashboard</h1>
		<FilterPanel/>
		<button onClick={addWidget}>Add Widget</button>
		{widgets.map((w, i) => <Widget config={w} filter={globalFilter} &instances[i]/>)}
		<SaveDashboard filter={globalFilter} widgets={widgets} />
	</>
}


