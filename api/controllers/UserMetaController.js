/**
 * UserMetaController
 *
 * @description :: Server-side logic for managing Usermetas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function( req, res ){

		UserMeta.create(req.body).exec( function( err, umeta ){
			if( err ){
				return res.json( err.status, {err:err});
			}

			if( umeta ){
				return res.json( 200, {meta:umeta} );
			}
		})
	}

};
