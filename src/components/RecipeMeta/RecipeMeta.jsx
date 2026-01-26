import MetaElement from "./MetaElement"
export default function RecipeMeta({durationMinutes, temperatureC}) {
    return(
        <div className="row g-5">
            <MetaElement icon="⏱️" label="Время" value={durationMinutes} unit="мин"/>
            <MetaElement icon="🌡️" label="Температура" value={temperatureC} unit="C"/>
        </div>
    )
}