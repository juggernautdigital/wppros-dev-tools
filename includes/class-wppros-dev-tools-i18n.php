<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://www.wp-proz.com
 * @since      1.0.0
 *
 * @package    Wpproz_Dev_Tools
 * @subpackage Wpproz_Dev_Tools/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Wpproz_Dev_Tools
 * @subpackage Wpproz_Dev_Tools/includes
 * @author     WP-Proz <support@wp-proz.com>
 */
class Wpproz_Dev_Tools_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wpproz-dev-tools',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
