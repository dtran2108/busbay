import { IonIcon, IonItem, IonLabel, IonList, IonSpinner } from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import './index.css'
import { busOutline, pinOutline } from "ionicons/icons"

export default function BustopListQuery({ query }: { query: string | number }) {
    const { isFetching, error, data } = useQuery(['user-bustops', query], {
        queryFn: () =>
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${query}`).then(
                (res) => res.json(),
            ),
        enabled: !!query
    })

    return <div style={{ width: "100%" }}>
        {isFetching && <IonSpinner />}
        {data?.length ? <IonList className="full rounded">
            {data?.map((item: any) => <IonItem className="list-item">
                <IonIcon aria-hidden="true" icon={pinOutline} />
                <span style={{paddingRight:5}}>{item?.id}</span>
                <IonLabel className="full">{item?.email}</IonLabel>
            </IonItem>)}
        </IonList> : null}
    </div>
}
