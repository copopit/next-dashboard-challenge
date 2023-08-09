CREATE TABLE IF NOT EXISTS products
(
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    price numeric(10,2) NOT NULL,
)
;
