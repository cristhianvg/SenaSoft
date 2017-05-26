/************ Update: Schemas ***************/

ALTER SCHEMA "schemaA" RENAME TO public;





/************ Update: Tables ***************/

/******************** Add Table: public.articulo ************************/

/* Build Table Structure */
CREATE TABLE public.articulo
(
	id INTEGER DEFAULT nextval('articulo_id_seq'::regclass) NOT NULL,
	codigo BIGINT NOT NULL,
	nombre_articulo VARCHAR(20) NOT NULL,
	descripcion VARCHAR(20) NOT NULL,
	usuario_id INTEGER NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE public.articulo ADD CONSTRAINT pkarticulo
	PRIMARY KEY (id);

/* Add Indexes */
CREATE INDEX "articulo_usuario_id_Idx" ON public.articulo USING btree (usuario_id);

CREATE INDEX "articulos_codigo_Idx" ON public.articulo USING btree (codigo);


/******************** Add Table: public.inventario ************************/

/* Build Table Structure */
CREATE TABLE public.inventario
(
	id INTEGER DEFAULT nextval('inventario_id_seq'::regclass) NOT NULL,
	articulo_id INTEGER NOT NULL,
	cantidad BIGINT NOT NULL,
	usuario_id INTEGER NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE public.inventario ADD CONSTRAINT pkinventario
	PRIMARY KEY (id);


/******************** Add Table: public.usuario ************************/

/* Build Table Structure */
CREATE TABLE public.usuario
(
	id INTEGER DEFAULT nextval('usuario_id_seq'::regclass) NOT NULL,
	usuario VARCHAR(20) NOT NULL,
	contrasena VARCHAR(32) NOT NULL,
	rol VARCHAR(20) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE public.usuario ADD CONSTRAINT pkusuario
	PRIMARY KEY (id);

/* Add Indexes */
CREATE UNIQUE INDEX "usuario_nombre_usuario_Idx" ON public.usuario USING btree (usuario);





/************ Add Foreign Keys ***************/

/* Add Foreign Key: fk_articulos_usuario */
ALTER TABLE public.articulo ADD CONSTRAINT fk_articulos_usuario
	FOREIGN KEY (usuario_id) REFERENCES public.usuario (id)
	ON UPDATE RESTRICT ON DELETE RESTRICT;

/* Add Foreign Key: fk_inventario_articulo */
ALTER TABLE public.inventario ADD CONSTRAINT fk_inventario_articulo
	FOREIGN KEY (articulo_id) REFERENCES public.articulo (id)
	ON UPDATE RESTRICT ON DELETE RESTRICT;

/* Add Foreign Key: fk_inventario_usuario */
ALTER TABLE public.inventario ADD CONSTRAINT fk_inventario_usuario
	FOREIGN KEY (usuario_id) REFERENCES public.usuario (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;