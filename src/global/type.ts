export type RootObject = {
    results: Result[];
    info: Info;
};

export type StorageData = {
    name: Name,
    age: number,
}

export type Result = {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
};

type Name = {
    title: string;
    first: string;
    last: string;
};

type Location = {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number | string;  // postcode can sometimes be a string depending on the country
    coordinates: Coordinates;
    timezone: Timezone;
};

type Street = {
    number: number;
    name: string;
};

type Coordinates = {
    latitude: string;
    longitude: string;
};

type Timezone = {
    offset: string;
    description: string;
};

type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
};

type Dob = {
    date: string;
    age: number;
};

type Registered = {
    date: string;
    age: number;
};

type Id = {
    name: string;
    value: string | null; // value could be null
};

type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
};

type Info = {
    seed: string;
    results: number;
    page: number;
    version: string;
};
