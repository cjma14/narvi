const title = "Invierte en tu éxito";
const subTitle = "Nuestros planes están diseñados para ofrecerte el máximo valor";
const badge = "";
const thirdOption = "¿Quiere algo más específico?";
const btnText = "Obtener Cotización";
const starterKit = {
	name: "Especialista",
	description: "La mejor opción para profecionales independientes",
	price: "13.000",
	cents: ".00",
	billingFrequency: "CLP / Mensuales",
	features: [
		"Asesoría técnica",
		"Soporte técnico",
		"Evaluaciones ilimitadas"
	],
	purchaseBtnTitle: "Obtener el plan especialista",
	purchaseLink: "/contact"
};
const professionalToolbox = {
	name: "Institucional",
	description: "Dirigido a esas instituciones que deseen mejorar sus procesos",
	price: "350.000",
	cents: ".00",
	billingFrequency: "CLP / Anual",
	features: [
		"Asesoría técnica",
		"Soporte técnico",
		"Evaluaciones ilimitadas",
		"Cuenta de administrador institucional"
	],
	purchaseBtnTitle: "Obtener el plan institucional",
	purchaseLink: "/contact"
};
const certification = {
	name: "Certificación",
	description: "Certificación online de la mano del autor de TBA. Doctor Pablo San Martín Catalán",
	price: "18.000",
	cents: ".00",
	billingFrequency: "CLP / Unicos",
	features: [
		"3 Horas de preparación",
		"Libro del TBA en versión digital"
	],
	purchaseBtnTitle: "Obtener certificación TBA",
	purchaseLink: "/contact"
};
const pricing = {
	title: title,
	subTitle: subTitle,
	badge: badge,
	thirdOption: thirdOption,
	btnText: btnText,
	starterKit: starterKit,
	professionalToolbox: professionalToolbox,
	certification: certification
};

export { pricing as p };
