export interface IpokemonListResponse {
    count: number
    next: String
    previous: null
    results: IpokemonListItem[]
}

export interface IpokemonListItem {
    name: string

    url: string

}