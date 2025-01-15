export default function Reviews({params}:{params:{
    profileId: string,
    reviewId: string
}})
{
    return <h1>This is review: {params.reviewId} and profile id: {params.profileId}</h1>
}