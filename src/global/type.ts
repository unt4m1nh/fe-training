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
    id: Id | null;
    picture: Picture;
    nat: string;
};

export type Name = {
    title: string;
    first: string;
    last: string;
};

type Location = {
    street: Street | null;
    city: string;
    state: string | null;
    country: string | null;
    postcode: number | string | null;  
    coordinates: Coordinates | null;
    timezone: Timezone | null;
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
