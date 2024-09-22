export default {
  common: {
    battery: "Batterie",
    fuel: "Carburant",
    range: "Autonomie",
    charging: "Chargement",
    mileage: "Kilométrage",
    location: "Emplacement",
    car_state: "État du véhicule",
    charge_limit: "Limite de charge",
    engine_on: "Moteur en marche",
    away: "Absent",
    charging_end_time: "Fin de charge",
    charging_ending_soon: "Charge se terminant bientôt",
    charging_ending_in: "Charge se terminant dans",
    charging_until: "Charge jusqu'à",
    minutes: "minutes",
    minute: "minute",
    hours: "heures",
    hour: "heure",
    state: {
      default: {
        on: "Allumé",
        off: "Éteint"
      }
    }
  },
  vehicle_types: {
    ev: "Véhicule électrique",
    fuel: "Véhicule à carburant",
    hybrid: "Hybride"
  },
  editor: {
    title: "Carte Ultra Véhicule",
    card_title: "Titre de la carte",
    vehicle_type: "Type de véhicule",
    unit_type: "Type d'unité",
    show_battery: "Afficher la batterie",
    show_battery_range: "Afficher l'autonomie de la batterie",
    show_fuel: "Afficher le carburant",
    show_fuel_range: "Afficher l'autonomie du carburant",
    show_location: "Afficher l'emplacement",
    show_mileage: "Afficher le kilométrage",
    show_car_state: "Afficher l'état du véhicule",
    show_charge_limit: "Afficher la limite de charge",
    hybrid_display_order: "Ordre d'affichage hybride",
    fuel_first: "Carburant en premier",
    battery_first: "Batterie en premier",
    images: "Images",
    main_image: "Image principale",
    charging_image: "Image de charge",
    enter_image_url: "Entrer l'URL de l'image",
    upload_image: "Télécharger une image",
    entity_settings: "Paramètres des entités",
    battery_level: "Niveau de batterie",
    battery_range: "Autonomie de la batterie",
    fuel_level: "Niveau de carburant",
    fuel_range: "Autonomie du carburant",
    charging_status: "État de charge",
    location: "Emplacement",
    mileage: "Kilométrage",
    car_state: "État du véhicule",
    charge_limit: "Limite de charge",
    engine_on: "Moteur en marche",
    icon_grid: "Grille d'icônes",
    add_entity: "Ajouter une entité",
    add_row_separator: "Ajouter un séparateur de ligne",
    custom_icons: "Icônes personnalisées",
    inactive_icon: "Icône inactive",
    active_icon: "Icône active",
    no_icon: "PAS D'ICÔNE",
    inactive_icon_color: "Couleur de l'icône inactive",
    active_icon_color: "Couleur de l'icône active",
    icon_style: "Style d'icône",
    icon_size: "Taille de l'icône",
    icon_size_description: "Taille de l'icône.",
    icon_label_position: "Position de l'étiquette de l'icône",
    left: "Gauche",
    top: "Haut",
    right: "Droite",
    bottom: "Bas",
    interaction: "Interaction",
    colors: "Couleurs",
    cardBackgroundColor: "Couleur de fond de la carte",
    barBackgroundColor: "Couleur de fond de la barre",
    barBorderColor: "Couleur de bordure de la barre",
    barFillColor: "Couleur de remplissage de la barre",
    limitIndicatorColor: "Couleur de l'indicateur de limite",
    infoTextColor: "Couleur du texte d'information",
    carStateTextColor: "Couleur du texte d'état du véhicule",
    rangeTextColor: "Couleur du texte d'autonomie",
    percentageTextColor: "Couleur du texte de pourcentage",
    none: "Aucun",
    local_url: "Local/URL",
    entity: "Entité",
    search_entities: "Rechercher des entités",
    battery_level_description: "Sélectionnez l'entité qui représente le niveau de batterie de votre véhicule.",
    battery_range_description: "Sélectionnez l'entité qui représente l'autonomie restante de votre véhicule électrique.",
    charging_status_description: "Sélectionnez l'entité qui indique si votre véhicule est actuellement en charge.",
    charge_limit_description: "Sélectionnez l'entité qui représente la limite de charge définie pour votre véhicule.",
    location_description: "Sélectionnez l'entité qui fournit l'emplacement actuel de votre véhicule.",
    mileage_description: "Sélectionnez l'entité qui représente le kilométrage total ou la lecture de l'odomètre de votre véhicule.",
    car_state_description: "Sélectionnez l'entité qui représente l'état actuel de votre véhicule (par exemple, stationné, en mouvement, en charge).",
    icon_grid_description: "Ajoutez des entités à la grille d'icônes. Recherchez et sélectionnez des entités à ajouter. Utilisez la poignée de glissement pour réorganiser les entités. Cliquez sur l'icône pour la modifier et utilisez (×) pour supprimer une entité de la grille.",
    custom_colors_description: "Personnalisez les couleurs de divers éléments de la carte pour correspondre à votre style ou thème préféré.",
    row_separator: "Séparateur de ligne",
    add_row_separator: "Ajouter un séparateur de ligne",
    separator_color: "Couleur du séparateur",
    separator_color_description: "Choisissez la couleur du séparateur de ligne.",
    transparent: "Transparent",
    set_color: "Définir la couleur",
    separator_height: "Hauteur du séparateur",
    separator_height_description: "Définissez la hauteur du séparateur de ligne en pixels.",
    icon_gap_size: "Taille de l'espace entre les icônes",
    icon_gap_description: "Définissez l'espace entre les icônes en pixels.",
    horizontal_alignment: "Alignement horizontal",
    vertical_alignment: "Alignement vertical",
    more_info: "Plus d'informations",
    select_entity: "Sélectionner une entité",
    entity_provides_image: "Cette entité fournit l'image pour l'affichage.",
    toggle: "Basculer",
    navigate: "Naviguer",
    url: "Ouvrir l'URL",
    trigger: "Déclencher",
    formatted_entities: "Entités formatées",
    formatted_entities_description: "Nettoyez les valeurs des entités en arrondissant les nombres, en remplaçant les tirets bas par des espaces, en mettant les mots en majuscules et en ajoutant des virgules aux grands nombres.",
    fuel_level_description: "Sélectionnez l'entité qui représente le niveau de carburant de votre véhicule.",
    fuel_range_description: "Sélectionnez l'entité qui représente l'autonomie de carburant restante de votre véhicule.",
    engine_on_description: "Sélectionnez l'entité qui indique si le moteur de votre véhicule est actuellement en marche.",
    main_image_height: "Hauteur de l'image principale",
    charging_image_height: "Hauteur de l'image de charge",
    main_image_section: "Paramètres de l'image principale",
    charging_image_section: "Paramètres de l'image de charge",
    layout_type: "Type de mise en page",
    single_column: "Colonne unique",
    double_column: "Double colonne",
    engine_on_image: "Image moteur en marche",
    engine_on_image_height: "Hauteur de l'image moteur en marche",
    engine_off_image: "Image moteur arrêté",
    engine_off_image_height: "Hauteur de l'image moteur arrêté",
    engine_on_image_section: "Paramètres de l'image moteur en marche",
    use_bar_gradient: "Utiliser un dégradé pour la barre",
    bar_gradient_description: "Activer un dégradé de couleur pour la barre de progression. Cela vous permet de définir plusieurs arrêts de couleur pour une représentation visuelle plus dynamique de l'état du véhicule.",
    percentage: "Pourcentage",
    color: "Couleur",
    add_gradient_stop: "Ajouter un arrêt de dégradé"
  },
  device_class: {
    battery: {
      on: "Faible",
      off: "Normal"
    },
    battery_charging: {
      on: "En charge",
      off: "Pas en charge"
    },
    carbon_monoxide: {
      on: "Détecté",
      off: "Aucun"
    },
    cold: {
      on: "Froid",
      off: "Normal"
    },
    connectivity: {
      on: "Connecté",
      off: "Déconnecté"
    },
    door: {
      on: "Ouverte",
      off: "Fermée"
    },
    garage_door: {
      on: "Ouverte",
      off: "Fermée"
    },
    gas: {
      on: "Détecté",
      off: "Aucun"
    },
    heat: {
      on: "Chaud",
      off: "Normal"
    },
    light: {
      on: "Détectée",
      off: "Aucune"
    },
    lock: {
      on: "Déverrouillé",
      off: "Verrouillé"
    },
    moisture: {
      on: "Humide",
      off: "Sec"
    },
    motion: {
      on: "Détecté",
      off: "Aucun"
    },
    moving: {
      on: "En mouvement",
      off: "Arrêté"
    },
    occupancy: {
      on: "Occupé",
      off: "Libre"
    },
    opening: {
      on: "Ouvert",
      off: "Fermé"
    },
    plug: {
      on: "Branché",
      off: "Débranché"
    },
    power: {
      on: "Détectée",
      off: "Pas d'alimentation"
    },
    presence: {
      on: "Présent",
      off: "Absent"
    },
    problem: {
      on: "Problème",
      off: "OK"
    },
    running: {
      on: "En marche",
      off: "Arrêté"
    },
    safety: {
      on: "Dangereux",
      off: "Sûr"
    },
    smoke: {
      on: "Détectée",
      off: "Aucune"
    },
    sound: {
      on: "Détecté",
      off: "Aucun"
    },
    tamper: {
      on: "Détectée",
      off: "Aucune"
    },
    update: {
      on: "Disponible",
      off: "À jour"
    },
    vibration: {
      on: "Détectée",
      off: "Aucune"
    },
    window: {
      on: "Ouverte",
      off: "Fermée"
    }
  }
}