//
//  ClientManager.swift
//  hrmes
//
//  Created by Eric Guzman on 4/19/18.
//  Copyright © 2018 Microsoft. All rights reserved.
//

import UIKit

class ClientManager {
    static let sharedClient = MSClient(applicationURLString: "https://yourAPP.azurewebsites.net")
}
